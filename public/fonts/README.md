# Brand fonts (licensed)

The site uses **FreightDisplay** for headings and **Avenir** for body text.
Neither is available on Google Fonts — they are commercial fonts that must be
licensed and self-hosted. Until the files below are added, the site
automatically falls back to the Google-hosted stand-ins (Playfair Display /
Nunito Sans), and Avenir also resolves to the system font on Apple devices.

## What to add

Drop the licensed `.woff2` files into this folder (`public/fonts/`) with these
exact names — the `@font-face` rules in `src/app/globals.css` already point at
them, so no code change is needed once the files are here:

| File | Font | Weight | Style |
| --- | --- | --- | --- |
| `FreightDisplay-Book.woff2` | FreightDisplay | 400 | normal |
| `FreightDisplay-BookItalic.woff2` | FreightDisplay | 400 | italic |
| `FreightDisplay-Semibold.woff2` | FreightDisplay | 500–600 | normal |
| `Avenir-Light.woff2` | Avenir | 300 | normal |
| `Avenir-Roman.woff2` | Avenir | 400 | normal |
| `Avenir-Medium.woff2` | Avenir | 600 | normal |
| `Avenir-Heavy.woff2` | Avenir | 700 | normal |

If your license only ships `.otf`/`.ttf`, convert to `.woff2` first (e.g. with
`fonttools` or an online converter) for best web performance. If you must keep
another format, add it to the `src:` list in the matching `@font-face` block in
`src/app/globals.css`.

## Renaming

If your files have different names, either rename them to match the table above
or update the `url("/fonts/...")` paths in the `@font-face` blocks in
`src/app/globals.css`.
