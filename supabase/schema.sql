-- AISO Development & Innovation
-- Apply through a reviewed migration. Never expose the service-role key to the browser.

create extension if not exists pgcrypto;

create type request_status as enum ('new','reviewing','qualified','closed','archived');
create type technology_status as enum ('in_development','ready_for_testing','ready_for_industrial_trial','available_for_licensing','exclusively_licensed');

create table sectors (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name_en text not null,
  name_ar text not null,
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table technologies (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name_en text not null,
  name_ar text not null,
  problem_en text,
  problem_ar text,
  summary_en text,
  summary_ar text,
  sector_id uuid references sectors(id),
  stage_en text,
  stage_ar text,
  status technology_status not null default 'in_development',
  is_public boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_en text not null,
  title_ar text not null,
  excerpt_en text,
  excerpt_ar text,
  body_en text,
  body_ar text,
  category text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table development_requests (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  project_type text,
  problem_description text,
  commercial_objective text,
  urgent boolean,
  sample_available boolean,
  consent boolean not null default false,
  status request_status not null default 'new',
  created_at timestamptz not null default now()
);

create table partnership_requests (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  city text,
  factory_type text,
  sectors text,
  mixing_capabilities text,
  filling_capabilities text,
  permitted_materials text,
  certificates text,
  production_capacity text,
  contact_details text not null,
  status request_status not null default 'new',
  created_at timestamptz not null default now()
);

create table licensing_requests (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  sector text,
  territory text,
  technology_interest text,
  intended_use text,
  contact_details text not null,
  status request_status not null default 'new',
  created_at timestamptz not null default now()
);

create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  phone text,
  enquiry_type text,
  message text not null,
  status request_status not null default 'new',
  created_at timestamptz not null default now()
);

create table site_content (
  id uuid primary key default gen_random_uuid(),
  content_key text unique not null,
  value_en text,
  value_ar text,
  updated_at timestamptz not null default now()
);

create table contact_settings (
  id uuid primary key default gen_random_uuid(),
  setting_key text unique not null,
  value text,
  is_public boolean not null default false,
  updated_at timestamptz not null default now()
);

create table private_files (
  id uuid primary key default gen_random_uuid(),
  request_type text not null,
  request_id uuid not null,
  storage_path text unique not null,
  original_name text not null,
  mime_type text not null,
  size_bytes bigint not null check (size_bytes > 0 and size_bytes <= 15728640),
  created_at timestamptz not null default now()
);

alter table sectors enable row level security;
alter table technologies enable row level security;
alter table articles enable row level security;
alter table development_requests enable row level security;
alter table partnership_requests enable row level security;
alter table licensing_requests enable row level security;
alter table contact_messages enable row level security;
alter table site_content enable row level security;
alter table contact_settings enable row level security;
alter table private_files enable row level security;

create policy "public read active sectors" on sectors for select using (active = true);
create policy "public read disclosed technologies" on technologies for select using (is_public = true);
create policy "public read published articles" on articles for select using (published = true);
create policy "public read approved content" on site_content for select using (true);
create policy "public read approved contacts" on contact_settings for select using (is_public = true);

-- Public inserts should go through a rate-limited server endpoint with CAPTCHA,
-- schema validation, file inspection and size/type allowlists. No direct anonymous
-- insert policy is intentionally created here.
-- Create a private storage bucket named technical-submissions and allow access only
-- through short-lived signed URLs generated by the protected server endpoint.
