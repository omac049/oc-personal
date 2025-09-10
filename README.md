# Omar Corral Portfolio

## Project Overview

Welcome to the codebase for Omar Corral's personal website. This portfolio showcases Omar's expertise as an SEO specialist and digital marketing strategist. It is designed to present his professional profile, highlight his skills, and share his experience in search-engine optimization (SEO) and digital marketing. Built with modern frontend technologies, the site is optimized for performance, accessibility, and SEO to ensure potential clients and employers can easily learn about Omar and connect with him.

## Purpose

Omar uses this platform to demonstrate how he helps businesses grow by understanding search algorithms, identifying keyword opportunities, and crafting data-driven strategies that improve search rankings. His experience covers keyword research, on-page and technical SEO, content strategy, analytics, and proficiency with industry-leading tools such as Google Search Console, Google Analytics, SEMrush, Moz, and Ahrefs. The site also details his work history, including roles at the University of Arizona Global Campus, Zovio, Manifest LLC, and V Digital Services.

---

## Features

- **About Section**  
  An introduction highlighting Omar's SEO philosophy and the value he brings as a consultant and manager.

- **Skills Matrix**  
  Showcases expertise areas such as keyword research, on-page/off-page/technical SEO, content strategy, mobile/local/eCommerce SEO, analytics, schema markup, bilingual SEO, and AI tools like ChatGPT and Midjourney.

- **Experience Timeline**  
  Summarizes past and current professional roles with measurable achievements, including significant organic traffic growth and performance marketing successes.

- **Contact & Social Links**  
  Provides multiple ways to get in touch, including email and social media profiles, encouraging collaboration.

---

## Libraries & Tools

This project leverages a modern frontend stack with the following key libraries and tools:

- **Next.js & React**  
  Core framework providing routing, components, static site generation, and server-side rendering. Supports static export for fast, SEO-friendly pages.  
  [Next.js Documentation](https://nextjs.org)

- **Tailwind CSS**  
  Utility-first CSS framework for rapid, responsive design with easy customization.  
  [Tailwind CSS](https://tailwindcss.com)

- **Font Awesome**  
  Comprehensive icon library included for UI enhancement.

- **Framer Motion**  
  Production-grade animation library for smooth transitions and interactive effects.  
  [Framer Motion](https://www.framer.com/motion/)

- **gh-pages**  
  Dev dependency used to deploy the built site to GitHub Pages.

- **Optional Utilities**  
  Includes `@headlessui/react` for accessible UI components, icon libraries like `lucide-react` or `heroicons`, and email utilities such as `@emailjs/browser` or Formspree for contact forms.

---

## Project Setup & Structure

### Initial Setup

1. **Create the Next.js project**  
   ```bash
   npx create-next-app@latest oc-portfolio
   ```
   Choose TypeScript if preferred.

2. **Add Tailwind CSS**  
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   Configure `tailwind.config.js` to scan your `src` directory and add Tailwind directives to `styles/globals.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. **Install additional libraries**  
   ```bash
   npm install framer-motion @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
   ```
   Add other icon sets or utilities as needed.

4. **Install gh-pages for deployment**  
   ```bash
   npm install --save-dev gh-pages
   ```

### Directory Structure

- `src/pages` — Route components (pages).
- `src/components` — Reusable UI components.
- `src/data` — JSON or JavaScript modules containing site content (hero text, about info, skills, experience, socials).

Populate the data files according to the content guidelines in the Customising Your Content section.

---

## Development Workflow

- **Install dependencies**  
  ```bash
  npm install
  ```

- **Start development server**  
  ```bash
  npm run dev
  ```  
  Visit [http://localhost:3000](http://localhost:3000) to view the site. Hot reload is enabled for live updates.

- **Build for production**  
  ```bash
  npm run build
  ```  
  Generates an optimized static export in the `out` directory.

---

## Customising Your Content

Content is managed through data files in the `src/data` directory:

- `hero.js` — Headline and subheading for the landing page.
- `about.js` — Text describing Omar's background and approach.
- `skills.js` — Array of skills and tools.
- `experience.js` — Work history with roles and achievements.
- `socials.js` — Links to social profiles and contact email.

Edit these files to personalize your portfolio. The components import these modules to render dynamic sections.

---

## Deployment

### Deploying to GitHub Pages

1. **Configure Next.js for static export**  
   In `next.config.js`, add:
   ```js
   const isProd = process.env.NODE_ENV === 'production';

   const nextConfig = {
     output: 'export',
     assetPrefix: isProd ? '/<repository-name>/' : '',
     basePath: isProd ? '/<repository-name>' : '',
   };

   export default nextConfig;
   ```
   Replace `<repository-name>` with your GitHub repository name.

2. **Update `package.json`**  
   Add the homepage and deployment scripts:
   ```json
   "homepage": "https://<github-username>.github.io/<repository-name>",
   "scripts": {
     "dev": "next dev",
     "build": "next build",
     "start": "next start",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d out"
   }
   ```
   Replace `<github-username>` and `<repository-name>` accordingly.

3. **Deploy the site**  
   ```bash
   npm run predeploy
   npm run deploy
   ```

4. **Enable GitHub Pages**  
   On GitHub, navigate to **Settings > Pages**, select the `gh-pages` branch, and set the root (`/`) as the source.

5. **Add `.nojekyll` file**  
   Ensure a `.nojekyll` file exists at the root of the `gh-pages` branch to prevent Jekyll processing.

Your site will be live at `https://<github-username>.github.io/<repository-name>`.

### Custom Domain Setup

1. **Add your domain in GitHub**  
   In your repository's **Settings > Pages**, enter your custom domain (e.g., `omar-corral.com`) and save.

2. **Configure DNS records**  
   - For the apex domain (`omar-corral.com`), add A records pointing to GitHub Pages IPs:  
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For the `www` subdomain, add a CNAME record pointing to `<github-username>.github.io`.

3. **Wait for DNS propagation** (up to 24 hours).

4. **Enable HTTPS enforcement**  
   After DNS updates, enable "Enforce HTTPS" in GitHub Pages settings.

---

## Design & Brand Guidelines

For comprehensive design guidelines, color palettes, typography, components, and brand standards, please refer to the dedicated **[Brand Guide](./brand_guide.md)**.

The brand guide includes:
- Complete color palette and usage guidelines
- Typography scale and font specifications  
- Component styling standards
- Animation and interaction principles
- Layout and spacing guidelines
- SEO and performance standards
- Accessibility requirements
- Implementation checklists

---

## Contributing

This portfolio represents Omar Corral's personal brand. Contributions are welcome to improve UI, performance, accessibility, or add new features. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear messages.
4. Open a pull request describing your changes.

Please ensure code quality and consistency with the existing style.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute the code for your personal portfolio or to help others establish their online presence.