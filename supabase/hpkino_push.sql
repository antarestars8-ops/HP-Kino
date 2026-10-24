-- HP Kino · push notif pas app ketutup
-- Jalanin SEKALI di Supabase → SQL Editor → New query → paste semua → Run.
-- Isinya: tabel langganan, fungsi akses (pake secret), dan timer tiap menit yg manggil Vercel.

create extension if not exists pg_cron;
create extension if not exists pg_net;

create table if not exists public.hpkino_push_subs (
  id bigserial primary key,
  endpoint text unique not null,
  p256dh text not null,
  auth text not null,
  tz_min int not null default 0,          -- offset zona waktu pemain (menit, WIB = 420, KST = 540)
  lang text not null default 'id',        -- bahasa: id / en / ko
  last_sent timestamptz not null default now(),
  created_at timestamptz not null default now()
);
alter table public.hpkino_push_subs enable row level security;  -- ga ada policy: anon ga bisa baca langsung

-- browser pemain daftar (lewat /api/subscribe)
alter table public.hpkino_push_subs add column if not exists lang text not null default 'id';

create or replace function public.hpkino_subscribe(p_endpoint text, p_p256dh text, p_auth text, p_tz int, p_lang text default 'id')
returns void language sql security definer set search_path = public as $$
  insert into hpkino_push_subs (endpoint, p256dh, auth, tz_min, lang) values (p_endpoint, p_p256dh, p_auth, p_tz, coalesce(p_lang, 'id'))
  on conflict (endpoint) do update set p256dh = excluded.p256dh, auth = excluded.auth, tz_min = excluded.tz_min, lang = excluded.lang;
$$;

-- cuma server (pake secret) yg boleh baca / update
create or replace function public.hpkino_subs(p_secret text)
returns setof public.hpkino_push_subs language plpgsql security definer set search_path = public as $$
begin
  if p_secret <> '9e6197faf9a3e9d7753870e67ce240153b59dea2c152f261' then raise exception 'unauthorized'; end if;
  return query select * from hpkino_push_subs;
end $$;

create or replace function public.hpkino_mark(p_secret text, p_id bigint, p_ts timestamptz)
returns void language plpgsql security definer set search_path = public as $$
begin
  if p_secret <> '9e6197faf9a3e9d7753870e67ce240153b59dea2c152f261' then raise exception 'unauthorized'; end if;
  update hpkino_push_subs set last_sent = p_ts where id = p_id;
end $$;

create or replace function public.hpkino_unsub(p_secret text, p_endpoint text)
returns void language plpgsql security definer set search_path = public as $$
begin
  if p_secret <> '9e6197faf9a3e9d7753870e67ce240153b59dea2c152f261' then raise exception 'unauthorized'; end if;
  delete from hpkino_push_subs where endpoint = p_endpoint;
end $$;

grant execute on function public.hpkino_subscribe(text, text, text, int, text) to anon;
grant execute on function public.hpkino_subs(text) to anon;
grant execute on function public.hpkino_mark(text, bigint, timestamptz) to anon;
grant execute on function public.hpkino_unsub(text, text) to anon;

-- timer: tiap menit manggil Vercel buat ngirim push yg jamnya udah lewat
select cron.unschedule('hpkino-tick') where exists (select 1 from cron.job where jobname = 'hpkino-tick');
select cron.schedule('hpkino-tick', '* * * * *', $$
  select net.http_post(
    url := 'https://hp-kino.vercel.app/api/tick',
    headers := '{"Content-Type": "application/json", "x-tick-secret": "9e6197faf9a3e9d7753870e67ce240153b59dea2c152f261"}'::jsonb,
    body := '{}'::jsonb
  );
$$);
