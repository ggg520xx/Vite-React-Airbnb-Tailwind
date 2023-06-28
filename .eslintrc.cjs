module.exports = {
  root: true,

  env: { browser: true, es2021: true, node: true },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: "18.2" } },
  plugins: ["prettier", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "prettier/prettier": ["warn", {}, { usePrettierrc: true }],
  },
};
