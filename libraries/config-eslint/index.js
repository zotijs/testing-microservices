// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended
  // good to have:
  // ordered imports rules
  // consistent type imports
  // consistent type definitions
);
