-- Examen civique — Supabase schema
-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query).

-- 1. Profiles table (one row per student, mirrors auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  display_name text not null,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Helper function: checks admin status without recursive RLS lookups.
-- security definer means it runs with the privileges of the function owner,
-- bypassing RLS internally, so it can safely be called from within a policy.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false);
$$;

create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

create policy "profiles_select_admin" on public.profiles
  for select using (public.is_admin());

create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);

-- Auto-create a profiles row whenever someone signs up.
-- display_name comes from the signup call's options.data.display_name.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1)));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. Attempts table (one row per exam/practice session completed)
create table if not exists public.attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  mention text not null,
  mode text not null,
  total integer not null,
  correct integer not null,
  by_theme jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.attempts enable row level security;

create policy "attempts_select_own" on public.attempts
  for select using (auth.uid() = user_id);

create policy "attempts_select_admin" on public.attempts
  for select using (public.is_admin());

create policy "attempts_insert_own" on public.attempts
  for insert with check (auth.uid() = user_id);

create policy "attempts_delete_own" on public.attempts
  for delete using (auth.uid() = user_id);

create index if not exists attempts_user_id_idx on public.attempts (user_id);

-- 3. After running this file: sign up for an account in the app once,
-- then promote yourself to admin by running (replace the email):
--
--   update public.profiles set is_admin = true
--   where id = (select id from auth.users where email = 'you@example.com');
