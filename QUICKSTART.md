# Quick Start - 5 Minute Deployment

## ✅ Your Project is Ready

All files are committed and ready to deploy.

**Current Status:**
- ✓ Project structure: Complete
- ✓ SVG API: Ready (api/hero.ts)
- ✓ Git repository: Initialized & committed
- ✓ Configuration: Vercel-ready

---

## 🔗 STEP 1: Create GitHub Repository (2 minutes)

Go to: **https://github.com/new**

Fill in:
- **Repository name**: `github-hero-banner`
- **Description**: Professional GitHub hero banner with SVG and Vercel API
- **Visibility**: Public
- **Click**: Create repository

After creating, **copy the HTTPS URL** (you'll need it next)

---

## 💾 STEP 2: Push to GitHub (30 seconds)

Run in terminal (replace YOUR-USERNAME):

```bash
cd d:\github-hero-banner
git remote add origin https://github.com/YOUR-USERNAME/github-hero-banner.git
git branch -M main
git push -u origin main
```

Wait for it to complete. You'll see: `Branch 'main' set up to track remote branch 'main' from 'origin'.`

---

## 🚀 STEP 3: Deploy to Vercel (3 minutes)

Go to: **https://vercel.com**

1. Sign in (use GitHub if you have account)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. **Search** for: `github-hero-banner`
5. **Click** to select it
6. **Framework**: Select **"Other"** (⚠️ Important!)
7. Click **"Deploy"**
8. **Wait** 1-2 minutes for deployment

---

## ✨ STEP 4: Test Your Banner (1 minute)

When deployment finishes:

1. Go to your **Vercel Dashboard**
2. Click on your `github-hero-banner` project
3. Copy the **Production URL** at the top
4. Open in browser: `https://YOUR-PROJECT-NAME.vercel.app/api/hero`

You should see:
- Dark background
- Cyan text: "🎓 R&D | Automation | Control Systems | AI-Augmented Full-Stack Developer"
- Animated robot image on right

---

## 📌 STEP 5: Add to Your GitHub Profile (1 minute)

Edit your **GitHub profile README** or any repo README.

Add this code:

```markdown
<p align="center">
  <img src="https://YOUR-PROJECT-NAME.vercel.app/api/hero" />
</p>
```

Replace `YOUR-PROJECT-NAME` with your actual Vercel project name.

---

## 🎨 Customize Your Banner (Optional)

Want to change text, colors, or the robot?

1. Open: `d:\github-hero-banner\api\hero.ts`
2. Make changes:
   - **Text**: Edit the `<text>` element
   - **Color**: Change `fill="#0EEDC5"` to any hex color
   - **Robot image**: Replace the `href` URL
3. Save and commit:
   ```bash
   git add .
   git commit -m "Update hero banner"
   git push
   ```
4. Vercel auto-redeploys instantly! ⚡

---

## 🎯 Done!

Your professional GitHub hero banner is now live and production-ready!

**Features:**
✓ Pixel-perfect centering
✓ No tables or hacks
✓ One simple `<img>` tag
✓ GitHub-proof alignment
✓ Lightning-fast CDN
✓ Fully customizable

---

**Need help?** All files in `d:\github-hero-banner\` are documented:
- `DEPLOYMENT.md` - Full step-by-step guide
- `README.md` - Project documentation
- `api/hero.ts` - Your SVG code

Good luck! 🚀
