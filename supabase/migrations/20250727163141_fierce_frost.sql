/*
  # Create working waitlist table with RLS

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `user_type` (text, not null)
      - `created_at` (timestamp with timezone, default now())

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for anonymous users to insert their own data
    - Add policy for authenticated users to read all data (for admin purposes)

  3. Notes
    - Anonymous users can only insert (sign up for waitlist)
    - Authenticated users can read all entries (for admin dashboard)
    - Email uniqueness is enforced at database level
*/

-- Drop existing table if it exists
DROP TABLE IF EXISTS public.waitlist;

-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  user_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Policy for anonymous users to insert waitlist entries
CREATE POLICY "Anyone can join waitlist"
  ON public.waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for authenticated users to read all waitlist entries (admin access)
CREATE POLICY "Authenticated users can read waitlist"
  ON public.waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Grant necessary permissions
GRANT INSERT ON public.waitlist TO anon;
GRANT SELECT ON public.waitlist TO authenticated;
GRANT ALL ON public.waitlist TO service_role;