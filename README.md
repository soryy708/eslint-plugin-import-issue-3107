# eslint-plugin-import issue #3107 reproduction

1. `npm install`
2. `npm run prepare`
3. `npm run lint`

## Expected:

We should have lint errors in `public/test.js`, because it tries to import `bogus1` from `bogus-min.js` which isn't there, and `bogus2` from `pixi.min.mjs` which isn't there.

## Actual:

We don't have any lint errors.

---

Minified Pixi provided by https://pixijs.download/v8.5.2/pixi.min.mjs under MIT License (see attached `pixi.min.mjs.license` file)
