-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query).

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null unique
);

alter table public.waitlist enable row level security;

-- Visitors (anon key) may add themselves, but can never read, change or
-- delete the list. View signups in the Dashboard → Table Editor.
create policy "anyone can join the waitlist"
  on public.waitlist for insert
  to anon
  with check (true);

-- Contact form messages.
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null
);

alter table public.messages enable row level security;

-- Visitors may send a message, but can never read the inbox.
create policy "anyone can send a message"
  on public.messages for insert
  to anon
  with check (true);
