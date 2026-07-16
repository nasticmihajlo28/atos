# Website images

Drop the website photos into this folder (`public/images/`). Anything here is
served from the site root — e.g. `public/images/hero.jpg` is reachable at the
URL `/images/hero.jpg`.

## How to use an image in the code

Once a file is here, reference it by its `/images/...` path. For a normal photo,
the optimized `next/image` component is preferred:

```tsx
import Image from "next/image";

<Image src="/images/hero.jpg" alt="Dekoracija venčanja" width={530} height={601} />
```

## Where the site currently uses placeholders

Every photo slot on the site currently renders a labeled placeholder
(`src/components/ImagePlaceholder.tsx`). To swap in a real photo, replace the
`<ImagePlaceholder ... />` with an `<Image src="/images/your-file.jpg" ... />`.
Photo slots that need images:

- **Home** — hero photo, 5 "Izdvojeni radovi" grid photos, 3 service photos
  (Venčanja / Rođendani / Krštenja), the CTA "konsultacija / tim" photo
- **Portfolio** — 6 wedding, 4 birthday, 4 car photos
- **O nama** — the team photo
- **Navbar** — the logo (currently an "AP" monogram, was `logo-pravi.PNG`)

Tell me which files you've added and I'll wire them into the right slots.
