import globals from "globals";
import pluginReact from "eslint-plugin-react";

/** @type {import("eslint").Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: globals.browser
  },
  plugins: {
    react: pluginReact
  },
  rules: {
    "no-unused-vars": "warn",
    "react/prop-types": "off"
  }
};
