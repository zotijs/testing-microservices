# Config Eslint

Is a library with a common `eslint` configuration that can be used throughout all the projects

## Usage

Create an `eslint.config.js` file to your project with the following content

```js
// @ts-check

import commonEslintConfig from "@zotijstestingms/config-eslint";

export default [
  ...commonEslintConfig,
  // project specific configuration
  {
    ignores: ["dist/**"],
  },
];
```

## Peer Dependencies List

- `@eslint/js`
- `@types/eslint__js`
- `eslint`
- `typescript`
- `typescript-eslint`
