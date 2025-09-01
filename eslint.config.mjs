import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
      "simple-import-sort": simpleImportSort,
      prettier: prettierPlugin,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react$"],
            ["^@?\\w"],
            ["^(@|components)(/.*|$)"],
            ["^\\u0000"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.?(css)$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "ImportDeclaration[source.value='@mui/material'] ImportSpecifier:not([imported.name='ThemeProvider']):not([imported.name='createTheme'])",
          message:
            "Please use default imports like `import Button from '@mui/material/Button';` instead of named imports from '@mui/material', except for allowed components like ThemeProvider.",
        },
      ],
      "prettier/prettier": "warn",
    },
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
  ),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
