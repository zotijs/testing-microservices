// @ts-check

import commonEslintConfig from "@zotijstestingms/config-eslint";

export default [
  ...commonEslintConfig,
  {
    ignores: ["dist/**"],
  },
];
