# Contributing

If you plan to contribute to flatpak-github-actions, here's a couple of things that could help you get started.

## Prerequisites

- NodeJS 16.x or newer
- Yarn

```shell
yarn global add @vercel/ncc
yarn --cwd flatpak-builder --frozen-lockfile && yarn --cwd flat-manager --frozen-lockfile
```

## Regenerating dist

Once you have modified the `index.js` of either `flatpak-builder` or
`flat-manager` action. Make sure to compile the file to the `dist`
directory. You can do so with

```shell
ncc build ./flatpak-builder/index.js -o ./flatpak-builder/dist/
ncc build ./flat-manager/index.js -o ./flat-manager/dist/
```

## Linting

```
yarn global add eslint

yarn --cwd flatpak-builder run eslint . --fix && yarn --cwd flat-manager run eslint . --fix
```
