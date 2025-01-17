import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';  // Import the parser

/** @type {import("eslint").Linter.Config} */
export default {
  files: [
    "**/*.{js,mjs,cjs,jsx}",
  ],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: globals.browser,
    parser: babelParser,  // Use the imported parser
    parserOptions: {
      babelOptions: {
        presets: ['@babel/preset-react']
      },
      requireConfigFile: false,
    },
  },
  plugins: {
    react: pluginReact,
  },
  rules: {
    "no-unused-vars": "warn",
    "react/prop-types": "off",
  },
  ignores: ["dist/**"],
};
