create table if not exists public.users (
  student_id text primary key check (student_id ~ '^[0-9]{10}$'),
  instagram_id text not null unique check (instagram_id ~ '^[A-Za-z0-9._]+$'),
  answers text[] not null check (
    array_length(answers, 1) = 4
    and answers <@ array['O', 'X']::text[]
  ),
  score integer not null check (score between 0 and 4),
  ip_address text,
  posted_at timestamptz not null default now()
);
