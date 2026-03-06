import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    extends: ["js/recommended", "prettier"],
    env: {
      node: true,
      es2021: true,
      browser: false,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
]);
