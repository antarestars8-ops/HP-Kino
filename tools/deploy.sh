#!/bin/zsh
# deploy HP Kino: Cloudflare dulu (media + file inti per versi), baru Vercel.
# sw.js ngambil foto/video/suara + file inti dari Cloudflare, jadi kuota Vercel ga kebakar tiap update.
# pake: zsh tools/deploy.sh   (VERSION di sw.js harus udah dinaikin). --cdn-only = Cloudflare doang
set -e
cd "${0:A:h}/.."
V=$(grep -o "hpkino-v[0-9]*" sw.js | head -1)
CF_ACCOUNT=dbb12fa9724cc7ac88a2caf976bee115
CDN=https://hp-kino-media.hp-kino.workers.dev
OUT=$(mktemp -d)/cf
echo "== $V"

# 0. jadwal push (api/_events.js) dibikin ulang dari data.js, biar notif HP ga ketinggalan
node tools/build-events.mjs || { echo "build-events gagal — ga dideploy"; exit 1; }

# 1. Cloudflare: media di root, file inti di /<versi>/
mkdir -p $OUT/$V/i18n
rsync -a --exclude '*.md' --exclude '.DS_Store' img vid aud icons $OUT/
cp index.html style.css app.js data.js manifest.webmanifest $OUT/$V/
cp i18n/core.js $OUT/$V/i18n/
printf '/*\n  Access-Control-Allow-Origin: *\n  Access-Control-Expose-Headers: Date\n  Cache-Control: public, max-age=604800\n' > $OUT/_headers
pkill -f "wrangler deploy" 2>/dev/null || true # sisa deploy yg nyangkut bikin wrangler hang
(cd $OUT && CI=1 CLOUDFLARE_ACCOUNT_ID=$CF_ACCOUNT perl -e 'alarm 240; exec @ARGV' npx --prefix "$OLDPWD" wrangler deploy --assets . --name hp-kino-media --compatibility-date 2026-10-01 < /dev/null | grep -i "uploaded\|workers.dev")

# 2. cek CDN udah nyajiin versi ini (harus sama persis sama lokal)
sleep 5
for f in app.js data.js style.css index.html i18n/core.js manifest.webmanifest; do
  curl -sfL "$CDN/$V/$f" | cmp -s - $f || { echo "CDN belum sama: $f — Vercel ga dideploy"; exit 1; }
done
echo "CDN ok"
[[ "$1" == "--cdn-only" ]] && exit 0 # buat ngetes di localhost dulu

# 3. Vercel
npx vercel deploy --prod --yes --scope team_5KnUmPUxjUacNoD6G4Q83CtX > /dev/null 2>&1
sleep 4
curl -s https://hp-kino.vercel.app/sw.js | grep -q "$V" && echo "Vercel ok: $V" || echo "Vercel belum $V, cek lagi"
