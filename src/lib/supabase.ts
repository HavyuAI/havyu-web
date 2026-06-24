// ✅ [FEATURE]: Supabase browser client for the marketing site.
// Goes at: src/lib/supabase.ts
// Uses the SAME Supabase project as the app (anon key is public-by-design).
// Set these in a `.env` at the project root (PUBLIC_ prefix exposes them to islands):
//   PUBLIC_SUPABASE_URL=https://<your-ref>.supabase.co
//   PUBLIC_SUPABASE_ANON_KEY=<your anon key>
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Null-safe: if env isn't set yet, the form degrades gracefully instead of crashing.
export const supabase: SupabaseClient | null =
  url && anon ? createClient(url, anon) : null;
