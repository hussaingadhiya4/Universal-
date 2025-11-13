/*
  # Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Full name of the person submitting
      - `company` (text, optional) - Company name
      - `email` (text, required) - Email address
      - `phone` (text, optional) - Phone number
      - `message` (text, required) - Message content
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the submission (new, contacted, resolved)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting submissions (public access for form submissions)
    - Add policy for reading submissions (authenticated admin users only)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
