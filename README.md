# Omar Corral Portfolio

Welcome to the codebase for Omar Corral’s personal website.  
The goal of this site is to present Omar’s professional profile, share his experience and showcase his skills in search‑engine optimisation (SEO) and digital marketing. It’s built with modern front‑end technologies and optimised for performance, accessibility and SEO so that potential clients and employers can learn about Omar and connect with him.

## Purpose

Omar is a passionate SEO specialist and digital marketing strategist. He uses this platform to explain how he helps businesses grow by understanding search algorithms, identifying keyword opportunities and crafting data‑driven strategies to improve rankings [omar-corral.com](https://omar-corral.com).  
His experience spans keyword research, on‑page and technical SEO, content strategy, analytics and the use of industry‑leading tools such as Google Search Console, Google Analytics, SEMrush, Moz and Ahrefs [omar-corral.com](https://omar-corral.com). Omar’s site also lists his work experience, including roles at the University of Arizona Global Campus, Zovio, Manifest LLC and V Digital Services [omar-corral.com](https://omar-corral.com).

## Features

- **About Section** – An introduction describing Omar’s philosophy and the value he brings as an SEO manager and consultant [omar-corral.com](https://omar-corral.com).

- **Skills Matrix** – Highlights areas such as keyword research, on‑page/off‑page/technical SEO, content strategy, mobile/local/eCommerce SEO, analytics, schema markup and tool proficiency [omar-corral.com](https://omar-corral.com).

- **Experience Timeline** – Summarises past and present roles; for example, he served as SEO Manager at the University of Arizona Global Campus, achieving a +79 % increase in organic sessions [omar-corral.com](https://omar-corral.com), and led performance marketing initiatives at Manifest LLC resulting in a 30 % lift in organic visibility [omar-corral.com](https://omar-corral.com).

- **Contact & Social Links** – Lists ways to get in touch (email and social profiles) and encourages collaboration.

## Libraries & Tools

This project is built on a modern frontend stack. Key libraries and tools include:

- **Next.js & React** – The core framework for the site, providing routing, components, static site generation and server‑side rendering. Next.js can export a fully static site by setting `output: 'export'` in `next.config.js`; when you run `next build`, it generates an HTML file per route for faster page loads and can be hosted on any static file server. [Next.js](https://nextjs.org).

- **Tailwind CSS** – A utility‑first CSS framework for rapid, responsive design. It pairs nicely with Next.js and can be customised via a `tailwind.config.js`.

- **Font Awesome** – Provides a comprehensive set of icons. This repository already includes `@fortawesome/fontawesome-svg-core` and several icon packs.

- **Motion (Framer Motion)** – A production‑grade animation library for React, JavaScript and Vue. It is free, open‑source and easy to use, making it ideal for smooth transitions, scroll animations and interactive gestures. [motion.dev](https://motion.dev).

- **gh-pages** – A dev dependency used to deploy the built site to GitHub Pages. It publishes the contents of the `out` directory to the `gh-pages` branch.

- **Optional utilities** – You may also want `@headlessui/react` for accessible UI components, `lucide-react` or `heroicons` for lightweight icons, and email utilities (such as `@emailjs/browser` or Formspree) for a contact form.

## Project Setup & Structure

The recommended way to build this portfolio is to scaffold a new Next.js project and then add Tailwind CSS and the other libraries. A typical workflow:

- Create the project: run  
  ```bash
  npx create-next-app@latest oc-portfolio
  ```  
  (or use Cursor’s UI to create a Next.js app). Choose TypeScript if desired.

- Add Tailwind CSS: install Tailwind and its peer dependencies:  
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

- Configure `tailwind.config.js` to include your `src` directory in the content array. Add the Tailwind directives (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`) to `styles/globals.css`.

- Install animation and icon libraries:  
  ```bash
  npm install framer-motion @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
  ```

- You can also install additional icon sets (e.g., `@fortawesome/free-brands-svg-icons`) as needed.

- Install `gh-pages`:  
  ```bash
  npm install --save-dev gh-pages
  ```

- Create your directory structure: use a `src` folder with `pages` for route components, `components` for reusable UI, and `data` for JSON/JS modules containing your content (hero text, about text, skills, experience and socials). Follow the guidelines in the Customising Your Content section to populate these files.

- Version control: initialise a Git repository (`git init`), commit your changes and push to GitHub.

Within your pages, import the data modules and compose them into sections: a hero banner, about section, skills grid, experience timeline and a contact form. Leverage Tailwind utilities and Motion components to create responsive layouts, transitions and interactive effects.

## Development Workflow

After you have set up your project, use the following commands to develop, test and build your site:

- Install dependencies – run  
  ```bash
  npm install
  ```  
  to download all packages defined in `package.json`.

- Start the development server – run  
  ```bash
  npm run dev
  ```  
  to launch a local server. Visit [http://localhost:3000](http://localhost:3000) in your browser to view the site. Edits to the source files will hot‑reload the page.

- Build for production – run  
  ```bash
  npm run build
  ```  
  to create an optimised build. Because the project uses static export, this will generate an `out` folder containing HTML, CSS and JavaScript files. [Next.js](https://nextjs.org). If you have configured `gh-pages` (see below), the `predeploy` script will run this command automatically.

## Customising Your Content

The goal of this repository is to make it simple to personalise the site. Most content is defined in data files under a `src/data` directory (create this directory if it doesn’t exist). For example:

- `src/data/hero.js` – Contains the headline and subheading that appear on the landing page. Update it with your own tagline (for instance, “Expert SEO Specialist & Digital Marketing Strategist”).

- `src/data/about.js` – Stores the text for the about section. Include details such as your passion for SEO, your experience using tools like SEMrush, Moz, Ahrefs and Google Analytics, and your customer‑centric approach [omar-corral.com](https://omar-corral.com).

- `src/data/skills.js` – An array listing each skill (keyword research, on‑page SEO, technical SEO, content strategy, mobile/local/eCommerce SEO, analytics, schema markup, bilingual SEO and AI tools such as ChatGPT and Midjourney) [omar-corral.com](https://omar-corral.com).

- `src/data/experience.js` – Lists your work experience; include positions such as SEO Manager at the University of Arizona Global Campus (Aug 2022 – present), Sr. Search Engine Optimization Specialist at Zovio (Feb 2021 – Aug 2022), Sr. Performance Marketing Engineer at Manifest LLC (Aug 2018 – Aug 2021) and Sr. Bilingual SEO Strategist at V Digital Services (Mar 2017 – Aug 2018) [omar-corral.com](https://omar-corral.com).

- `src/data/socials.js` – Defines links to your LinkedIn, Facebook, Instagram profiles, and a contact email.

You can structure these files as JSON or JavaScript modules. The site’s components will import them to render sections dynamically.

## Deployment

You can deploy the built site to a static host such as Vercel, Netlify or GitHub Pages. A typical workflow for Vercel is:

- Push your repository to GitHub.

- Sign up for a Vercel account and import your GitHub repo.

- Configure the project (framework preset, build command `npm run build` and output directory).

- Deploy. Vercel will handle continuous deployment on each push to your main branch.

For GitHub Pages, you can use the `gh-pages` package to publish the `out` or `build` directory.

### Deploying to GitHub Pages

To publish the site to GitHub Pages using `gh-pages`, follow these steps:

- Configure static export: in your `next.config.js`, set the output mode to static export and define the asset prefix and base path for your repository:

  ```js
  // next.config.js
  const isProd = process.env.NODE_ENV === 'production';
  const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? '/<repository-name>/' : '',
    basePath: isProd ? '/<repository-name>' : '',
  };
  export default nextConfig;
  ```

  This tells Next.js to generate a static site and serve assets from the correct subpath. [Next.js](https://nextjs.org).

- Add a homepage field and deploy scripts: update your `package.json` to include the correct GitHub Pages URL and the predeploy/deploy scripts:

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

- Run the deployment: execute  
  ```bash
  npm run predeploy
  npm run deploy
  ```  
  These commands build the site, export it to the `out` directory and push it to the `gh-pages` branch of your repository. [Dev.to](https://dev.to).

- Enable GitHub Pages: on GitHub, go to Settings → Pages, choose the `gh-pages` branch and `/` as the source, then save your settings. [Dev.to](https://dev.to).

- Add `.nojekyll`: manually add a `.nojekyll` file at the root of the `gh-pages` branch to prevent GitHub Pages from processing the site with Jekyll. [Dev.to](https://dev.to).

Your site will be live at `https://<github-username>.github.io/<repository-name>`. Push your latest changes to the main branch and re-run the deploy script whenever you want to update the live site.

### Custom Domain

If you want `omar-corral.com` to point to your GitHub Pages site, configure a custom domain:

- Add the domain in GitHub: in your repository’s Settings → Pages, enter `omar-corral.com` in the Custom domain field and click Save. This will create a commit adding a `CNAME` file to your repository. [GitHub Docs](https://docs.github.com).

- Configure DNS records: at your domain registrar or DNS provider, create the following records:

  - For the apex domain (`omar-corral.com`), add an A record (or ALIAS/ANAME record) pointing to GitHub Pages’ IP addresses:  
    `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`. [GitHub Docs](https://docs.github.com).

  - For the `www` subdomain, add a CNAME record pointing `www.omar-corral.com` to your GitHub Pages default domain (`<github-username>.github.io`). [GitHub Docs](https://docs.github.com).

- Wait for propagation: DNS changes can take up to 24 hours to propagate. [GitHub Docs](https://docs.github.com). Once they do, your domain will serve your GitHub Pages site. Return to the Pages settings and enable Enforce HTTPS.

## Design Guidelines

To make the site modern and engaging:

- **Hero section**: start with a bold hero area displaying your name, tagline and a call‑to‑action button. Use a high‑quality background image or a subtle gradient.

- **Animations**: leverage Motion’s simple API to animate sections as they enter the viewport or on hover. Smooth scroll and exit animations help guide the user’s attention. [motion.dev](https://motion.dev).

- **Responsive layout**: use Tailwind’s responsive utilities to create grids and cards that adapt to all screen sizes. Keep text legible and use ample whitespace.

- **Colour palette and typography**: choose a cohesive colour palette and pair it with modern fonts (you can import Google Fonts via Next.js). Provide a dark mode toggle if desired.

- **Images and icons**: integrate relevant illustrations, photos or icons to reinforce your expertise in SEO and digital marketing. Font Awesome and Lucide/Heroicons can supply crisp icons.

- **SEO optimization**: define metadata in each page’s `<Head>` component, including meaningful titles, descriptions and open graph tags. Use semantic HTML and alt text for images.

## Contributing

This site represents Omar Corral’s personal brand. If you wish to suggest improvements (for example, UI enhancements, performance optimisations or additional sections), feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. You are free to reuse the codebase for your own personal portfolio or to help others establish their online presence.