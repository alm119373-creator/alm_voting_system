# ALM Voting System Backend

This folder contains a Python FastAPI backend for the ALM Voting System. It is designed to run separately from the frontend and connect to a PostgreSQL database (Railway or local).

## Architecture
- Frontend: separate Next.js app hosted on Vercel
- Backend: FastAPI app hosted on Railway or any Python-capable platform
- Database: PostgreSQL (Railway or local)
- Images: uploaded through the API and stored directly in the database as base64 data URIs

## Setup
1. Create a PostgreSQL database (Railway or local).
2. Set `DATABASE_URL` in a `.env` file or Railway environment variables.
3. Install dependencies:
   ```bash
   cd backend
   python -m venv .venv
   .venv\Scripts\activate
   pip install -r requirements.txt
   ```
4. Start the server:
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
   ```

## API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/teams`
- `POST /api/teams`
- `DELETE /api/teams/{team_id}`
- `GET /api/candidates`
- `POST /api/candidates`
- `GET /api/election/settings`
- `PUT /api/election/settings`
- `POST /api/applications`
- `GET /api/results/leaderboard`

## Notes
- The backend is built to support a full-admin dashboard and real-time results polling.
- Image files are not sent to Cloudinary and are stored in the database as base64 URIs.
- You should update the frontend to use this backend API for login, candidates, teams, and election settings.
