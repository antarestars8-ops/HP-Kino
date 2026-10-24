// panggil fungsi RPC Supabase (pake anon key; fungsi-fungsinya security definer + cek secret)
export async function rpc(name, args) {
  const r = await fetch(`${process.env.SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: 'POST',
    headers: { apikey: process.env.SUPABASE_ANON, Authorization: `Bearer ${process.env.SUPABASE_ANON}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(args),
  });
  if (!r.ok) throw new Error(`${name} ${r.status} ${await r.text()}`);
  const t = await r.text(); return t ? JSON.parse(t) : null;
}
