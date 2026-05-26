# Debugging Report (Week 5)

## 1) Jest command not recognized
- **Issue:** `npm test` failed with `'jest' is not recognized`.
- **Cause:** test dependencies had been removed/not present in `devDependencies`.
- **Fix:** reinstalled required testing packages in `client` and `server`.
- **Result:** test runner started successfully.

## 2) Frontend test runner failing for JSX/component tests
- **Issue:** component tests could not run reliably with default setup.
- **Cause:** missing Jest transform/runtime setup for React JSX in this Vite project.
- **Fix:** added `client/jest.config.cjs`, `client/babel.config.cjs`, and `babel-jest` toolchain.
- **Result:** component tests now execute consistently.

## 3) `TextEncoder is not defined` in React Router tests
- **Issue:** tests crashed when importing `react-router-dom`.
- **Cause:** jsdom environment lacked `TextEncoder`/`TextDecoder`.
- **Fix:** added polyfill in `client/src/tests/setupTests.js`.
- **Result:** route-related component tests now run without runtime error.

## 4) Async dashboard state update warning/flaky assertion
- **Issue:** dashboard test had async update timing issues and failed assertion.
- **Cause:** assertions happened before async API state update completed.
- **Fix:** updated tests to wait for API calls and rendered output before assertions.
- **Result:** stable and passing dashboard tests.
