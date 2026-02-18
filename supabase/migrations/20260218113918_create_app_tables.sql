/*
  # Create Mobile App Interest and Download Links Tables

  ## New Tables

  ### `app_interest`
  Stores information about users interested in the mobile app
  - `id` (uuid, primary key) - Unique identifier
  - `full_name` (text) - User's full name
  - `phone` (text) - Phone number
  - `email` (text) - Email address
  - `platform_preference` (text) - Preferred platform (ios/android/both)
  - `source_page` (text) - Page where user signed up
  - `created_at` (timestamptz) - Timestamp of registration

  ### `app_download_links`
  Manages app download links and QR codes for future updates
  - `id` (uuid, primary key) - Unique identifier
  - `platform` (text) - Platform name (ios/android)
  - `download_url` (text) - Store download URL
  - `qr_code_url` (text, nullable) - QR code image URL
  - `is_active` (boolean) - Whether link is currently active
  - `version` (text) - App version number
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on both tables
  - Add policies for authenticated admin access
  - Public insert policy for app_interest (for lead capture)
*/

-- Create app_interest table
CREATE TABLE IF NOT EXISTS app_interest (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  platform_preference text DEFAULT 'both' CHECK (platform_preference IN ('ios', 'android', 'both')),
  source_page text DEFAULT 'homepage',
  created_at timestamptz DEFAULT now()
);

-- Create app_download_links table
CREATE TABLE IF NOT EXISTS app_download_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL CHECK (platform IN ('ios', 'android')),
  download_url text NOT NULL,
  qr_code_url text,
  is_active boolean DEFAULT false,
  version text DEFAULT '1.0.0',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE app_interest ENABLE ROW LEVEL SECURITY;
ALTER TABLE app_download_links ENABLE ROW LEVEL SECURITY;

-- Policies for app_interest
CREATE POLICY "Anyone can submit app interest"
  ON app_interest
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view app interest"
  ON app_interest
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for app_download_links
CREATE POLICY "Anyone can view active download links"
  ON app_download_links
  FOR SELECT
  TO anon
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage download links"
  ON app_download_links
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_app_interest_created_at ON app_interest(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_app_interest_email ON app_interest(email);
CREATE INDEX IF NOT EXISTS idx_app_download_links_platform ON app_download_links(platform);
CREATE INDEX IF NOT EXISTS idx_app_download_links_active ON app_download_links(is_active);

-- Insert placeholder data for coming soon state
INSERT INTO app_download_links (platform, download_url, is_active, version)
VALUES
  ('ios', 'https://apps.apple.com/coming-soon', false, '1.0.0'),
  ('android', 'https://play.google.com/coming-soon', false, '1.0.0')
ON CONFLICT DO NOTHING;
