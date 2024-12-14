
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://fhwnehlsxqhsmlcuwxdb.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZod25laGxzeHFoc21sY3V3eGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5Mjk5MzIsImV4cCI6MjA0OTUwNTkzMn0.tdXqWPGSxNqG2euboMXxkT6CyaCezbTsm7mmYHvZXhA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
