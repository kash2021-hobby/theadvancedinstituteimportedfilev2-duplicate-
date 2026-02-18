/*
  # Create Special Lectures Table

  ## Overview
  This migration creates a table to store information about special lectures by industry experts
  and guest speakers that are offered as part of the coaching program.

  ## New Tables
  
  ### `special_lectures`
  Stores information about special guest lectures and expert sessions
  - `id` (uuid, primary key) - Unique identifier for each lecture
  - `course_id` (uuid, foreign key) - Links to courses table (nullable, NULL means available for all courses)
  - `expert_name` (text) - Name of the guest expert/speaker
  - `expert_title` (text) - Professional title/credentials of the expert
  - `expert_credentials` (text) - Detailed qualifications and background
  - `expert_image_url` (text, nullable) - URL to expert's photo
  - `topic` (text) - Main topic/title of the lecture
  - `description` (text) - Detailed description of the lecture content
  - `key_takeaways` (text[], array) - List of key learning points
  - `lecture_date` (timestamptz, nullable) - Scheduled date for upcoming lectures
  - `duration_minutes` (integer) - Duration of the lecture
  - `is_upcoming` (boolean) - Whether this is an upcoming or past lecture
  - `is_featured` (boolean) - Whether to feature prominently on homepage
  - `available_online` (boolean) - Whether online students can attend
  - `registration_url` (text, nullable) - Link to register for the lecture
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Record update timestamp

  ## Security
  - Enable RLS on `special_lectures` table
  - Add policy for public read access (lectures are promotional content)
  - Add policy for authenticated admin users to manage lectures

  ## Indexes
  - Index on `course_id` for efficient course-specific queries
  - Index on `is_featured` for homepage queries
  - Index on `is_upcoming` and `lecture_date` for upcoming lectures queries
*/

-- Create special_lectures table
CREATE TABLE IF NOT EXISTS special_lectures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE SET NULL,
  expert_name text NOT NULL,
  expert_title text NOT NULL,
  expert_credentials text DEFAULT '',
  expert_image_url text,
  topic text NOT NULL,
  description text NOT NULL,
  key_takeaways text[] DEFAULT '{}',
  lecture_date timestamptz,
  duration_minutes integer DEFAULT 60,
  is_upcoming boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  available_online boolean DEFAULT true,
  registration_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE special_lectures ENABLE ROW LEVEL SECURITY;

-- Policy for public read access
CREATE POLICY "Anyone can view special lectures"
  ON special_lectures
  FOR SELECT
  USING (true);

-- Policy for authenticated users to insert lectures (admin functionality)
CREATE POLICY "Authenticated users can insert special lectures"
  ON special_lectures
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy for authenticated users to update lectures (admin functionality)
CREATE POLICY "Authenticated users can update special lectures"
  ON special_lectures
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy for authenticated users to delete lectures (admin functionality)
CREATE POLICY "Authenticated users can delete special lectures"
  ON special_lectures
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_special_lectures_course_id ON special_lectures(course_id);
CREATE INDEX IF NOT EXISTS idx_special_lectures_featured ON special_lectures(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_special_lectures_upcoming ON special_lectures(is_upcoming, lecture_date) WHERE is_upcoming = true;

-- Insert sample data for demonstration
INSERT INTO special_lectures (expert_name, expert_title, expert_credentials, topic, description, key_takeaways, lecture_date, is_upcoming, is_featured, available_online) VALUES
(
  'Dr. Amit Verma',
  'Former SSC Commissioner',
  'Ph.D. in Public Administration, 25+ years in government service, Former SSC Regional Director',
  'Inside the SSC Selection Process: What Evaluators Really Look For',
  'An exclusive session with a former SSC Commissioner revealing the insider perspective on how candidates are evaluated, common mistakes that lead to rejection, and the exact qualities that impress the selection committee.',
  ARRAY['Understanding the SSC evaluation criteria', 'Common mistakes that cost candidates their selection', 'How to present yourself in SSC interviews', 'Document verification process insights', 'Tips from 25 years of government service'],
  (NOW() + INTERVAL '15 days')::timestamptz,
  true,
  true,
  true
),
(
  'Shri Rajiv Malhotra',
  'Retired Railway Board Member',
  'B.Tech IIT Delhi, 30 years in Indian Railways, Former Railway Board Member (Operations)',
  'Career Growth in Indian Railways: Opportunities and Challenges',
  'Learn directly from a retired Railway Board Member about the vast career opportunities within Indian Railways, promotion patterns, work culture, and how to excel in your railway career after selection.',
  ARRAY['Railway organizational structure', 'Career progression pathways', 'Life as a railway employee', 'Training and development opportunities', 'Real experiences from 30 years in railways'],
  (NOW() + INTERVAL '22 days')::timestamptz,
  true,
  true,
  true
),
(
  'Ms. Priya Deshmukh',
  'Bank Manager, State Bank of India',
  'MBA Finance, CAIIB certified, 15 years in banking sector, Currently Branch Manager at SBI',
  'Banking Sector Transformation: Digital Banking and Future Careers',
  'Understand the evolving banking landscape, digital transformation in banking, and what skills are essential for a successful banking career in the modern era.',
  ARRAY['Digital banking revolution', 'Skills required for modern banking jobs', 'Career opportunities in banking sector', 'Banking operations and customer service', 'Preparing for banking interviews'],
  (NOW() + INTERVAL '8 days')::timestamptz,
  true,
  true,
  false
),
(
  'Mr. Suresh Patel',
  'UPSC CSE Qualified IAS Officer',
  'IAS (Indian Administrative Service), B.Tech + M.A. in Public Policy, District Magistrate',
  'From Engineering to IAS: My Journey and Tips for Aspirants',
  'An inspiring session by an IAS officer who cleared UPSC after working as an engineer. Learn about time management, balancing job and preparation, and the mindset needed for success.',
  ARRAY['Balancing job and exam preparation', 'Time management strategies', 'Choosing between different competitive exams', 'Mental resilience and motivation', 'Real-life governance experiences'],
  (NOW() - INTERVAL '30 days')::timestamptz,
  false,
  false,
  true
),
(
  'Dr. Kavita Nair',
  'English Language Expert & Author',
  'Ph.D. in English Literature, Published author of 5 English grammar books, Former professor at JNU',
  'Mastering English for Competitive Exams: Advanced Techniques',
  'A masterclass on English language preparation with focus on comprehension, vocabulary building, and common grammatical pitfalls that cost students marks in competitive exams.',
  ARRAY['Speed reading techniques', 'Vocabulary building strategies', 'Common grammar mistakes', 'Comprehension tricks', 'English for descriptive papers'],
  (NOW() - INTERVAL '45 days')::timestamptz,
  false,
  false,
  true
);