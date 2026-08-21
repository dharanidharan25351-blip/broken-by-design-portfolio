# Broken by Design — Portfolio

An interactive portfolio website centered around the **Broken by Design** glass-shard hero component.

**Repo**: https://github.com/dharanidharan25351-blip/broken-by-design-portfolio

## Features

- **BrokenByDesign** interactive hero with:
  - Real atlas-sprite glass shards
  - Medial-axis crack network
  - 3D spring physics + parallax
  - Web Audio crack sound on hover
  - Responsive desktop / mobile piece sets
  - Fully self-contained (CSS inlined)

- Dark UI driven by **color theory**:
  - Near-black ground (`#030407`)
  - Cool analogous blues
  - Controlled specular highlights
  - High contrast for accessibility while preserving crystalline atmosphere

- Stack:
  - Next.js 15 (App Router)
  - TypeScript
  - Tailwind CSS
  - shadcn-style project structure (`/src/components/ui`, `/src/lib/utils`)
  - lucide-react icons

## Getting Started

```bash
git clone https://github.com/dharanidharan25351-blip/broken-by-design-portfolio.git
cd broken-by-design-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Important: Add the Hero Component

The full `BrokenByDesign` component is large (~34 KB). Create the file and paste the complete component code provided in the original request:

```bash
mkdir -p src/components/ui
# then paste the full broken-by-design.tsx content into:
# src/components/ui/broken-by-design.tsx
```

The component is self-contained (no extra CSS file needed) and loads its assets from the public CDN:

```
https://cdn.jsdelivr.net/gh/gughigug/broken-by-design-assets@main
```

## Project Structure (shadcn-compatible)

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    ui/
      broken-by-design.tsx   ← place the component here
  lib/
    utils.ts                 ← cn() helper
```

**Why `/components/ui`?**  
This is the standard location expected by the shadcn/ui CLI and most component registries. Keeping UI primitives here ensures consistent imports (`@/components/ui/...`) and makes future `npx shadcn@latest add ...` commands work without path conflicts.

## Color Tokens

Defined in `globals.css` and mirrored in Tailwind:

| Token          | Role                          |
|----------------|-------------------------------|
| `--background` | Near-black canvas             |
| `--primary`    | Bright cool blue accent       |
| `--muted`      | Soft glass surfaces           |
| `--border`     | Subtle fracture lines         |

## License

The Broken by Design component credit remains with the original author (see the small credit link in the hero). This portfolio shell is free to use and adapt.
