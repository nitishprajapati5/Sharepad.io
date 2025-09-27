module.exports = {
  // your existing config...
  overrides: [
    {
      files: ["src/generated/**/*.js"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
