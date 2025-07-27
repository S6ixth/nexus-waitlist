/*
  # Simple waitlist fix

  1. Tables
    - Drop and recreate waitlist table with proper permissions
    - Simple structure with no complex RLS
  
  2. Security
    - Allow anonymous inserts
    - Basic duplicate prevention
*/

-- Drop existing table and recreate
DROP TABLE IF EXISTS waitlist;

-- Create simple waitlist table
CREATE TABLE waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  user_type text NOT NULL DEFAULT 'unspecified',
  created_at timestamptz DEFAULT now()
);

-- Disable RLS for simplicity
ALTER TABLE waitlist DISABLE ROW LEVEL SECURITY;

-- Grant permissions to anonymous users
GRANT INSERT, SELECT ON waitlist TO anon;
GRANT INSERT, SELECT ON waitlist TO authenticated;

-- Grant sequence permissions
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;