# GitHub Hero Banner

A professional, pixel-perfect SVG hero banner for GitHub profiles using Vercel serverless API.

## Features

✔ Pixel-perfect alignment
✔ No tables or CSS hacks
✔ Vertically centered text
✔ Responsive robot image
✔ One simple `<img>` tag
✔ Fully customizable

## Project Structure

```
github-hero-banner/
├── api/
│   └── hero.ts          # Main SVG hero API
├── package.json
├── tsconfig.json
└── .gitignore
```

## Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/<your-username>/github-hero-banner.git
cd github-hero-banner
npm install
```

### 2. Deploy to Vercel

- Go to https://vercel.com
- Click "New Project"
- Import this repository
- Select "Other" as framework
- Click "Deploy"

### 3. Test Your Banner

Once deployed, visit:
```
https://<your-project-name>.vercel.app/api/hero
```

You should see:
- Dark banner background
- Cyan-colored text perfectly centered
- Robot image on the right

### 4. Add to Your GitHub README

In your profile README or any repository README, add:

```markdown
<p align="center">
  <img src="https://<your-project-name>.vercel.app/api/hero" />
</p>
```

## Customization

Edit [api/hero.ts](api/hero.ts) to customize:

- **Text content**: Modify the `<text>` element content
- **Colors**: Change `fill="#0EEDC5"` for text color
- **Robot image**: Replace the `href` URL with your own image
- **Dimensions**: Adjust `width` and `height` in the SVG root
- **Font**: Change `font-family` value

After editing, redeploy to Vercel to see changes.

## Why This Works

- **SVG Controls Centering**: `dominant-baseline="middle"` fixes text baseline issues
- **Absolute Positioning**: Robot placement is predictable and reliable
- **Single Image**: GitHub treats this as one image, eliminating layout interference
- **No Hacks**: Pure SVG, no tables or CSS workarounds

## License

MIT
