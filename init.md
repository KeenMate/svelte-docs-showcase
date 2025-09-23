# Svelte Docs Showcase - Project Initialization Guide

## Project Overview
This is a complete showcase documentation site for the `@keenmate/svelte-docs` library - a professional component library for building documentation and showcase sites with SvelteKit.

## Quick Start

### Prerequisites
- Node.js 18+
- Git
- npm/pnpm/yarn

### Installation & Setup

```bash
# 1. Clone or create the project
mkdir svelte-docs-showcase
cd svelte-docs-showcase

# 2. Initialize the project files (see structure below)
# Copy all files from this repository

# 3. Install dependencies
npm install

# 4. Link the svelte-docs library (if developing locally)
cd ../svelte-docs
npm link
cd ../svelte-docs-showcase
npm link @keenmate/svelte-docs

# 5. Start development server
npm run dev
# or using Makefile
make dev
```

## Project Structure

```
svelte-docs-showcase/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte          # Main layout with ConfigProvider
│   │   ├── +layout.ts              # Layout configuration (prerender: true)
│   │   ├── +page.svelte            # Homepage with library overview
│   │   ├── getting-started/
│   │   │   └── +page.svelte        # Installation & setup guide
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   └── +page.svelte    # DocLayout, ConfigProvider docs
│   │   │   ├── content/
│   │   │   │   └── +page.svelte    # ShowcaseSection, CodeShowcase, etc.
│   │   │   └── navigation/
│   │   │       └── +page.svelte    # Navigation components docs
│   │   ├── configuration/
│   │   │   └── +page.svelte        # Complete configuration guide
│   │   └── examples/
│   │       └── +page.svelte        # Practical examples & use cases
│   ├── lib/
│   │   └── data/                   # Mock data for examples
│   ├── app.html                    # HTML template
│   └── app.scss                    # Global styles with Bootstrap
├── static/                         # Static assets
├── context.md                      # Project context & guidelines
├── Makefile                        # Development commands
├── package.json                    # Dependencies & scripts
├── svelte.config.js               # SvelteKit config with static adapter
├── vite.config.js                 # Vite configuration
└── tsconfig.json                  # TypeScript configuration
```

## Key Dependencies

```json
{
  "dependencies": {
    "@keenmate/svelte-docs": "^1.0.0-rc02",
    "bootstrap": "^5.3.8"
  },
  "devDependencies": {
    "@sveltejs/adapter-static": "^3.0.9",
    "@sveltejs/kit": "^2.22.0",
    "@sveltejs/vite-plugin-svelte": "^6.0.0",
    "sass": "^1.92.1",
    "svelte": "^5.0.0",
    "svelte-check": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^7.0.4"
  }
}
```

## Configuration

### SSR Configuration (Recommended for v1.0.0-rc02+)

```typescript
// src/routes/+layout.server.ts
import type { PartialDocsConfig } from '@keenmate/svelte-docs';

export async function load() {
  const config: PartialDocsConfig = {
  site: {
    title: 'Svelte Docs Showcase',
    description: 'Complete documentation and showcase for @keenmate/svelte-docs',
    keywords: ['svelte', 'sveltekit', 'documentation', 'components'],
    author: 'KeenMate',
    url: 'https://svelte-docs.keenmate.com'
  },
  company: {
    name: 'KeenMate',
    website: 'https://keenmate.com',
    social: {
      github: 'https://github.com/keenmate/svelte-docs'
    }
  },
  navigation: {
    main: [
      { label: 'Home', href: '/', icon: '🏠' },
      { label: 'Getting Started', href: '/getting-started', icon: '🚀' },
      {
        label: 'Components',
        href: '/components',
        icon: '📦',
        children: [
          { label: 'Layout', href: '/components/layout' },
          { label: 'Content', href: '/components/content' },
          { label: 'Navigation', href: '/components/navigation' }
        ]
      },
      { label: 'Configuration', href: '/configuration', icon: '⚙️' },
      { label: 'Examples', href: '/examples', icon: '💡' }
    ]
  },
  features: {
    search: true,
    breadcrumbs: true,
    tableOfContents: true
  };

  return { config };
}
```

```typescript
// src/routes/+layout.svelte
<script lang="ts">
  import { ConfigProvider } from '@keenmate/svelte-docs';
  import '../app.scss';

  export let data;
</script>

<ConfigProvider configData={data.config}>
  <slot />
</ConfigProvider>
```

**Benefits of SSR Configuration:**
- ✅ Eliminates FOUC (Flash of Unstyled Content)
- ✅ Improved SEO with server-rendered meta tags
- ✅ Better performance with server-side config loading
- ✅ Enhanced user experience

