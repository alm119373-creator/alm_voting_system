# ALM Voting System

A complete voting system built with Next.js App Router, TypeScript, Tailwind CSS, Drizzle ORM, PostgreSQL (Railway), NextAuth v5, and a new Python FastAPI backend.

The repository now includes a `backend/` folder for the Python API, with direct image upload support instead of Cloudinary.

## Features

- User authentication with NextAuth
- Admin dashboard for managing elections
- Candidate management with image uploads
- Voting system with real-time results
- PDF report generation
- Audit logs

## Local Development Setup

### Prerequisites

- Node.js 18+
- Python 3.11+
- PostgreSQL (local or Railway)

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   python -m venv .venv
   .venv\Scripts\activate
   pip install -r requirements.txt
   ```
3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up local PostgreSQL database or Railway connection string in `backend/.env` via `DATABASE_URL`.

5. Set `SECRET_KEY` in `backend/.env` for JWT authentication.

6. Run the backend locally:
   ```bash
   cd backend
   .venv\Scripts\activate
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

7. Run the frontend locally:
   ```bash
   cd ../frontend
   npm run dev
   ```

8. The frontend communicates with the backend API using `NEXT_PUBLIC_API_URL`.


### Running the Application

1. Push the database schema:
   ```bash
   npm run db:push
   ```

2. Seed the database with initial data:
   ```bash
   npm run db:seed
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the local frontend URL shown by Next.js in your browser.

### Database Management

- View database in Drizzle Studio: `npm run db:studio`
- Generate migrations: `npm run db:generate`
- Push schema changes: `npm run db:push`

## Project Structure

- `frontend/` - Next.js app directory (pages, API routes, components)
- `lib/` - Utility libraries (auth, DB, validations)
- `components/` - Reusable UI components

## Deployment

The application can be deployed to Vercel or any platform supporting Next.js. Ensure environment variables are set for production.
# Force redeploy
# Force redeploy 2
