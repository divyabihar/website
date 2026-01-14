# Deployment Guide for Divya Bihar

This guide covers the steps to deploy the Spiritual Tourism Portal to a production environment.

## 1. Database Setup (PostgreSQL)

You have two options for the database:

### Option A: Using Docker (Recommended for Dev & VP)
1.  Ensure Docker and Docker Compose are installed.
2.  Run the following command in the project root:
    ```bash
    docker-compose up -d
    ```
    *Note: If you are on a newer version of Docker, use `docker compose up -d`.*
3.  Verify the container is running:
    ```bash
    docker ps
    ```
    You should see `divyabihar_db` running on port `5432`.

### Option B: Managed Database (Railway / Supabase / Neon)
1.  Create a new PostgreSQL database on a provider like Railway, Supabase, or Render.
2.  Get the **Connection String** or credentials (Host, User, Password, DB Name).

---

## 2. Backend Deployment (NestJS)

Supported platforms: **Railway, Render, DigitalOcean App Platform, or VPS.**

### Environment Variables
Configure these variables in your deployment platform:

```env
PORT=3001
NODE_ENV=production
# Database Config
DB_HOST=your-db-host.com
DB_PORT=5432
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=divyabihar
# Security
JWT_SECRET=your-secure-secret-key-change-this
ADMIN_PASSWORD=secure-admin-password
# Frontend URL (for CORS)
FRONTEND_URL=https://divyabihar.com
```

### Build & Start
The backend uses standard NestJS scripts:
- **Build Command**: `npm run build`
- **Start Command**: `npm run start:prod`

---

## 3. Frontend Deployment (Next.js)

Recommended platform: **Vercel** (Zero config).

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  Select the `frontend` directory as the Root Directory.
4.  **Environment Variables**:
    *   `NEXT_PUBLIC_API_URL`: The URL of your deployed backend (e.g., `https://api.divyabihar.com`).

---

## 4. Production Checklist

1.  **Disable Sync**: In `backend/src/app.module.ts`, set `synchronize: false` for production to avoid data loss. Use migrations instead.
2.  **Rate Limiting**: Ensure `ThrottlerModule` is active in NestJS.
3.  **CORS**: Update `app.enableCors()` in `main.ts` to only allow your production frontend domain.
4.  **Secure Admin**: functionality relies on `ADMIN_PASSWORD` (Simple Auth) or JWT. Ensure a strong password is set.

## 5. Troubleshooting Database Connection

If the backend fails to connect:
1.  **Check Credentials**: double-check host, port, user, and password.
2.  **Firewall**: Ensure the database accepts connections from the backend IP (0.0.0.0/0 for public managed DBs usually requires IP whitelisting or using private networking).
3.  **Logs**: Check backend logs using `docker logs <container_id>` or the platform's log viewer.
