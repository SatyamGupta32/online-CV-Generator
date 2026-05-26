# Week 6 Deployment Guide - Online CV Generator

## 1) Project Overview

This project is a full stack web application for creating resumes/CVs.

- Frontend: React (deployed as a static site on Render)
- Backend: Node.js + Express (deployed as a web service on Render)
- Database: MongoDB (cloud connection string via environment variable)
- Authentication: JWT-based login/session flow

Current Render project already contains:

- Backend service: `online-CV-Generator` (Node runtime, Oregon)
- Frontend service: `online-CV-Generator-frontend` (Static runtime, Global)

## 2) Prerequisites

Before deployment, confirm:

1. Code is pushed to GitHub.
2. App runs locally (`client` and `server`).
3. Production environment variables are prepared.
4. Backend CORS allows frontend domain.

## 3) Backend Deployment (Render Web Service)

1. Open Render dashboard and select the project.
2. Create or select the Node web service (`online-CV-Generator`).
3. Connect the service to the backend repository/branch.
4. Set build command and start command from `server/package.json`.
5. Add environment variables in Render:
   - `MONGODB_URI=<your_mongodb_connection_string>`
   - `JWT_SECRET=<your_secure_secret>`
   - `NODE_ENV=production`
   - Any other required backend variables
6. Deploy the backend service.
7. Verify backend health:
   - Check Render logs for successful startup.
   - Open backend base URL/health route in browser or Postman.

## 4) Frontend Deployment (Render Static Site)

1. Create or select static service (`online-CV-Generator-frontend`).
2. Connect frontend repository/branch.
3. Set build command and publish directory (example: `npm run build`, `dist`).
4. Add frontend environment variable for backend API URL:
   - Example: `VITE_API_URL=https://<backend-service-url>`
5. Deploy static site.
6. Open frontend URL and test main flows.

## 5) Post-Deployment Validation Checklist

Run these checks on the live application:

- Home page loads without console/API errors.
- User can register and log in.
- Resume/CV create flow works.
- Edit/update flow works.
- Data persists after refresh.
- Auth-protected routes block unauthorized access.

## 6) Security and Production Readiness Checks

- No secrets committed in source code.
- `.env` files are excluded from git.
- JWT secret is strong and private.
- CORS restricted to trusted frontend origin.
- Validation/sanitization is enabled on backend inputs.
- Dependencies updated regularly (especially security patches).

## 7) Common Deployment Issues and Fixes

### Issue A: Frontend cannot call API (network/CORS errors)
- Cause: Wrong API URL or CORS misconfiguration.
- Fix: Update `VITE_API_URL` to correct backend URL and allow frontend origin in backend CORS config.

### Issue B: MongoDB connection fails
- Cause: Invalid `MONGODB_URI` or network access not allowed.
- Fix: Verify URI in Render env vars and ensure database access/IP settings allow Render.

### Issue C: 401 Unauthorized after login
- Cause: JWT secret mismatch or token handling issues.
- Fix: Confirm same `JWT_SECRET` usage in auth middleware and token creation logic.

### Issue D: Build fails on Render
- Cause: Missing dependency or incorrect build command.
- Fix: Verify `package.json` scripts, lockfile consistency, and Node version compatibility.

## 8) Live Links (Fill Before Submission)

- Frontend URL: `https://online-cv-generator-frontend.onrender.com`
- Backend URL: `https://online-cv-generator.onrender.com`
- Render Project: [https://dashboard.render.com/project/prj-d0vjahq4d50c73el3m90](https://dashboard.render.com/project/prj-d0vjahq4d50c73el3m90)

## 9) Deployment Evidence

Evidence included in `Week6-Submission/evidence`:

- `client-test-report.png`
- `server-test-report.png`
- `uat-report.pdf`
- `production-report.pdf`
