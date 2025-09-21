<script lang="ts">
	import { DocLayout, ShowcaseSection, FeatureCard } from '@keenmate/svelte-docs';
	import { CleanCodeBlock, CleanCodeShowcase } from '$lib/components';
</script>

<DocLayout
	titleText="Configuration Guide"
	descriptionText="Complete guide to configuring @keenmate/svelte-docs for your project">

	<div class="py-4">

		<!-- Overview -->
		<div class="row g-4 mb-5">
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="🌐"
					titleText="Site Configuration"
					descriptionText="Global site settings, metadata, and SEO configuration"
					variantType="primary"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="🏢"
					titleText="Company Info"
					descriptionText="Company details, branding, and social media links"
					variantType="success"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="🧭"
					titleText="Navigation"
					descriptionText="Menu structure, hierarchy, and navigation behavior"
					variantType="info"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="⚙️"
					titleText="Features"
					descriptionText="Toggle features like search, breadcrumbs, and table of contents"
					variantType="warning"
				/>
			</div>
		</div>

		<!-- Basic Configuration -->
		<ShowcaseSection
			titleText="Basic Configuration"
			subtitleText="Essential settings to get started">

			{#snippet demoContent()}
				<h5>Minimal Configuration</h5>
				<CleanCodeBlock
					codeContent={`const config = {
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
};`}
					languageType="javascript"
					titleText="Minimal setup"
				/>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Required Fields</h6>
				<ul class="list-group list-group-flush">
					<li class="list-group-item d-flex justify-content-between">
						<span><code>site.title</code></span>
						<span class="badge bg-danger">Required</span>
					</li>
					<li class="list-group-item d-flex justify-content-between">
						<span><code>navigation.main</code></span>
						<span class="badge bg-warning">Recommended</span>
					</li>
				</ul>
				<h6 class="mt-3">Optional Fields</h6>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">
						<code>site.description</code> - SEO description
					</li>
					<li class="list-group-item">
						<code>company.name</code> - Company branding
					</li>
					<li class="list-group-item">
						<code>features.*</code> - Feature toggles
					</li>
				</ul>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Getting Started</h6>
				<p>The configuration object is passed to <code>ConfigProvider</code> in your root layout.</p>
				<ol>
					<li>Create configuration object</li>
					<li>Import <code>ConfigProvider</code></li>
					<li>Wrap your app with provider</li>
					<li>Pass config via <code>configData</code> prop</li>
				</ol>
				<p class="text-muted">All configuration is optional except for basic site information.</p>
			{/snippet}
		</ShowcaseSection>

		<!-- Site Configuration -->
		<ShowcaseSection
			titleText="Site Configuration"
			subtitleText="Global site settings and metadata">

			{#snippet demoContent()}
				<CleanCodeBlock
					codeContent={`site: {
  title: 'My Documentation',
  description: 'Comprehensive documentation for developers',
  keywords: ['documentation', 'api', 'guide', 'tutorial'],
  author: 'Your Name',
  url: 'https://docs.example.com',
  language: 'en',
  ogImage: '/og-image.png',
  twitterHandle: '@yourusername'
}`}
					languageType="javascript"
					titleText="Complete site configuration"
				/>
			{/snippet}

			{#snippet controlsContent()}
				<h6>SEO Impact</h6>
				<div class="table-responsive">
					<table class="table table-sm">
						<thead>
							<tr>
								<th>Property</th>
								<th>SEO Benefit</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>title</code></td>
								<td>Page title, search results</td>
							</tr>
							<tr>
								<td><code>description</code></td>
								<td>Meta description, snippets</td>
							</tr>
							<tr>
								<td><code>keywords</code></td>
								<td>Meta keywords</td>
							</tr>
							<tr>
								<td><code>ogImage</code></td>
								<td>Social media previews</td>
							</tr>
							<tr>
								<td><code>url</code></td>
								<td>Canonical URLs</td>
							</tr>
						</tbody>
					</table>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Automatic Features</h6>
				<ul>
					<li><strong>Meta tags:</strong> Automatic generation of meta tags</li>
					<li><strong>Open Graph:</strong> Social media sharing optimization</li>
					<li><strong>JSON-LD:</strong> Structured data for search engines</li>
					<li><strong>Canonical URLs:</strong> SEO-friendly URL structure</li>
				</ul>
				<h6>Best Practices</h6>
				<ul>
					<li>Keep title under 60 characters</li>
					<li>Description should be 150-160 characters</li>
					<li>Use relevant keywords naturally</li>
					<li>Optimize OG image (1200x630px recommended)</li>
				</ul>
			{/snippet}
		</ShowcaseSection>

		<!-- Company Configuration -->
		<ShowcaseSection
			titleText="Company Configuration"
			subtitleText="Branding and company information">

			{#snippet demoContent()}
				<CleanCodeBlock
					codeContent={`company: {
  name: 'Your Company',
  website: 'https://example.com',
  logo: '/logo.svg',
  logoAlt: 'Company Logo',
  social: {
    github: 'https://github.com/username',
    twitter: 'https://twitter.com/username',
    linkedin: 'https://linkedin.com/company/name',
    facebook: 'https://facebook.com/yourpage'
  }
}`}
					languageType="javascript"
					titleText="Company branding setup"
				/>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Logo Requirements</h6>
				<ul class="list-unstyled">
					<li class="mb-2">
						<span class="badge bg-info me-2">📐</span>
						SVG format recommended
					</li>
					<li class="mb-2">
						<span class="badge bg-info me-2">📱</span>
						Responsive sizing
					</li>
					<li class="mb-2">
						<span class="badge bg-info me-2">🌓</span>
						Dark/light mode compatible
					</li>
					<li class="mb-2">
						<span class="badge bg-info me-2">♿</span>
						Include alt text
					</li>
				</ul>
				<h6>Social Links</h6>
				<p class="text-muted">Supported platforms:</p>
				<div class="d-flex gap-2 flex-wrap">
					<span class="badge bg-secondary">GitHub</span>
					<span class="badge bg-secondary">Twitter</span>
					<span class="badge bg-secondary">LinkedIn</span>
					<span class="badge bg-secondary">Facebook</span>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Where It Appears</h6>
				<ul>
					<li><strong>Header:</strong> Logo in navigation bar</li>
					<li><strong>Footer:</strong> Company name and social links</li>
					<li><strong>About pages:</strong> Company information</li>
					<li><strong>Contact forms:</strong> Default company details</li>
				</ul>
				<h6>Customization Tips</h6>
				<ul>
					<li>Use high-quality logos that scale well</li>
					<li>Ensure logos work on different backgrounds</li>
					<li>Keep social media links up to date</li>
					<li>Use consistent branding across all platforms</li>
				</ul>
			{/snippet}
		</ShowcaseSection>

		<!-- Navigation Configuration -->
		<div class="mt-5">
			<h3 class="mb-4">Navigation Configuration</h3>
			<CleanCodeShowcase
				titleText="Navigation Setup"
				svelteCodeContent={`navigation: {
  main: [
    {
      label: 'Home',
      href: '/',
      icon: '🏠'
    },
    {
      label: 'Documentation',
      href: '/docs',
      icon: '📚',
      children: [
        { label: 'Getting Started', href: '/docs/getting-started' },
        { label: 'API Reference', href: '/docs/api' },
        {
          label: 'Components',
          href: '/docs/components/layout',
          children: [
            { label: 'Layout', href: '/docs/components/layout' },
            { label: 'Forms', href: '/docs/components/forms' }
          ]
        }
      ]
    },
    {
      label: 'Examples',
      href: '/examples',
      icon: '💡'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/username/repo',
      icon: '⭐'
    }
  ],
  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/username',
      icon: '⭐'
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/username',
      icon: '🐦'
    }
  ]
}`}
				typescriptCodeContent={`// Enhanced Navigation type definitions (v2.0)
interface NavigationItem {
  label: string;                    // Display text
  href: string;                     // URL or path
  icon?: string;                    // Emoji or icon
  external?: boolean;               // External link flag
  target?: '_self' | '_blank' | '_parent' | '_top' | string;
  children?: NavigationItem[];      // Nested items (max 2 levels)
  badge?: string;                   // Badge text
  disabled?: boolean;               // Disabled state
  tooltip?: string;                 // Hover tooltip text
}

interface SocialLink {
  label: string;          // Platform name
  href: string;           // Social media URL
  icon?: string;          // Platform icon
  target?: string;        // Link target
}

interface NavigationConfig {
  main?: NavigationItem[];     // Main navigation menu
  social?: SocialLink[];       // Social media links
}

// Example with enhanced features
const navigation: NavigationConfig = {
  main: [
    {
      label: 'Documentation',
      href: '/docs',
      icon: '📚',
      tooltip: 'Complete documentation',
      children: [
        {
          label: 'API Reference',
          href: '/docs/api',
          badge: 'v2.0',
          tooltip: 'Latest API documentation',
          children: [
            {
              label: 'Authentication',
              href: '/docs/api/auth',
              tooltip: 'Auth endpoints'
            },
            {
              label: 'Users',
              href: '/docs/api/users',
              badge: 'New',
              tooltip: 'User management'
            }
          ]
        }
      ]
    },
    {
      label: 'GitHub',
      href: 'https://github.com/keenmate/svelte-docs',
      icon: '⭐',
      external: true,
      target: '_blank',
      tooltip: 'View source code'
    },
    {
      label: 'Coming Soon',
      href: '/beta',
      icon: '🚧',
      disabled: true,
      tooltip: 'Feature in development'
    }
  ]
};`}
				cssCodeContent={`/* Custom navigation styling */
.navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.2s ease;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
}

.navbar-nav .nav-link:hover {
  color: var(--docs-primary);
  background-color: rgba(var(--docs-primary-rgb), 0.1);
  transform: translateY(-1px);
}

/* Sidebar navigation */
.sidebar .nav-link {
  color: rgba(255, 255, 255, 0.9);
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
}

.sidebar .nav-link.active {
  background: linear-gradient(135deg, var(--docs-primary) 0%, var(--docs-primary-dark) 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
}

/* Mobile navigation */
@media (max-width: 991.98px) {
  .navbar-collapse {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(var(--docs-secondary-rgb), 0.95);
    border-radius: 0.5rem;
  }
}`}
			/>
		</div>

		<!-- Features Configuration -->
		<ShowcaseSection
			titleText="Features Configuration"
			subtitleText="Toggle and customize library features">

			{#snippet demoContent()}
				<CleanCodeBlock
					codeContent={`features: {
  search: true,              // Enable search functionality
  breadcrumbs: true,         // Show breadcrumb navigation
  tableOfContents: true,     // Generate table of contents
  darkMode: false,           // Enable dark mode toggle
  printMode: true,           // Optimize for printing
  analytics: true            // Include analytics tracking
}`}
					languageType="javascript"
					titleText="Features configuration"
				/>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Feature Status</h6>
				<div class="list-group">
					<div class="list-group-item d-flex justify-content-between align-items-center">
						Search
						<span class="badge bg-success">Available</span>
					</div>
					<div class="list-group-item d-flex justify-content-between align-items-center">
						Breadcrumbs
						<span class="badge bg-success">Available</span>
					</div>
					<div class="list-group-item d-flex justify-content-between align-items-center">
						Table of Contents
						<span class="badge bg-success">Available</span>
					</div>
					<div class="list-group-item d-flex justify-content-between align-items-center">
						Dark Mode
						<span class="badge bg-warning">Planned</span>
					</div>
					<div class="list-group-item d-flex justify-content-between align-items-center">
						Print Mode
						<span class="badge bg-warning">Planned</span>
					</div>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Feature Descriptions</h6>
				<ul>
					<li><strong>Search:</strong> Site-wide content search with highlighting</li>
					<li><strong>Breadcrumbs:</strong> Automatic breadcrumb navigation</li>
					<li><strong>Table of Contents:</strong> Auto-generated from headings</li>
					<li><strong>Dark Mode:</strong> Toggle between light/dark themes</li>
					<li><strong>Print Mode:</strong> Optimized styling for printing</li>
				</ul>
				<h6>Performance Impact</h6>
				<p class="text-muted">Each feature adds minimal overhead. You can safely enable all features without significant performance impact.</p>
			{/snippet}
		</ShowcaseSection>

		<!-- Complete Example -->
		<div class="mt-5">
			<h3 class="mb-4">Complete Configuration Example</h3>
			<CleanCodeShowcase
				titleText="Full Configuration"
				svelteCodeContent={`<script lang="ts">
  import { ConfigProvider } from '@keenmate/svelte-docs';
  import type { PartialDocsConfig } from '@keenmate/svelte-docs';

  const config: PartialDocsConfig = {
    site: {
      title: 'My API Documentation',
      description: 'Comprehensive API documentation for developers',
      keywords: ['api', 'documentation', 'rest', 'graphql', 'sdk'],
      author: 'Development Team',
      url: 'https://docs.myapi.com',
      language: 'en',
      ogImage: '/images/og-documentation.png',
      twitterHandle: '@myapi'
    },
    company: {
      name: 'My Company',
      website: 'https://mycompany.com',
      logo: '/images/logo.svg',
      logoAlt: 'My Company Logo',
      social: {
        github: 'https://github.com/mycompany',
        twitter: 'https://twitter.com/mycompany',
        linkedin: 'https://linkedin.com/company/mycompany'
      }
    },
    navigation: {
      main: [
        { label: 'Home', href: '/', icon: '🏠' },
        {
          label: 'Documentation',
          href: '/docs',
          icon: '📚',
          children: [
            { label: 'Getting Started', href: '/docs/getting-started' },
            { label: 'Authentication', href: '/docs/auth' },
            {
              label: 'API Reference',
              href: '/docs/api',
              children: [
                { label: 'Users', href: '/docs/api/users' },
                { label: 'Products', href: '/docs/api/products' },
                { label: 'Orders', href: '/docs/api/orders' }
              ]
            },
            { label: 'SDKs', href: '/docs/sdks' }
          ]
        },
        {
          label: 'Examples',
          href: '/examples',
          icon: '💡',
          children: [
            { label: 'Code Samples', href: '/examples/code' },
            { label: 'Tutorials', href: '/examples/tutorials' },
            { label: 'Use Cases', href: '/examples/use-cases' }
          ]
        },
        { label: 'Support', href: '/support', icon: '💬' },
        { label: 'GitHub', href: 'https://github.com/mycompany/api', icon: '⭐' }
      ],
      social: [
        { label: 'GitHub', href: 'https://github.com/mycompany', icon: '⭐' },
        { label: 'Discord', href: 'https://discord.gg/mycompany', icon: '💬' },
        { label: 'Twitter', href: 'https://twitter.com/mycompany', icon: '🐦' }
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
				typescriptCodeContent={`// types/docs-config.ts
export interface CustomDocsConfig extends PartialDocsConfig {
  // Extend with custom properties
  analytics?: {
    googleAnalyticsId?: string;
    plausibleDomain?: string;
    matomoUrl?: string;
  };
  theme?: {
    primaryColor?: string;
    accentColor?: string;
    darkMode?: boolean;
  };
  integrations?: {
    stripe?: boolean;
    auth0?: boolean;
    firebase?: boolean;
  };
}

// config/docs.ts
import type { CustomDocsConfig } from '../types/docs-config';

export const docsConfig: CustomDocsConfig = {
  site: {
    title: process.env.SITE_TITLE || 'My Documentation',
    description: process.env.SITE_DESCRIPTION || 'Default description',
    url: process.env.SITE_URL || 'http://localhost:3000'
  },
  analytics: {
    googleAnalyticsId: process.env.GA_ID
  },
  theme: {
    primaryColor: '#00A7E1',
    darkMode: true
  }
};`}
			/>
		</div>

		<!-- Best Practices -->
		<div class="mt-5 p-4 bg-light rounded">
			<h3>Configuration Best Practices</h3>
			<div class="row g-4 mt-2">
				<div class="col-md-6">
					<h5>🌐 Site Configuration</h5>
					<ul>
						<li>Use environment variables for URLs</li>
						<li>Keep titles concise and descriptive</li>
						<li>Optimize meta descriptions for search</li>
						<li>Include relevant keywords naturally</li>
						<li>Test social media previews</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>🧭 Navigation</h5>
					<ul>
						<li>Keep menu structure shallow (max 2-3 levels)</li>
						<li>Use clear, action-oriented labels</li>
						<li>Group related items logically</li>
						<li>Include meaningful icons</li>
						<li>Test on mobile devices</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>🏢 Branding</h5>
					<ul>
						<li>Use high-quality, scalable logos</li>
						<li>Ensure brand consistency</li>
						<li>Optimize images for web</li>
						<li>Include proper alt text</li>
						<li>Test across different themes</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>⚙️ Features</h5>
					<ul>
						<li>Start with essential features only</li>
						<li>Enable features based on user needs</li>
						<li>Monitor performance impact</li>
						<li>Test feature combinations</li>
						<li>Keep configuration manageable</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</DocLayout>