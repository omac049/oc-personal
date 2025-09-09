# Deployment Guide

## 🎉 Your portfolio is ready!

Your Omar Corral portfolio website has been successfully created with all the components and features outlined in the README.

## 📁 Project Structure

```
oc-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # SEO metadata and Font Awesome config
│   │   └── page.tsx         # Main page with all sections
│   ├── components/
│   │   ├── Hero.tsx         # Hero section with animations
│   │   ├── About.tsx        # About section with stats
│   │   ├── Skills.tsx       # Skills with progress bars
│   │   ├── Experience.tsx   # Timeline of work experience
│   │   └── Contact.tsx      # Contact form and social links
│   └── data/
│       ├── hero.js          # Hero content
│       ├── about.js         # About content and stats
│       ├── skills.js        # Skills and proficiency levels
│       ├── experience.js    # Work experience timeline
│       └── socials.js       # Contact info and social links
├── next.config.ts           # GitHub Pages configuration
├── package.json             # Dependencies and scripts
└── .nojekyll               # For GitHub Pages compatibility
```

## 🚀 Pushing to GitHub

1. **If you haven't set up SSH keys, use HTTPS instead:**
   ```bash
   git remote set-url origin https://github.com/omac049/oc-personal.git
   git push -u origin main
   ```

2. **Or set up your SSH keys and push:**
   ```bash
   git push -u origin main
   ```

## 🌐 Deploying to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Source: Deploy from a branch
   - Branch: Select "gh-pages" (will be created after first deployment)
   - Folder: / (root)

2. **Deploy using the configured scripts:**
   ```bash
   npm run deploy
   ```

3. **Your site will be available at:**
   `https://omac049.github.io/oc-personal`

## 🔧 Development Commands

- **Start development server:** `npm run dev`
- **Build for production:** `npm run build`
- **Deploy to GitHub Pages:** `npm run deploy`
- **Lint code:** `npm run lint`

## ✨ Features Included

- ✅ Modern responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ Font Awesome icons
- ✅ SEO optimized with proper metadata
- ✅ Static export ready for GitHub Pages
- ✅ Professional sections: Hero, About, Skills, Experience, Contact
- ✅ TypeScript for better development experience

## 🎨 Customization

You can easily customize the content by editing the files in `src/data/`:

- `hero.js` - Update your headline and tagline
- `about.js` - Modify your story and achievements
- `skills.js` - Add/remove skills and adjust proficiency levels
- `experience.js` - Update your work history
- `socials.js` - Change contact information and social links

## 🖼️ Adding Images

Place images in the `public/` directory and reference them in your data files:

```javascript
// Example in hero.js
backgroundImage: "/images/hero-background.jpg"

// Example in about.js  
image: "/images/omar-profile.jpg"
```

## 🌍 Custom Domain (omar-corral.com)

To use your custom domain:

1. Add `CNAME` file in the `public/` directory with content: `omar-corral.com`
2. Configure DNS records as outlined in the main README
3. In GitHub Pages settings, add your custom domain

## 🚀 Next Steps

1. Push your code to GitHub
2. Deploy to GitHub Pages
3. Add your professional photos
4. Customize the content to match your preferences
5. Set up your custom domain

Your portfolio is now ready to showcase your SEO and digital marketing expertise! 🎉
