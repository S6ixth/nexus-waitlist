/*
  # Fix waitlist RLS policies

  1. Security Updates
    - Drop existing restrictive policies
    - Add permissive policy for anonymous users to insert
    - Ensure authenticated users can read waitlist data
  
  2. Table Structure
    - Ensure waitlist table exists with proper constraints
    - Add proper indexes for performance
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can join waitlist" ON waitlist;
DROP POLICY IF EXISTS "Authenticated users can read waitlist" ON waitlist;

-- Ensure RLS is enabled
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create new permissive policies
CREATE POLICY "Allow anonymous waitlist signup"
  ON waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Ensure the table structure is correct
DO $$
BEGIN
  -- Check if waitlist table exists, create if not
  IF NOT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'waitlist') THEN
    CREATE TABLE waitlist (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      email text UNIQUE NOT NULL,
      user_type text NOT NULL CHECK (user_type IN ('athlete', 'recruiter', 'unspecified')),
      created_at timestamptz DEFAULT now()
    );
  END IF;

  -- Ensure indexes exist
  IF NOT EXISTS (SELECT FROM pg_indexes WHERE indexname = 'idx_waitlist_email') THEN
    CREATE INDEX idx_waitlist_email ON waitlist(email);
  END IF;

  IF NOT EXISTS (SELECT FROM pg_indexes WHERE indexname = 'idx_waitlist_user_type') THEN
    CREATE INDEX idx_waitlist_user_type ON waitlist(user_type);
  END IF;

  IF NOT EXISTS (SELECT FROM pg_indexes WHERE indexname = 'idx_waitlist_created_at') THEN
    CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
  END IF;
END $$;