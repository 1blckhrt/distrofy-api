// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["**/dist", "**/node_modules"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn", // Change to "warn" or "off" if you want to disable it completely
        {
          "vars": "all", // Apply to all variables
          "varsIgnorePattern": "^_", // Ignore variables that start with _
          "args": "none", // Ignore unused function arguments
          "ignoreRestSiblings": true // Ignore rest siblings (e.g., ...rest)
        }
      ],
    }
  },
);
