<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c4a16a519 (Initial commit)
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djfeyuqvyyudqxkurfod.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseSecret = process.env.SUPABASE_SECRET;

const supabase = createClient(supabaseUrl, supabaseKey, supabaseSecret);

<<<<<<< HEAD
export default supabase;
=======
import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
);
>>>>>>> origin/main
=======
export default supabase;
>>>>>>> c4a16a519 (Initial commit)
