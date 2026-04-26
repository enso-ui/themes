# Themes
[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/themes/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.3.33-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/themes)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/themes.svg)](https://www.npmjs.com/package/@enso-ui/themes)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/themes)
[![Issues](https://img.shields.io/github/issues/enso-ui/themes.svg)](https://github.com/enso-ui/themes/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/themes.svg)](https://github.com/enso-ui/themes/pulls)

## Description

Theme registration and Bulma style bundle for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/themes
```

## Features

- registers the theme selector inside the shared settings menu
- ships Bulma component styles and overrides for Enso UI
- adds responsive layout spacing helpers on top of the shared Bulma bundle
- keeps theme wiring isolated from the main shell package

## Usage

```js
import registerThemes from '@enso-ui/themes/src/bulma/register';

registerThemes(app);
```

## Layout Helpers

The package ships responsive spacing helpers for layout work when local component CSS would be unnecessary.

Supported families:

- `m/p-0..6`
- `mx/my/px/py-0..6`
- `mt/mr/mb/ml/pt/pr/pb/pl-0..6`
- `m-auto`, `mx-auto`, `my-auto`, `mt-auto`, `mr-auto`, `mb-auto`, `ml-auto`

Supported responsive suffixes:

- `-mobile`: mobile only
- `-touch`: touch widths up to desktop
- `-tablet`: tablet and above
- `-desktop`: desktop and above
- `-widescreen`: widescreen and above
- `-fullhd`: fullhd and above

Examples:

```html
<section class="px-2-mobile px-4-tablet py-3-desktop">
    ...
</section>

<div class="mx-auto-widescreen mt-2-touch mt-5-desktop">
    ...
</div>
```

These helpers were added because responsive spacing is a recurring need in Bulma-based layouts, and the shared layer benefits from offering a predictable utility contract instead of forcing each application to reinvent small wrapper classes.

## API

## Depends On

- No additional Enso UI dependencies.

## Contributions

are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/themes/blob/master/LICENSE)