### Static Site Generation
```typescript
// src/routes/+layout.ts
export const prerender = true;
export const ssr = true;
```

```javascript
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
};
```

## Available Commands

### Using npm
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Run type checking
```

### Using Makefile
```bash
make help           # Show all available commands
make setup          # Complete project setup
make dev            # Start development server
make build          # Build for production
make clean          # Clean build artifacts
make link-lib       # Link svelte-docs library
make rebuild-lib    # Rebuild and relink library
```

## Styles & Theming

### CSS Structure
```scss
// src/app.scss
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '@keenmate/svelte-docs/styles/main.scss';

:root {
  --docs-primary: #00A7E1;
  --docs-primary-dark: #007EA7;
  --docs-secondary: #003459;
  --docs-dark: #00171F;
}
```

### Color Scheme
- **Primary**: #00A7E1 (Blue)
- **Primary Dark**: #007EA7 (Dark Blue)
- **Secondary**: #003459 (Navy)
- **Dark**: #00171F (Almost Black)

## Page Structure Template

Every documentation page follows this structure:

```svelte
<script lang="ts">
  import { DocLayout, ShowcaseSection, CodeShowcase, CodeBlock, FeatureCard } from '@keenmate/svelte-docs';
</script>

<DocLayout
  titleText="Page Title"
  descriptionText="Page description for SEO">

  <div class="py-4">
    <!-- Content goes here - no need for additional containers -->

    <!-- Feature overview cards -->
    <div class="row g-4 mb-5">
      <div class="col-md-6 col-lg-3">
        <FeatureCard
          iconEmoji="🎯"
          titleText="Feature Name"
          descriptionText="Feature description"
          variantType="primary"
        />
      </div>
    </div>

    <!-- Interactive demonstrations -->
    <ShowcaseSection
      titleText="Component Name"
      subtitleText="Component description">

      {#snippet demoContent()}
        <!-- Live demo content -->
      {/snippet}

      {#snippet controlsContent()}
        <!-- Interactive controls -->
      {/snippet}

      {#snippet descriptionContent()}
        <!-- Documentation and examples -->
      {/snippet}
    </ShowcaseSection>

    <!-- Code examples -->
    <CodeShowcase
      titleText="Usage Examples"
      svelteCodeContent={`<!-- Svelte code -->`}
      typescriptCodeContent={`// TypeScript code`}
      cssCodeContent={`/* CSS code */`}
    />
  </div>
</DocLayout>
```

## Development Guidelines

### 1. Component Usage
- Always use components from `@keenmate/svelte-docs`
- Follow the library's naming conventions (titleText, isDisabled, etc.)
- Use proper TypeScript types

### 2. Content Structure
- Start with FeatureCard overview
- Use ShowcaseSection for interactive demos
- Include practical code examples
- Add best practices sections

### 3. Styling
- DocLayout provides container - don't add extra containers
- Use Bootstrap classes for spacing and layout
- Leverage CSS custom properties for theming
- Keep responsive design in mind

### 4. Navigation
- Configure in main layout ConfigProvider
- Support hierarchical structure (max 2-3 levels)
- Include meaningful icons
- Test mobile navigation

## Production Deployment

### Build Process
```bash
# Build the site
npm run build
# or
make build

# The built site will be in the 'build' directory
# Ready for deployment to any static hosting service
```

### Deployment Options
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod --dir=build`
- **GitHub Pages**: Push build directory to gh-pages branch
- **Any static host**: Upload contents of build directory

## Troubleshooting

### Common Issues

1. **Import errors with svelte-docs**
   ```bash
   # Make sure library is linked properly
   npm link @keenmate/svelte-docs
   ```

2. **CSS not loading**
   ```scss
   // Check imports in src/app.scss
   @import 'bootstrap/dist/css/bootstrap.min.css';
   @import '@keenmate/svelte-docs/styles/main.scss';
   ```

3. **TypeScript errors**
   ```bash
   # Run type checking
   npm run check
   ```

4. **Build fails**
   ```bash
   # Clean and rebuild
   make clean
   npm install
   npm run build
   ```

## Links & Resources

- **Live Demo**: http://localhost:5178 (when running dev server)
- **Library Repository**: https://github.com/keenmate/svelte-docs
- **NPM Package**: https://www.npmjs.com/package/@keenmate/svelte-docs
- **SvelteKit Documentation**: https://kit.svelte.dev
- **Bootstrap Documentation**: https://getbootstrap.com

## Support

For issues with the showcase:
1. Check this init guide
2. Review the context.md file
3. Check the GitHub repository

For issues with the library itself:
- Report at: https://github.com/keenmate/svelte-docs/issues

---

**Made with ❤️ using @keenmate/svelte-docs**