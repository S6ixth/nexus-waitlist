/*
  # Fix waitlist table functionality

  1. Tables
    - Ensure `waitlist` table exists with proper structure
    - Add proper constraints and indexes
  
  2. Security
    - Enable RLS on `waitlist` table
    - Add policies for anonymous and authenticated users
    
  3. Functions
    - Add trigger for updated_at timestamp
*/

-- Create waitlist table if it doesn't exist
CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  user_type text NOT NULL DEFAULT 'unspecified',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add constraint for user_type if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'waitlist_user_type_check' 
    AND table_name = 'waitlist'
  ) THEN
    ALTER TABLE waitlist ADD CONSTRAINT waitlist_user_type_check 
    CHECK (user_type = ANY (ARRAY['athlete'::text, 'recruiter'::text, 'unspecified'::text]));
  END IF;
END $$;

-- Enable RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can join waitlist" ON waitlist;
DROP POLICY IF EXISTS "Authenticated users can read waitlist" ON waitlist;

-- Create policies for waitlist access
CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Add updated_at trigger if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.triggers 
    WHERE trigger_name = 'update_waitlist_updated_at'
  ) THEN
    CREATE TRIGGER update_waitlist_updated_at
      BEFORE UPDATE ON waitlist
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_user_type ON waitlist(user_type);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);