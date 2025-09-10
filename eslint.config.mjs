/**
 * ESLint Configuration
 *
 * This file configures ESLint for the Bahram Autohaus application.
 * It sets up code quality rules, import sorting, and Prettier integration.
 *
 * Key Features:
 * - React Hooks rules for proper hook usage
 * - Import sorting for consistent code organization
 * - Prettier integration for code formatting
 * - Next.js specific rules and configurations
 * - TypeScript support
 *
 * @fileoverview ESLint configuration for Bahram Autohaus
 * @author Amir Hossein sharififard
 * @version 1.0.0
 */

// ESLint plugin imports
import { FlatCompat } from '@eslint/eslintrc'; // Compatibility layer for legacy configs
import prettierPlugin from 'eslint-plugin-prettier'; // Prettier ESLint plugin
import reactHooksPlugin from 'eslint-plugin-react-hooks'; // React Hooks ESLint plugin
import simpleImportSort from 'eslint-plugin-simple-import-sort'; // Import sorting plugin

// Node.js path utilities
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current file path for compatibility layer
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create compatibility layer for legacy ESLint configurations
const compat = new FlatCompat({ baseDirectory: __dirname });

/**
 * ESLint configuration array
 *
 * This configuration defines the rules and plugins for code quality,
 * formatting, and consistency across the Bahram Autohaus codebase.
 */
const eslintConfig = [
  {
    // ESLint plugins configuration
    plugins: {
      'react-hooks': reactHooksPlugin, // React Hooks rules
      'simple-import-sort': simpleImportSort, // Import sorting rules
      prettier: prettierPlugin, // Prettier formatting rules
    },

    // ESLint rules configuration
    rules: {
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',

      // Import sorting rules
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$'], // React imports first
            ['^@?\\w'], // External packages
            ['^(@|components)(/.*|$)'], // Internal components
            ['^\\u0000'], // Side effect imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent directory imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Current directory imports
            ['^.+\\.?(css)$'], // CSS imports last
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // Material-UI import restrictions
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "ImportDeclaration[source.value='@mui/material'] ImportSpecifier:not([imported.name='ThemeProvider']):not([imported.name='createTheme'])",
          message:
            "Please use default imports like `import Button from '@mui/material/Button';` instead of named imports from '@mui/material', except for allowed components like ThemeProvider.",
        },
      ],

      // Prettier formatting rules
      'prettier/prettier': 'warn',
    },
  },
  // Extend Next.js and TypeScript configurations
  ...compat.extends(
    'next/core-web-vitals', // Next.js core web vitals rules
    'next/typescript', // Next.js TypeScript rules
    'plugin:prettier/recommended' // Prettier recommended rules
  ),

  // Additional rule overrides
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Allow 'any' type usage
      'react-hooks/exhaustive-deps': 'off', // Disable exhaustive deps warning
    },
  },
];

// Export the ESLint configuration
export default eslintConfig;
