const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "src/generated/**",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // 🚀 disables "Unexpected any"
    },
  },
];
