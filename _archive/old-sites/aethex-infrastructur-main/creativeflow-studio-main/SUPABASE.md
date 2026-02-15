# Supabase Integration Setup

This project uses Supabase as the backend database for storing developer information.

## Prerequisites

- A Supabase account (sign up at [supabase.com](https://supabase.com))
- Your Supabase project URL and anon key

## Setup Instructions

### 1. Environment Variables

The following environment variables are already configured in `.env`:

```
VITE_SUPABASE_URL=https://kmdeisowhtsalsekkzqd.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_DfTB6qME8BkTmHNJ3dCBew_t1NLATEq
```

### 2. Database Schema Setup

1. Go to your Supabase project dashboard
2. Navigate to the **SQL Editor** (in the left sidebar)
3. Copy the contents of `supabase-schema.sql`
4. Paste it into the SQL Editor
5. Click **Run** to execute the SQL

This will create:
- The `developers` table with all required columns
- Indexes for better query performance
- Row Level Security (RLS) policies for access control
- A trigger to automatically update timestamps
- Sample developer data (optional - you can remove this)
- Real-time subscription support

### 3. Database Structure

The `developers` table has the following schema:

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `name` | TEXT | Developer's full name |
| `role` | TEXT | Job title/role |
| `division` | TEXT | Division (staff, labs, gameforge, corp, foundation, devlink, nexus) |
| `location` | TEXT | City, Country |
| `coordinates` | JSONB | Geographic coordinates `{"lat": number, "lng": number}` |
| `avatar` | TEXT | Avatar URL or initials |
| `bio` | TEXT | Developer biography |
| `skills` | TEXT[] | Array of skill strings |
| `projects` | TEXT[] | Array of project names |
| `email` | TEXT | Email address (optional) |
| `created_at` | TIMESTAMPTZ | Creation timestamp |
| `updated_at` | TIMESTAMPTZ | Last update timestamp |

### 4. Security Configuration

The database is configured with Row Level Security (RLS):

- **Public Read**: Anyone can view developer profiles
- **Authenticated Write**: Only authenticated users can add/edit/delete developers

To allow anonymous writes (for development), you can modify the policies in the Supabase dashboard.

### 5. Real-time Updates

The app automatically subscribes to database changes and updates the UI in real-time when:
- New developers are added
- Developer information is updated
- Developers are removed

This is handled by the `useDevelopers` hook in `src/hooks/use-developers.ts`.

## Usage

### Fetching Developers

The `useDevelopers` hook provides all the functionality you need:

```typescript
import { useDevelopers } from '@/hooks/use-developers'

function MyComponent() {
  const { developers, loading, error, addDeveloper, updateDeveloper, deleteDeveloper, refetch } = useDevelopers()
  
  // developers: Array of all developers
  // loading: Boolean indicating if data is being fetched
  // error: String with error message if fetch failed
  // addDeveloper: Function to add a new developer
  // updateDeveloper: Function to update an existing developer
  // deleteDeveloper: Function to delete a developer
  // refetch: Function to manually refresh the data
}
```

### Adding a Developer

```typescript
const { addDeveloper } = useDevelopers()

await addDeveloper({
  name: 'John Doe',
  role: 'Software Engineer',
  division: 'labs',
  location: 'New York, USA',
  coordinates: { lat: 40.7128, lng: -74.0060 },
  avatar: 'JD',
  bio: 'Full stack developer with a passion for clean code.',
  skills: ['JavaScript', 'React', 'Node.js'],
  projects: ['Project A', 'Project B'],
  email: 'john.doe@aethex.dev'
})
```

### Updating a Developer

```typescript
const { updateDeveloper } = useDevelopers()

await updateDeveloper('developer-id', {
  role: 'Senior Software Engineer',
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript']
})
```

### Deleting a Developer

```typescript
const { deleteDeveloper } = useDevelopers()

await deleteDeveloper('developer-id')
```

## Troubleshooting

### Connection Issues

If you see "Failed to fetch developers" errors:

1. Check that your Supabase project is running
2. Verify the environment variables are correct
3. Check the browser console for detailed error messages
4. Ensure the `developers` table exists in your database

### RLS Policy Issues

If writes are failing:

1. Check that RLS policies are configured correctly
2. For development, you can temporarily disable RLS on the `developers` table
3. Ensure you're authenticated if the policies require it

### Real-time Not Working

If changes aren't appearing in real-time:

1. Go to Database > Replication in Supabase dashboard
2. Enable replication for the `developers` table
3. Ensure the table is added to the `supabase_realtime` publication

## API Reference

See the Supabase client documentation at:
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase Realtime](https://supabase.com/docs/guides/realtime)
