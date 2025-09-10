# Omar Corral Portfolio - Brand Guide

## Brand Overview

This brand guide defines the visual identity and design system for Omar Corral's professional portfolio. Omar is an AI-powered SEO specialist and digital marketing strategist, and the brand should reflect expertise, innovation, and professional excellence in the digital marketing space.

---

## Color Palette

### Primary Colors

- **Primary Blue**: `#1E40AF` (Blue-700)
  - Usage: Primary actions, links, highlights
  - Tailwind: `bg-blue-700`, `text-blue-700`

- **Secondary Blue**: `#2563EB` (Blue-600)  
  - Usage: Secondary actions, hover states
  - Tailwind: `bg-blue-600`, `text-blue-600`

### Accent Colors

- **Accent Amber**: `#FBBF24` (Amber-400)
  - Usage: Call-to-action buttons, highlights, success states
  - Tailwind: `bg-amber-400`, `text-amber-400`

### Neutral Colors (Current Implementation)

- **Slate 900**: `#0F172A` 
  - Usage: Primary backgrounds, hero sections, contact
  - Tailwind: `bg-slate-900`

- **Slate 800**: `#1E293B`
  - Usage: Section backgrounds, about, skills
  - Tailwind: `bg-slate-800`

- **Slate 700**: `#334155`
  - Usage: Secondary backgrounds, experience section
  - Tailwind: `bg-slate-700`

- **Slate 600**: `#475569`
  - Usage: Borders, navigation elements
  - Tailwind: `bg-slate-600`

### Text Colors

- **Primary Text**: `#FFFFFF` (White)
  - Usage: Primary text on dark backgrounds
  - Tailwind: `text-white`

- **Secondary Text**: `#D1D5DB` (Gray-300)
  - Usage: Secondary text, descriptions
  - Tailwind: `text-gray-300`

- **Muted Text**: `#9CA3AF` (Gray-400)
  - Usage: Metadata, timestamps, subtle text
  - Tailwind: `text-gray-400`

---

## Typography

### Font Family

- **Primary Font**: `'Geist Sans', 'Inter', sans-serif`
  - Modern, clean, highly legible
  - Excellent for digital interfaces

- **Monospace Font**: `'Geist Mono', 'Courier New', monospace`
  - Usage: Code snippets, technical content

### Typography Scale

- **Display Large**: `text-6xl` (60px)
  - Usage: Hero headlines
  - Weight: `font-light`

- **Display Medium**: `text-5xl` (48px)
  - Usage: Section headlines
  - Weight: `font-light`

- **Heading 1**: `text-4xl` (36px)
  - Usage: Page titles
  - Weight: `font-semibold`

- **Heading 2**: `text-3xl` (30px)
  - Usage: Section titles
  - Weight: `font-semibold`

- **Heading 3**: `text-2xl` (24px)
  - Usage: Subsection titles
  - Weight: `font-medium`

- **Heading 4**: `text-xl` (20px)
  - Usage: Card titles, component headers
  - Weight: `font-medium`

- **Body Large**: `text-lg` (18px)
  - Usage: Important body text, introductions
  - Weight: `font-normal`

- **Body Regular**: `text-base` (16px)
  - Usage: Standard body text
  - Weight: `font-normal`

- **Body Small**: `text-sm` (14px)
  - Usage: Captions, metadata
  - Weight: `font-normal`

- **Caption**: `text-xs` (12px)
  - Usage: Fine print, timestamps
  - Weight: `font-normal`

---

## Layout & Spacing

### Container Widths

- **Max Width**: `max-w-7xl` (1280px)
- **Content Width**: `max-w-4xl` (896px)
- **Text Width**: `max-w-3xl` (768px)
- **Narrow Width**: `max-w-2xl` (672px)

### Spacing Scale

- **Section Padding**: `py-20` (80px vertical)
- **Container Padding**: `px-6` (24px horizontal)
- **Component Spacing**: `space-y-16` (64px between major elements)
- **Element Spacing**: `space-y-8` (32px between related elements)
- **Tight Spacing**: `space-y-4` (16px between small elements)

### Grid System

- **Main Layout**: `grid lg:grid-cols-5`
  - Profile section: `lg:col-span-2`
  - Content section: `lg:col-span-3`

- **Cards Grid**: `grid md:grid-cols-2 xl:grid-cols-3 gap-8`
- **Stats Grid**: `grid grid-cols-1 md:grid-cols-3 gap-8`

---

## Components

### Buttons

#### Primary Button
```css
bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl 
font-medium transition-all duration-300
```

#### Secondary Button  
```css
bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl 
font-medium transition-all duration-300
```

#### Ghost Button
```css
border border-slate-600 hover:bg-slate-700 text-gray-300 hover:text-white 
px-6 py-3 rounded-xl font-medium transition-all duration-300
```

### Cards

