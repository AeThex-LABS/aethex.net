-- AeThex Global Developer Directory Database Schema
-- Run this SQL in your Supabase SQL Editor to create the required table

-- Create the developers table
CREATE TABLE IF NOT EXISTS developers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  division TEXT NOT NULL CHECK (division IN ('staff', 'labs', 'gameforge', 'corp', 'foundation', 'devlink', 'nexus')),
  location TEXT NOT NULL,
  coordinates JSONB NOT NULL,
  avatar TEXT NOT NULL,
  bio TEXT NOT NULL,
  skills TEXT[] NOT NULL DEFAULT '{}',
  projects TEXT[] NOT NULL DEFAULT '{}',
  email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create an index on division for faster filtering
CREATE INDEX IF NOT EXISTS idx_developers_division ON developers(division);

-- Create an index on name for faster searching
CREATE INDEX IF NOT EXISTS idx_developers_name ON developers(name);

-- Enable Row Level Security
ALTER TABLE developers ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read developers (public directory)
CREATE POLICY "Allow public read access"
  ON developers
  FOR SELECT
  USING (true);

-- Create a policy that allows authenticated users to insert developers
CREATE POLICY "Allow authenticated insert"
  ON developers
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create a policy that allows authenticated users to update developers
CREATE POLICY "Allow authenticated update"
  ON developers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create a policy that allows authenticated users to delete developers
CREATE POLICY "Allow authenticated delete"
  ON developers
  FOR DELETE
  TO authenticated
  USING (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to call the function before updates
CREATE TRIGGER update_developers_updated_at
  BEFORE UPDATE ON developers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data (optional - remove or modify as needed)
INSERT INTO developers (name, role, division, location, coordinates, avatar, bio, skills, projects, email)
VALUES 
  (
    'Alex Chen',
    'Senior Full Stack Engineer',
    'labs',
    'San Francisco, USA',
    '{"lat": 37.7749, "lng": -122.4194}'::jsonb,
    'AC',
    'Passionate about building scalable web applications and exploring new technologies. Specializes in React, Node.js, and cloud architecture.',
    ARRAY['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    ARRAY['AeThex Cloud Platform', 'Developer Portal', 'API Gateway'],
    'alex.chen@aethex.dev'
  ),
  (
    'Maria Rodriguez',
    'Lead Game Developer',
    'gameforge',
    'Barcelona, Spain',
    '{"lat": 41.3874, "lng": 2.1686}'::jsonb,
    'MR',
    'Creating immersive gaming experiences with cutting-edge graphics and engaging gameplay mechanics. Unity and Unreal Engine expert.',
    ARRAY['Unity', 'C#', 'Unreal Engine', 'C++', '3D Modeling'],
    ARRAY['Nexus Arena', 'Galaxy Conquest', 'VR Adventures'],
    'maria.rodriguez@aethex.dev'
  ),
  (
    'Yuki Tanaka',
    'AI Research Scientist',
    'labs',
    'Tokyo, Japan',
    '{"lat": 35.6762, "lng": 139.6503}'::jsonb,
    'YT',
    'Researching next-generation AI systems with focus on natural language processing and computer vision. Published author in ML conferences.',
    ARRAY['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    ARRAY['AI Assistant', 'Image Recognition System', 'Chatbot Framework'],
    'yuki.tanaka@aethex.dev'
  ),
  (
    'David Kim',
    'DevOps Engineer',
    'devlink',
    'Seoul, South Korea',
    '{"lat": 37.5665, "lng": 126.9780}'::jsonb,
    'DK',
    'Building and maintaining robust CI/CD pipelines and cloud infrastructure. Kubernetes and containerization enthusiast.',
    ARRAY['Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'AWS'],
    ARRAY['Infrastructure Automation', 'Deployment Pipeline', 'Monitoring System'],
    'david.kim@aethex.dev'
  ),
  (
    'Emma Wilson',
    'Product Designer',
    'staff',
    'London, United Kingdom',
    '{"lat": 51.5074, "lng": -0.1278}'::jsonb,
    'EW',
    'Crafting beautiful and intuitive user experiences. Believes in user-centered design and iterative prototyping.',
    ARRAY['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
    ARRAY['Design System', 'Mobile App Redesign', 'Dashboard UI'],
    'emma.wilson@aethex.dev'
  );

-- Enable realtime for the developers table (allows real-time subscriptions)
-- Note: You may need to enable this in the Supabase Dashboard under Database > Replication
ALTER PUBLICATION supabase_realtime ADD TABLE developers;
