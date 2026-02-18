-- Create Courses Table for Managing Course Information
-- This migration creates a comprehensive courses table to manage all course information,
-- including online class availability and features.

CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  duration text NOT NULL,
  mode text NOT NULL,
  batch_size text NOT NULL,
  description text NOT NULL,
  overview text NOT NULL,
  highlights jsonb NOT NULL DEFAULT '[]'::jsonb,
  logo text,
  background_image text,
  is_featured boolean DEFAULT false,
  has_online_support boolean DEFAULT false,
  online_features jsonb DEFAULT '[]'::jsonb,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Public read access for all courses
CREATE POLICY "Anyone can view courses"
  ON courses
  FOR SELECT
  USING (true);

-- Only authenticated users can insert courses (for future admin panel)
CREATE POLICY "Authenticated users can insert courses"
  ON courses
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update courses
CREATE POLICY "Authenticated users can update courses"
  ON courses
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete courses
CREATE POLICY "Authenticated users can delete courses"
  ON courses
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster slug lookups
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);

-- Create index for display order
CREATE INDEX IF NOT EXISTS idx_courses_display_order ON courses(display_order);