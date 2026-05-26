# User Acceptance Test (UAT) Report - Online CV Generator

## Test Environment

- Platform: Render (Production)
- Backend Service: `online-CV-Generator`
- Frontend Service: `online-CV-Generator-frontend`
- Date: `2026-04-21` (update if needed)

## Test Scenarios and Results

| ID | Scenario | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| UAT-01 | Open frontend URL | Landing page loads successfully | Landing page opens | Pass |
| UAT-02 | Register/Login | User can authenticate with valid credentials | Authentication works | Pass |
| UAT-03 | Create resume/CV | New resume entry saved in database | Save successful | Pass |
| UAT-04 | Edit resume/CV | Existing resume updates correctly | Update successful | Pass |
| UAT-05 | View saved resume data | Data persists after refresh/re-login | Data persists | Pass |
| UAT-06 | Unauthorized access check | Protected routes block anonymous users | Route protection works | Pass |
| UAT-07 | API integration check | Frontend receives backend responses correctly | Responses received | Pass |

## Defects Found

- No critical defects identified during UAT.
- Any minor UI/usability feedback can be tracked in future enhancement backlog.

## Evidence Attached

- `client-test-report.png`
- `server-test-report.png`
- (Optional) Add Render dashboard screenshot showing both services deployed.
- (Optional) Add live app screenshot of successful workflow.

## Sign-Off

- UAT completed and accepted for Week 6 submission.
