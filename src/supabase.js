import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djfeyuqvyyudqxkurfod.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseSecret = process.env.SUPABASE_SECRET;

const supabase = createClient(supabaseUrl, supabaseKey, supabaseSecret);

export default supabase;