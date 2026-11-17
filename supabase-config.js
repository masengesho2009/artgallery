// Supabase project configuration.
// The publishable key is intended for browser use. Never place a secret/service_role key here.
const SUPABASE_URL = "https://fgpaeugxmahsnyihcobj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_LkEa9YuLTxJKlvIrzn9FJA_v4qGwGGc";

window.studioSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
