<script lang="ts">
	import { DocLayout, CodeBlock } from '@keenmate/svelte-docs';
	import { CleanCodeBlock } from '$lib/components';
</script>

<DocLayout
	titleText="ConfigProvider API Reference"
	descriptionText="Complete API documentation for the ConfigProvider component">

	<div class="py-4">
		<!-- Component Overview -->
		<div class="mb-5">
			<h2 class="mb-3">📚 ConfigProvider Component</h2>
			<p class="lead">
				Global configuration provider that supplies site metadata, navigation structure, and theme settings to all child components.
			</p>

			<div class="row g-4 mb-4">
				<div class="col-md-6">
					<CodeBlock
						codeContent={`import { ConfigProvider } from '@keenmate/svelte-docs';`}
						languageType="javascript"
						titleText="Import"
					/>
				</div>
				<div class="col-md-6">
					<CodeBlock
						codeContent={`<ConfigProvider configData={config}>
  <slot />
</ConfigProvider>`}
						languageType="svelte"
						titleText="Basic Usage"
					/>
				</div>
			</div>
		</div>

		<!-- Properties -->
		<div class="mb-5">
			<h3 class="mb-4">🔧 Properties</h3>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th style="width: 18%">Property</th>
							<th style="width: 22%">Type</th>
							<th style="width: 12%">Default</th>
							<th style="width: 35%">Description</th>
							<th style="width: 13%">Version</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>configData</code> *</td>
							<td><code>PartialDocsConfig</code></td>
							<td><code>required</code></td>
							<td>Configuration object with site, company, navigation, and feature settings</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>children</code></td>
							<td><code>Snippet</code></td>
							<td><code>required</code></td>
							<td>Child components that will receive configuration context</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="text-muted">
				<small>* Required property</small>
			</p>
		</div>

		<!-- Configuration Schema -->
		<div class="mb-5">
			<h3 class="mb-4">📋 PartialDocsConfig Schema</h3>

			<!-- Site Configuration -->
			<h5>Site Configuration</h5>
			<div class="table-responsive mb-4">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th style="width: 20%">Property</th>
							<th style="width: 15%">Type</th>
							<th style="width: 15%">Default</th>
							<th style="width: 35%">Description</th>
							<th style="width: 15%">Version</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>site.title</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Main site title used in head tags and navigation</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>site.description</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Site description for meta tags and SEO</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>site.keywords</code></td>
							<td><code>string[]</code></td>
							<td><code>[]</code></td>
							<td>Keywords for meta tags</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>site.author</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Author meta tag</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>site.url</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Base URL for canonical links and Open Graph</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>site.language</code></td>
							<td><code>string</code></td>
							<td><code>'en'</code></td>
							<td>HTML language attribute</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>site.ogImage</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Default Open Graph image URL</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>site.twitterHandle</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Twitter handle for Twitter Card meta tags</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- Company Configuration -->
			<h5>Company Configuration</h5>
			<div class="table-responsive mb-4">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th style="width: 20%">Property</th>
							<th style="width: 15%">Type</th>
							<th style="width: 15%">Default</th>
							<th style="width: 35%">Description</th>
							<th style="width: 15%">Version</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>company.name</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Company or organization name</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>company.website</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Company website URL</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>company.logo</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Company logo image URL</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>company.logoAlt</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Alt text for company logo</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>company.social</code></td>
							<td><code>SocialLinks</code></td>
							<td><code>{'{}'}</code></td>
							<td>Social media links object</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- Navigation Configuration -->
			<h5>Navigation Configuration</h5>
			<div class="table-responsive mb-4">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th style="width: 20%">Property</th>
							<th style="width: 15%">Type</th>
							<th style="width: 15%">Default</th>
							<th style="width: 35%">Description</th>
							<th style="width: 15%">Version</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>navigation.main</code></td>
							<td><code>NavigationItem[]</code></td>
							<td><code>[]</code></td>
							<td>Main navigation menu items</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>navigation.social</code></td>
							<td><code>SocialLink[]</code></td>
							<td><code>[]</code></td>
							<td>Social media navigation links</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- Features Configuration -->
			<h5>Features Configuration</h5>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th style="width: 20%">Property</th>
							<th style="width: 15%">Type</th>
							<th style="width: 15%">Default</th>
							<th style="width: 35%">Description</th>
							<th style="width: 15%">Version</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>features.search</code></td>
							<td><code>boolean</code></td>
							<td><code>true</code></td>
							<td>Enable search functionality</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>features.breadcrumbs</code></td>
							<td><code>boolean</code></td>
							<td><code>true</code></td>
							<td>Show breadcrumb navigation</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>features.tableOfContents</code></td>
							<td><code>boolean</code></td>
							<td><code>true</code></td>
							<td>Generate table of contents</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- SSR Configuration (New in v1.0.0-rc02) -->
		<div class="mb-5">
			<h3 class="mb-4">🆕 SSR Configuration (v1.0.0-rc02+)</h3>
			<div class="alert alert-success">
				<strong>Recommended Approach:</strong> Use server-side configuration for better performance and FOUC elimination.
			</div>

			<div class="row g-4">
				<div class="col-lg-6">
					<h5>Server-Side Setup</h5>
					<CleanCodeBlock
						codeContent={`// src/routes/+layout.server.ts
import type { PartialDocsConfig } from '@keenmate/svelte-docs';

export async function load() {
  const config: PartialDocsConfig = {
    site: {
      title: 'My Documentation',
      description: 'Comprehensive docs',
      url: 'https://docs.example.com'
    },
    company: {
      name: 'My Company',
      social: {
        github: 'https://github.com/mycompany'
      }
    },
    navigation: {
      main: [
        { label: 'Home', href: '/', icon: '🏠' },
        { label: 'Docs', href: '/docs', icon: '📚' }
      ]
    }
  };

  return { config };
}`}
						languageType="typescript"
					/>
				</div>
				<div class="col-lg-6">
					<h5>Client-Side Usage</h5>
					<CleanCodeBlock
						codeContent={`<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { ConfigProvider } from '@keenmate/svelte-docs';
  import '../app.scss';

  export let data;
</script>

<ConfigProvider configData={data.config}>
  <slot />
</ConfigProvider>`}
						languageType="svelte"
					/>
				</div>
			</div>

			<div class="alert alert-info mt-3">
				<h6>SSR Benefits</h6>
				<ul class="mb-0">
					<li>✅ Eliminates FOUC (Flash of Unstyled Content)</li>
					<li>✅ Better SEO with server-rendered meta tags</li>
					<li>✅ Improved performance with server-side config loading</li>
					<li>✅ Enhanced user experience</li>
				</ul>
			</div>
		</div>

		<!-- Type Definitions -->
		<div class="mb-5">
			<h3 class="mb-4">📋 Type Definitions</h3>

			<h5>NavigationItem Interface</h5>
			<CleanCodeBlock
				codeContent={`interface NavigationItem {
  label: string;                    // Display text
  href: string;                     // URL or path
  icon?: string;                    // Emoji or icon
  external?: boolean;               // External link flag
  target?: '_self' | '_blank' | '_parent' | '_top' | string;
  children?: NavigationItem[];      // Nested items (max 2-3 levels)
  badge?: string;                   // Badge text
  disabled?: boolean;               // Disabled state
  tooltip?: string;                 // Hover tooltip text
}`}
				languageType="typescript"
			/>

			<h5>SocialLinks Interface</h5>
			<CleanCodeBlock
				codeContent={`interface SocialLinks {
  github?: string;      // GitHub profile/organization URL
  twitter?: string;     // Twitter profile URL
  linkedin?: string;    // LinkedIn profile/company URL
  facebook?: string;    // Facebook page URL
  discord?: string;     // Discord invite URL
  youtube?: string;     // YouTube channel URL
  instagram?: string;   // Instagram profile URL
  [key: string]: string | undefined;  // Custom social platforms
}`}
				languageType="typescript"
			/>

			<h5>Complete PartialDocsConfig Interface</h5>
			<CleanCodeBlock
				codeContent={`interface PartialDocsConfig {
  site?: {
    title?: string;
    description?: string;
    keywords?: string[];
    author?: string;
    url?: string;
    language?: string;
    ogImage?: string;
    twitterHandle?: string;
  };
  company?: {
    name?: string;
    website?: string;
    logo?: string;
    logoAlt?: string;
    social?: SocialLinks;
  };
  navigation?: {
    main?: NavigationItem[];
    social?: SocialLink[];
  };
  features?: {
    search?: boolean;
    breadcrumbs?: boolean;
    tableOfContents?: boolean;
  };
}`}
				languageType="typescript"
			/>
		</div>

		<!-- Usage Examples -->
		<div class="mb-5">
			<h3 class="mb-4">💡 Usage Examples</h3>

			<div class="row g-4">
				<div class="col-lg-6">
					<h5>Minimal Configuration</h5>
					<CleanCodeBlock
						codeContent={`<script lang="ts">
  import { ConfigProvider } from '@keenmate/svelte-docs';

  const config = {
    site: {
      title: 'My Docs'
    }
  };
</script>

<ConfigProvider configData={config}>
  <slot />
</ConfigProvider>`}
						languageType="svelte"
					/>
				</div>

				<div class="col-lg-6">
					<h5>Complete Configuration</h5>
					<CleanCodeBlock
						codeContent={`const config: PartialDocsConfig = {
  site: {
    title: 'My Documentation',
    description: 'Complete guide to our API',
    keywords: ['api', 'docs', 'guide'],
    author: 'Development Team',
    url: 'https://docs.example.com',
    language: 'en',
    ogImage: '/og-image.png',
    twitterHandle: '@mycompany'
  },
  company: {
    name: 'My Company',
    website: 'https://example.com',
    logo: '/logo.svg',
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
          { label: 'API Reference', href: '/docs/api' }
        ]
      }
    ]
  },
  features: {
    search: true,
    breadcrumbs: true,
    tableOfContents: true
  }
};`}
						languageType="typescript"
					/>
				</div>

				<div class="col-lg-6">
					<h5>Dynamic Configuration</h5>
					<CleanCodeBlock
						codeContent={`<script lang="ts">
  import { ConfigProvider } from '@keenmate/svelte-docs';
  import { page } from '$app/stores';

  // Dynamic configuration based on environment
  $: config = {
    site: {
      title: $page.url.hostname === 'localhost'
        ? 'My Docs (Dev)'
        : 'My Documentation',
      url: $page.url.origin
    },
    navigation: {
      main: getNavigationForUser(currentUser)
    }
  };

  function getNavigationForUser(user) {
    const baseNav = [
      { label: 'Home', href: '/' }
    ];

    if (user?.isAdmin) {
      baseNav.push({ label: 'Admin', href: '/admin' });
    }

    return baseNav;
  }
</script>

<ConfigProvider configData={config}>
  <slot />
</ConfigProvider>`}
						languageType="svelte"
					/>
				</div>

				<div class="col-lg-6">
					<h5>Environment-Based Config</h5>
					<CleanCodeBlock
						codeContent={`// config/docs.ts
import type { PartialDocsConfig } from '@keenmate/svelte-docs';

const isDev = process.env.NODE_ENV === 'development';

export const docsConfig: PartialDocsConfig = {
  site: {
    title: isDev ? 'Docs (Dev)' : 'Documentation',
    description: process.env.SITE_DESCRIPTION || 'Default description',
    url: process.env.SITE_URL || 'http://localhost:5173',
    ogImage: '/og-image.png'
  },
  company: {
    name: process.env.COMPANY_NAME || 'My Company',
    social: {
      github: process.env.GITHUB_URL
    }
  },
  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'Docs', href: '/docs' },
      ...(isDev ? [{ label: 'Debug', href: '/debug' }] : [])
    ]
  }
};`}
						languageType="typescript"
					/>
				</div>
			</div>
		</div>

		<!-- Context Access -->
		<div class="mb-5">
			<h3 class="mb-4">🔍 Accessing Configuration in Components</h3>
			<p>Child components can access the configuration context:</p>

			<CleanCodeBlock
				codeContent={`<script lang="ts">
  import { getContext } from 'svelte';
  import type { PartialDocsConfig } from '@keenmate/svelte-docs';

  // Access the configuration context
  const config = getContext<PartialDocsConfig>('docs-config');

  // Use configuration values
  $: siteName = config?.site?.title || 'Documentation';
  $: companyName = config?.company?.name || '';
  $: navigation = config?.navigation?.main || [];
</script>

<header>
  <h1>{siteName}</h1>
  {#if companyName}
    <p>by {companyName}</p>
  {/if}
</header>`}
				languageType="svelte"
			/>
		</div>

		<!-- Best Practices -->
		<div class="mb-5">
			<h3 class="mb-4">✅ Best Practices</h3>
			<div class="row g-4">
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h6 class="mb-0">Configuration Structure</h6>
						</div>
						<div class="card-body">
							<ul class="list-unstyled mb-0">
								<li>✅ Use SSR configuration for production</li>
								<li>✅ Keep navigation depth ≤ 3 levels</li>
								<li>✅ Provide fallback values</li>
								<li>✅ Use environment variables for URLs</li>
								<li>✅ Validate configuration in development</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h6 class="mb-0">SEO Optimization</h6>
						</div>
						<div class="card-body">
							<ul class="list-unstyled mb-0">
								<li>🎯 Always set site.title and site.description</li>
								<li>🎯 Include relevant keywords</li>
								<li>🎯 Provide absolute URLs</li>
								<li>🎯 Set appropriate language</li>
								<li>🎯 Include Open Graph images</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</DocLayout>