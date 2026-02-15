# Globe Developer Directory Setup

## 📋 Database Setup Instructions

The 3D Globe Developer Directory requires a Supabase database table to store developer information.

### Step 1: Access Supabase SQL Editor

1. Go to your Supabase project dashboard: https://kmdeisowhtsalsekkzqd.supabase.co
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**

### Step 2: Run the Schema

Copy the contents of `supabase-developers-schema.sql` and paste it into the SQL Editor, then click **Run**.

This will create:
- ✅ `developers` table with all required columns
- ✅ Indexes for fast queries
- ✅ Row Level Security policies (public read, authenticated write)
- ✅ Auto-update timestamp trigger
- ✅ 5 sample developers to get started
- ✅ Real-time subscription support

### Step 3: Enable Realtime (Optional)

To see live updates when developers are added/edited:

1. Go to **Database** > **Replication** in Supabase dashboard
2. Find the `developers` table
3. Toggle **Realtime** to ON

### Database Schema

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Auto-generated primary key |
| `name` | TEXT | Developer's full name |
| `role` | TEXT | Job title/role |
| `division` | TEXT | Division (staff, labs, gameforge, corp, foundation, devlink, nexus) |
| `location` | TEXT | City, Country format |
| `coordinates` | JSONB | `{"lat": number, "lng": number}` |
| `avatar` | TEXT | Avatar URL or initials (e.g., "AC") |
| `bio` | TEXT | Developer biography |
| `skills` | TEXT[] | Array of skill tags |
| `projects` | TEXT[] | Array of project names |
| `email` | TEXT | Contact email (optional) |
| `created_at` | TIMESTAMPTZ | Auto-set on creation |
| `updated_at` | TIMESTAMPTZ | Auto-updated on changes |

## 🎨 Division Colors

Each division has a unique color on the globe:

- **Staff** - Purple (#9333EA)
- **Labs** - Green (#10B981)
- **GameForge** - Blue (#3B82F6)
- **Corp** - Red (#EF4444)
- **Foundation** - Orange (#F59E0B)
- **DevLink** - Cyan (#06B6D4)
- **Nexus** - Magenta (#EC4899)

## 🌍 Adding Developers

You can add developers through the Supabase dashboard or by signing in on the Globe page (authenticated users can add/edit/delete).

### Example Developer JSON:

```json
{
  "name": "John Doe",
  "role": "Software Engineer",
  "division": "labs",
  "location": "New York, USA",
  "coordinates": {
    "lat": 40.7128,
    "lng": -74.0060
  },
  "avatar": "JD",
  "bio": "Building amazing things with code.",
  "skills": ["React", "TypeScript", "Node.js"],
  "projects": ["Project Alpha", "Project Beta"],
  "email": "john.doe@aethex.dev"
}
```

## 🔗 Getting Coordinates

To find lat/lng for a location:
- Use https://www.latlong.net/
- Or Google Maps (right-click > "What's here?")

## ✅ Verification

After running the schema:
1. Go to **Table Editor** in Supabase
2. Click on `developers` table
3. You should see 5 sample developers (Alex Chen, Maria Rodriguez, etc.)
4. Visit `/globe` on your site to see them on the 3D Earth!

## 🚀 Next Steps

- Add your own team members
- Customize division colors in `/src/lib/types.ts`
- Add admin controls to add/edit developers directly from the site (when authenticated)