#### Standard Card
```css
bg-slate-800 border border-slate-600 rounded-2xl p-6 shadow-xl
hover:bg-slate-700 transition-all duration-300
```

#### Feature Card
```css
bg-slate-800 border border-slate-600 rounded-2xl p-8 shadow-xl
hover:border-blue-500 hover:bg-slate-700 transition-all duration-300
```

### Navigation

#### Floating Navigation
```css
bg-slate-800 border border-slate-600 rounded-2xl p-3 shadow-xl
fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50
```

#### Navigation Button
```css
p-3 rounded-xl transition-all duration-300
Active: bg-blue-600 text-white
Inactive: text-gray-300 hover:text-white hover:bg-slate-700
```

---

## Design Principles

### 1. Flat Design Approach

- **No Gradients**: Use solid colors for all backgrounds
- **Minimal Shadows**: Subtle shadows for depth (`shadow-xl`)
- **Clean Borders**: Simple borders with consistent colors
- **Flat Buttons**: Solid colors with hover state changes

### 2. Professional Minimalism

- **Generous Whitespace**: Allow content to breathe
- **Clear Hierarchy**: Consistent typography scale
- **Focused Content**: Remove unnecessary elements
- **Clean Animations**: Subtle, purposeful motion

### 3. Accessibility First

- **High Contrast**: Ensure readable text contrast ratios
- **Focus States**: Clear focus indicators for keyboard navigation
- **Semantic HTML**: Proper heading structure and landmarks
- **Alt Text**: Descriptive alt text for all images

### 4. Mobile-First Responsive

- **Progressive Enhancement**: Start with mobile, enhance for desktop
- **Touch-Friendly**: Minimum 44px touch targets
- **Readable Text**: Minimum 16px font size on mobile
- **Flexible Layouts**: Use responsive grid systems

---

## Animation Guidelines

### Framer Motion Principles

#### Entrance Animations
```javascript
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

#### Hover Effects
```javascript
whileHover={{ scale: 1.02, y: -2 }}
transition={{ duration: 0.2 }}
```

#### Stagger Children
```javascript
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
```

### Animation Timing

- **Fast**: `duration: 0.2s` (Hover effects, button states)
- **Medium**: `duration: 0.6s` (Content reveals, transitions)  
- **Slow**: `duration: 1.2s` (Hero animations, page loads)

### Easing Functions

- **Standard**: `ease: "easeOut"` (Content animations)
- **Bounce**: `type: "spring", bounce: 0.3` (Interactive elements)
- **Smooth**: `ease: [0.22, 1, 0.36, 1]` (Page transitions)

---

## Icon Guidelines

### Icon Library

- **Primary**: Font Awesome (React implementation)
- **Usage**: Consistent style, appropriate sizing
- **Colors**: Inherit from parent or use accent colors

### Common Icons

- **Home**: `faHome`
- **User**: `faUser` 
- **Skills**: `faCog`
- **Experience**: `faBriefcase`
- **Contact**: `faEnvelope`
- **External Link**: `faExternalLinkAlt`

---

## SEO & Performance

### Meta Tags

- **Title**: Descriptive, keyword-rich titles
- **Description**: Compelling meta descriptions (150-160 characters)
- **Open Graph**: Social media preview optimization
- **Favicon**: High-quality, scalable SVG favicon

### Performance

- **Images**: Optimized formats (WebP, AVIF)
- **Fonts**: Subset fonts, preload critical fonts
- **CSS**: Minimal CSS bundle size
- **JavaScript**: Code splitting, lazy loading

---

## Brand Voice & Tone

### Professional Expertise

- **Confident**: Demonstrate knowledge and experience
- **Approachable**: Friendly but professional communication
- **Results-Driven**: Focus on measurable outcomes
- **Innovation-Focused**: Highlight AI and modern SEO techniques

### Content Guidelines

- **Headlines**: Clear, benefit-focused
- **Body Copy**: Scannable, action-oriented
- **Technical Terms**: Explain complex concepts simply
- **Call-to-Actions**: Direct, compelling language

---

## Implementation Checklist

### Design System Compliance

- [ ] All colors use defined palette
- [ ] Typography follows scale and hierarchy  
- [ ] Components use standardized styles
- [ ] Spacing follows consistent scale
- [ ] Animations use approved timing and easing

### Accessibility Compliance

- [ ] Color contrast ratios meet WCAG standards
- [ ] Focus states are clearly visible
- [ ] Semantic HTML structure
- [ ] Alt text for all images
- [ ] Keyboard navigation works properly

### Performance Standards

- [ ] Page load time under 3 seconds
- [ ] First Contentful Paint under 1.5 seconds
- [ ] Cumulative Layout Shift under 0.1
- [ ] Images optimized and properly sized
- [ ] CSS and JavaScript minified

---

## Version History

- **v1.0**: Initial brand guide creation
- **Current**: Flat design implementation, updated color palette

---

*This brand guide is a living document that should be updated as the design system evolves.*
