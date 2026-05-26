# Week 5 - Testing, Debugging, and Optimization

## Testing Strategy
- **Backend integration tests** with `Jest + Supertest` to verify auth and resume route protection.
- **Frontend component tests** with `Jest + React Testing Library` for login and dashboard flows.
- Focused on practical high-value checks:
  - invalid input handling
  - authentication guard behavior
  - API-call and navigation behavior

## Added Test Files
- `server/tests/auth.test.js`
- `server/tests/resume.test.js`
- `client/src/tests/Login.test.js`
- `client/src/tests/Dashboard.test.js`
- `client/src/tests/setupTests.js`

## Added Test Configuration
- `server/package.json` script: `"test": "jest --runInBand --passWithNoTests"`
- `client/package.json` script: `"test": "jest --passWithNoTests"`
- `client/jest.config.cjs`
- `client/babel.config.cjs`

## How to Run Tests
### Backend
```bash
cd server
npm install
npm test
```

### Frontend
```bash
cd client
npm install
npm test
```

## Test Execution Result (Current)
- Backend: **2 test suites passed, 4 tests passed**
- Frontend: **2 test suites passed, 6 tests passed**

## Debugging Summary
See `debugging-report.md` for issues identified and fixes applied during test setup and execution.

## Optimization Summary
See `optimization-report.md` for optimizations and quality improvements made in this phase.
