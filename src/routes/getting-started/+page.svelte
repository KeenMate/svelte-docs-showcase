<script lang="ts">
	import { DocLayout, ShowcaseSection, FeatureCard } from '@keenmate/svelte-docs';
	import { CleanCodeBlock, CleanCodeShowcase } from '$lib/components';
</script>

<DocLayout
	titleText="Getting Started"
	descriptionText="Learn how to install and configure @keenmate/svelte-docs in your SvelteKit project">

	<div class="py-4">

		<!-- Installation -->
		<ShowcaseSection
			titleText="Installation"
			subtitleText="Install the package using your preferred package manager">

			{#snippet demoContent()}
				<h4>Choose Your Package Manager</h4>
				<div class="mb-3">
					<CleanCodeBlock
						codeContent="npm install @keenmate/svelte-docs"
						languageType="bash"
						titleText="npm"
					/>
				</div>
				<div class="mb-3">
					<CleanCodeBlock
						codeContent="pnpm add @keenmate/svelte-docs"
						languageType="bash"
						titleText="pnpm"
					/>
				</div>
				<div class="mb-3">
					<CleanCodeBlock
						codeContent="yarn add @keenmate/svelte-docs"
						languageType="bash"
						titleText="yarn"
					/>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h4>Requirements</h4>
				<ul class="list-unstyled">
					<li class="mb-2">
						<span class="badge bg-primary me-2">✓</span>
						SvelteKit 2.x+
					</li>
					<li class="mb-2">
						<span class="badge bg-primary me-2">✓</span>
						Svelte 4.x or 5.x
					</li>
					<li class="mb-2">
						<span class="badge bg-primary me-2">✓</span>
						TypeScript (optional)
					</li>
					<li class="mb-2">
						<span class="badge bg-primary me-2">✓</span>
						Node.js 18+
					</li>
				</ul>
			{/snippet}

			{#snippet descriptionContent()}
				<h4>What's Included</h4>
				<p>The package includes:</p>
				<ul>
					<li>All documentation components</li>
					<li>Bootstrap 5.3.2 CSS</li>
					<li>Highlight.js for syntax highlighting</li>
					<li>Complete TypeScript definitions</li>
					<li>Pre-configured themes and styles</li>
				</ul>
			{/snippet}
		</ShowcaseSection>

		<!-- Quick Setup -->
		<ShowcaseSection
			titleText="Quick Setup"
			subtitleText="Configure your layout in 3 simple steps">

			{#snippet demoContent()}
				<h4>Step 1: Create Layout</h4>
				<p class="text-muted">Create <code>src/routes/+layout.svelte</code></p>
				<CleanCodeBlock
					codeContent={`<script lang="ts">
  import { ConfigProvider } from '@keenmate/svelte-docs';
  import type { PartialDocsConfig } from '@keenmate/svelte-docs';

  const config: PartialDocsConfig = {
    site: {
      title: 'My Documentation',
      description: 'Documentation for my project'
    },
    navigation: {
      main: [
        { label: 'Home', href: '/', icon: '🏠' },
        { label: 'Docs', href: '/docs', icon: '📚' }
      ]
    }
  };
</script>

<ConfigProvider configData={config}>
  <slot />
</ConfigProvider>`}
					languageType="svelte"
					titleText="+layout.svelte"
				/>
			{/snippet}

			{#snippet controlsContent()}
				<h4>Step 2: Create Page</h4>
				<p class="text-muted">Create <code>src/routes/+page.svelte</code></p>
				<CleanCodeBlock
					codeContent={`<script>
  import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
</script>

<DocLayout titleText="Welcome">
  <ShowcaseSection titleText="My First Section">
    {#snippet demoContent()}
      <h4>Hello World!</h4>
      <p>This is my documentation.</p>
    {/snippet}
  </ShowcaseSection>
</DocLayout>`}
					languageType="svelte"
					titleText="+page.svelte"
				/>
			{/snippet}

			{#snippet descriptionContent()}
				<h4>Step 3: Configure Static Generation</h4>
				<p class="text-muted">Add to <code>src/routes/+layout.ts</code></p>
				<CleanCodeBlock
					codeContent={`export const prerender = true;
export const ssr = true;`}
					languageType="typescript"
					titleText="+layout.ts"
				/>
				<div class="mt-3">
					<h5>Run Development Server</h5>
					<CleanCodeBlock
						codeContent="npm run dev"
						languageType="bash"
					/>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Component Overview -->
		<div class="mt-5">
			<h2 class="mb-4">Component Overview</h2>
			<div class="row g-4">
				<div class="col-md-6 col-lg-4">
					<FeatureCard
						iconEmoji="🏗️"
						titleText="Layout Components"
						descriptionText="DocLayout, ConfigProvider for structuring your documentation"
						linkHref="/components/layout"
						linkLabel="View Layout Components"
						variantType="primary"
					/>
				</div>
				<div class="col-md-6 col-lg-4">
					<FeatureCard
						iconEmoji="📝"
						titleText="Content Components"
						descriptionText="ShowcaseSection, CodeShowcase, CodeBlock, FeatureCard for content"
						linkHref="/components/content"
						linkLabel="View Content Components"
						variantType="success"
					/>
				</div>
				<div class="col-md-6 col-lg-4">
					<FeatureCard
						iconEmoji="🧭"
						titleText="Navigation Components"
						descriptionText="NavigationSidebar, PageHeader, Breadcrumbs for navigation"
						linkHref="/components/navigation"
						linkLabel="View Navigation Components"
						variantType="info"
					/>
				</div>
			</div>
		</div>

		<!-- Advanced Configuration -->
		<div class="mt-5">
			<h2 class="mb-4">Advanced Configuration</h2>
			<CleanCodeShowcase
				titleText="Complete Configuration Example"
				svelteCodeContent={`<script lang="ts">
  import { ConfigProvider } from '@keenmate/svelte-docs';
  import type { PartialDocsConfig } from '@keenmate/svelte-docs';

  const config: PartialDocsConfig = {
    site: {
      title: 'My Documentation',
      description: 'Comprehensive documentation for my project',
      keywords: ['documentation', 'api', 'guide'],
      author: 'Your Name',
      url: 'https://docs.example.com',
      language: 'en',
      ogImage: '/og-image.png'
    },
    company: {
      name: 'Your Company',
      website: 'https://example.com',
      logo: '/logo.svg',
      logoAlt: 'Company Logo',
      social: {
        github: 'https://github.com/username',
        twitter: 'https://twitter.com/username',
        linkedin: 'https://linkedin.com/company/name'
      }
    },
    navigation: {
      main: [
        { label: 'Home', href: '/', icon: '🏠' },
        {
          label: 'Docs',
          href: '/docs',
          icon: '📚',
          children: [
            { label: 'Getting Started', href: '/docs/getting-started' },
            { label: 'API Reference', href: '/docs/api' }
          ]
        },
        { label: 'Examples', href: '/examples', icon: '💡' }
      ],
      social: [
        { label: 'GitHub', href: 'https://github.com/username', icon: '⭐' }
      ]
    },
    features: {
      search: true,
      breadcrumbs: true,
      tableOfContents: true
    }
  };
</script>

<ConfigProvider configData={config}>
  <slot />
</ConfigProvider>`}
				typescriptCodeContent={`// types/docs.ts
export interface CustomDocsConfig extends PartialDocsConfig {
  // Add your custom configuration properties
  theme?: {
    primaryColor?: string;
    darkMode?: boolean;
  };
  analytics?: {
    googleAnalyticsId?: string;
    plausibleDomain?: string;
  };
}`}
				cssCodeContent={`:root {
  /* Override default colors */
  --docs-primary-color: #00A7E1;
  --docs-primary-dark: #007EA7;
  --docs-secondary: #003459;
  --docs-dark: #00171F;

  /* Custom spacing */
  --docs-header-height: 4rem;
  --docs-sidebar-width: 16rem;

  /* Typography */
  --docs-font-family: 'Inter', system-ui, sans-serif;
  --docs-code-font-family: 'JetBrains Mono', monospace;
}`}
			/>
		</div>

		<!-- New in v1.0.0-rc02 -->
		<div class="mt-5">
			<h2 class="mb-4">🆕 New in v1.0.0-rc02</h2>
			<div class="alert alert-success">
				<strong>Major improvements to layout, SSR support, and customization!</strong>
			</div>

			<!-- SCSS Variables System -->
			<ShowcaseSection
				titleText="SCSS Variables System"
				subtitleText="50+ customization variables for complete styling control">

				{#snippet demoContent()}
					<h4>Comprehensive Customization</h4>
					<p>The new SCSS variables system gives you complete control over:</p>
					<ul>
						<li><strong>Typography spacing</strong> - Headers, paragraphs, lists</li>
						<li><strong>Colors</strong> - Primary, secondary, heading colors</li>
						<li><strong>Layout dimensions</strong> - Navbar height, sidebar width</li>
						<li><strong>Font families</strong> - Base and monospace fonts</li>
					</ul>
				{/snippet}

				{#snippet controlsContent()}
					<h4>Usage</h4>
					<CleanCodeBlock
						codeContent={`// Create _variables.scss in your project
$h1-margin-top: 2rem !default;
$h2-margin-top: 1.25rem !default;
$h3-margin-top: 1rem !default;
$heading-color-h1: #2c3e50 !default;
$code-bg-color: #f8f9fa !default;
$navbar-height: 4rem !default;
$sidebar-width: 16rem !default;
$font-family-base: 'Inter', system-ui, sans-serif !default;

// Import before using the library
@import './variables';
@import '@keenmate/svelte-docs/styles/main.scss';`}
						languageType="scss"
					/>
				{/snippet}

				{#snippet descriptionContent()}
					<h4>Layout Spacing Improvements</h4>
					<ul>
						<li>Optimized header margins (h2: 2rem → 1.25rem, h3: 1.5rem → 1rem)</li>
						<li>Better bottom margins for vertical rhythm</li>
						<li>Reduced main container padding for cleaner layouts</li>
						<li>First-child rules to remove unwanted top margins</li>
					</ul>
				{/snippet}
			</ShowcaseSection>

			<!-- SSR Configuration -->
			<ShowcaseSection
				titleText="Server-Side Rendering (SSR)"
				subtitleText="Eliminate FOUC and improve SEO with server-side configuration">

				{#snippet demoContent()}
					<h4>Benefits</h4>
					<div class="row g-3">
						<div class="col-md-6">
							<div class="border rounded p-3">
								<h5>✅ FOUC Elimination</h5>
								<p class="mb-0">No more flash of unstyled content</p>
							</div>
						</div>
						<div class="col-md-6">
							<div class="border rounded p-3">
								<h5>🚀 Better SEO</h5>
								<p class="mb-0">Server-rendered meta tags</p>
							</div>
						</div>
					</div>
				{/snippet}

				{#snippet controlsContent()}
					<h4>Implementation</h4>
					<CleanCodeBlock
						codeContent={`// src/routes/+layout.server.ts
import type { PartialDocsConfig } from '@keenmate/svelte-docs';

export async function load() {
  const config: PartialDocsConfig = {
    // Your configuration
  };

  return { config };
}`}
						languageType="typescript"
					/>
				{/snippet}

				{#snippet descriptionContent()}
					<p><strong>Recommended for all new projects!</strong> SSR configuration provides better performance and user experience compared to client-side configuration.</p>
					<a href="/components/layout" class="btn btn-sm btn-outline-primary">
						Learn More About SSR Setup →
					</a>
				{/snippet}
			</ShowcaseSection>

			<!-- CSS Architecture -->
			<ShowcaseSection
				titleText="CSS Architecture Overhaul"
				subtitleText="Centralized styling with modern SCSS patterns">

				{#snippet demoContent()}
					<h4>What Changed</h4>
					<ul>
						<li><strong>Centralized CSS</strong> - All styles moved to main.scss</li>
						<li><strong>Component Cleanup</strong> - Removed duplicate CSS from components</li>
						<li><strong>Modern SCSS</strong> - Updated to @use syntax (no more deprecation warnings)</li>
						<li><strong>Better Maintainability</strong> - Single source of truth for styling</li>
					</ul>
				{/snippet}

				{#snippet controlsContent()}
					<h4>Migration</h4>
					<p class="text-muted">Update your SCSS imports:</p>
					<CleanCodeBlock
						codeContent={`// Old way (deprecated)
@import '@keenmate/svelte-docs/styles/main.scss';

// New way (recommended)
@use '@keenmate/svelte-docs/styles/main.scss';`}
						languageType="scss"
					/>
				{/snippet}

				{#snippet descriptionContent()}
					<h4>Component Improvements</h4>
					<p>CodeRenderer, CodeBlock, and CodeShowcase now have better whitespace handling with the &lt;pre&gt; tag moved into the renderer component to prevent formatting issues.</p>
				{/snippet}
			</ShowcaseSection>
		</div>

		<!-- Next Steps -->
		<div class="mt-5 p-4 bg-light rounded">
			<h3>Next Steps</h3>
			<div class="row g-3 mt-2">
				<div class="col-md-4">
					<a href="/components/layout" class="btn btn-outline-primary w-100">
						📦 Explore Components
					</a>
				</div>
				<div class="col-md-4">
					<a href="/configuration" class="btn btn-outline-primary w-100">
						⚙️ Configuration Guide
					</a>
				</div>
				<div class="col-md-4">
					<a href="/examples" class="btn btn-outline-primary w-100">
						💡 View Examples
					</a>
				</div>
			</div>
		</div>
	</div>
</DocLayout>