This is a monorepo for TopFlightApps.

## Packages

- `@topflightapps/scheduling` - A scheduling package for TopFlightApps.
- `@topflightapps/utils` - A utility package for TopFlightApps.

## Apps

- `scheduling-demo-main` - A demo app for the scheduling package.

## Setup

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Tailwind

When using Tailwind in a package, you need to add the package's source files to the content array in the tailwind.config.ts file.

```ts
content: [
  "../../packages/scheduling/src/**/*.{js,ts,jsx,tsx,mdx}",
]
```

If you are using a package outside of this monorepo, you will need to use the package name instead of a relative path.

```ts
content: [
  "@topflightapps/scheduling/src/**/*.{js,ts,jsx,tsx,mdx}",
]
```
