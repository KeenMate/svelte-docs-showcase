# Svelte Docs Showcase - Context File

## Project Overview
This project is a showcase documentation for the `@keenmate/svelte-docs` library - a professional component library for building documentation and showcase sites with SvelteKit.

## Project Goals
1. Create a fully functional showcase documentation demonstrating all library components
2. Provide practical usage examples for each component
3. Build an interactive playground for testing different configurations
4. Demonstrate best practices for using the library

## Main Components to Document
- **DocLayout** - Main documentation page layout
- **ConfigProvider** - Global configuration provider
- **ShowcaseSection** - Three-column layout for demonstrations
- **CodeShowcase** - Multi-tab code viewer
- **CodeBlock** - Code display with syntax highlighting
- **FeatureCard** - Feature cards with icons
- **NavigationSidebar** - Side navigation
- **PageHeader** - Page header component
- **Breadcrumbs** - Breadcrumbs navigation

## Project Structure
```
svelte-docs-showcase/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte        # Main layout with ConfigProvider
│   │   ├── +page.svelte          # Landing page
│   │   ├── getting-started/      # Getting started guide
│   │   ├── components/           # Component documentation
│   │   │   ├── layout/          # Layout components
│   │   │   ├── content/         # Content components
│   │   │   └── navigation/      # Navigation components
│   │   ├── configuration/       # Configuration guide
│   │   ├── examples/           # Practical examples
│   │   └── playground/         # Interactive playground
│   └── lib/
│       └── data/               # Mock data for examples
├── static/
│   └── images/                # Documentation images
└── package.json
```

## Technical Requirements
- SvelteKit 2.x
- Svelte 5.x
- TypeScript
- @keenmate/svelte-docs (via npm link)
- Bootstrap 5.3.2 (included in library)
- Highlight.js (included in library)

## Development Rules
1. **Use existing components** from @keenmate/svelte-docs
2. **Don't create unnecessary files** - only what's needed for documentation
3. **Follow library naming conventions** (e.g., titleText, isDisabled, etc.)
4. **Write clean, readable code** without unnecessary comments
5. **Every page must be fully functional** with real examples
6. **Optimize for static site generation** (SSG)

## Color Scheme
```css
--docs-primary-color: #00A7E1;
--docs-primary-dark: #007EA7;
--docs-secondary: #003459;
--docs-dark: #00171F;
```

## Links
- Library: ../svelte-docs
- NPM: @keenmate/svelte-docs
- GitHub: https://github.com/keenmate/svelte-docs