# React Testing Setup: Vitest + TypeScript + React Testing Library

## 1. Create a New React + TypeScript Project with Vite

## 2. Install all dependencies for testing

```bash
pnpm i -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event

```

## 3. Update Vite Configuration

- Update `vite.config.ts`:

```typescript
/// <reference types="vitest"/>
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTest.ts", // Optional: setup file
    include: [
      // Comprehensive test file pattern
      "**/*.{test,spec}.{ts,tsx}", // Matches test files anywhere
      "**/__tests__/**/*.{ts,tsx}", // Still includes __tests__ folder
    ],
  },
});
```

## 4. Create Test Setup File

- Create `/src/setupTest.ts`:

```typescript
import "@testing-library/jest-dom";
```

## 5. Update `tsconfig.app.json` file

- Update the code with this line of code

```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
    // ...rest of your config
  }
}
```

## 6. Update Package.json Scripts

```json
"scripts": {
    "test": "vitest --reporter verbose",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
```

### Example Test File Structure

```code
src/
├── components/
│   ├── Button.tsx
│   └── Button.test.tsx
└── setupTest.ts

```
