/*
  # Add Country and Interest Fields to Contact Submissions

  1. Changes
    - Add `country` column (text, optional) to store the country of the contact
    - Add `interest` column (text, optional) to store whether they're interested in Import, Export, or Both
  
  2. Notes
    - Uses IF NOT EXISTS pattern to prevent errors if columns already exist
    - These fields enhance the contact form with more specific trade-related information
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'country'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN country text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'interest'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN interest text;
  END IF;
END $$;
