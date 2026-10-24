#!/bin/zsh
# hapus deployment Vercel lama hp-kino, sisain KEEP yg paling baru (checkpoint buat revert).
# backup tiap versi juga ada di Cloudflare: https://hp-kino-media.hp-kino.workers.dev/hpkino-vNNN/
# pake: zsh tools/vercel-cleanup.sh        (liat dulu yg mau dihapus)
#       zsh tools/vercel-cleanup.sh --hapus (beneran hapus)
cd "${0:A:h}/.."
KEEP=10
SCOPE=team_5KnUmPUxjUacNoD6G4Q83CtX
ALL=() NEXT=()
for i in {1..40}; do
  OUT=$(npx vercel ls hp-kino --scope $SCOPE $NEXT 2>&1)
  ALL+=(${(f)"$(echo "$OUT" | grep -E '^\s+[0-9]+[smhd] ' | awk '{print $3}')"})
  N=$(echo "$OUT" | grep -oE -- '--next [0-9]+') || break
  NEXT=(${=N})
done
PROD=$(npx vercel inspect hp-kino.vercel.app --scope $SCOPE 2>&1 | grep -oE 'https://hp-kino-[a-z0-9]+-moran8\.vercel\.app' | head -1)
DEL=(${ALL[$((KEEP + 1)),-1]})
DEL=(${DEL:#$PROD})
echo "total ${#ALL}, disisain $KEEP paling baru (+ yg lagi live: $PROD), dihapus ${#DEL}"
[[ "$1" == "--hapus" ]] || { echo "cek dulu. kalo oke: zsh tools/vercel-cleanup.sh --hapus"; exit 0; }
for u in $DEL; do npx vercel rm $u --yes --scope $SCOPE > /dev/null 2>&1 && echo "hapus $u" || echo "gagal $u"; done
