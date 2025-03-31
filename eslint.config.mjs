import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import airbnbBase from "eslint-config-airbnb-base";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        mocha: true, // Enable Mocha test globals like 'describe', 'it'
      },
    },
    plugins: {
      import: importPlugin,
    },
    extends: [
      js.configs.recommended, // ESLint recommended rules
      airbnbBase, // Airbnb style guide
    ],
    rules: {
      "no-console": "off", // Allow console.log
      "comma-dangle": ["error", "never"], // No trailing commas
    },
  },
]);
