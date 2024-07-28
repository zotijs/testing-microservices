# Config Typescript

Is a library with a common `typescript` configuration that can be used throughout all the projects.
Inspiration: [turborepo-with-vite](https://github.com/vercel/turbo/tree/main/examples/with-vite)

## Usage

Common:

```json
{
  "extends": "@zotijstestingms/config-typescript/tsconfig.base.json",
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

For Libraries:

```json
{
  "extends": "@zotijstestingms/config-typescript/tsconfig.lib.json",
  "include": ["src"],
  "exclude": ["node_modules"]
}
```
