import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kjvikleyljdfaoasttwd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqdmlrbGV5bGpkZmFvYXN0dHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3MzY5OTEsImV4cCI6MjAxMjMxMjk5MX0.-4SSxXfv0biK5OGjYRjgmRXGboczxokF5BQFpRK8ZLE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
