<script lang="ts">
	import { DocLayout, ShowcaseSection, FeatureCard } from '@keenmate/svelte-docs';
	import { CleanCodeBlock, CleanCodeShowcase } from '$lib/components';
</script>

<DocLayout
	titleText="Layout Components"
	descriptionText="Essential components for structuring your documentation layout">

	<div class="py-4">

		<!-- Overview -->
		<div class="row g-4 mb-5">
			<div class="col-md-6">
				<a href="#doc-layout" class="text-decoration-none">
					<FeatureCard
						iconEmoji="🏗️"
						titleText="DocLayout"
						descriptionText="Main page layout with navigation sidebar, breadcrumbs, and content area"
						variantType="primary"
						badgeText="Core"
						badgeVariantType="primary"
					/>
				</a>
			</div>
			<div class="col-md-6">
				<a href="#config-provider" class="text-decoration-none">
					<FeatureCard
						iconEmoji="⚙️"
						titleText="ConfigProvider"
						descriptionText="Global configuration provider for the entire documentation site"
						variantType="success"
						badgeText="Required"
						badgeVariantType="success"
					/>
				</a>
			</div>
		</div>

		<!-- DocLayout Component -->
		<ShowcaseSection
			id="doc-layout"
			titleText="DocLayout"
			subtitleText="The main layout component for documentation pages">

			{#snippet demoContent()}
				<h4>Basic Usage</h4>
				<p class="text-muted">This page itself uses DocLayout!</p>
				<div class="border rounded p-3 bg-light">
					<h5>DocLayout Features:</h5>
					<ul class="mb-0">
						<li>🧭 Navigation sidebar</li>
						<li>📋 Breadcrumb navigation</li>
						<li>📄 Content area with proper spacing</li>
						<li>📱 Responsive design</li>
						<li>🎨 SEO-optimized head tags</li>
					</ul>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h4>Props</h4>
				<div class="table-responsive">
					<table class="table table-sm">
						<thead>
							<tr>
								<th>Prop</th>
								<th>Type</th>
								<th>Default</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>titleText</code></td>
								<td>string?</td>
								<td>undefined</td>
							</tr>
							<tr>
								<td><code>descriptionText</code></td>
								<td>string?</td>
								<td>undefined</td>
							</tr>
							<tr>
								<td><code>isNavigationVisible</code></td>
								<td>boolean?</td>
								<td>true</td>
							</tr>
							<tr>
								<td><code>areBreadcrumbsVisible</code></td>
								<td>boolean?</td>
								<td>true</td>
							</tr>
						</tbody>
					</table>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<h4>Features</h4>
				<ul>
					<li><strong>Responsive Sidebar:</strong> Collapsible navigation on mobile</li>
					<li><strong>SEO Optimized:</strong> Automatic meta tags generation</li>
					<li><strong>Breadcrumbs:</strong> Auto-generated from route structure</li>
					<li><strong>Consistent Spacing:</strong> Proper content margins and padding</li>
					<li><strong>Accessibility:</strong> Proper ARIA labels and keyboard navigation</li>
				</ul>
			{/snippet}
		</ShowcaseSection>

		<!-- DocLayout Examples -->
		<div class="mt-5">
			<h3 class="mb-4">DocLayout Examples</h3>
			<CleanCodeShowcase
				titleText="DocLayout Usage"
				svelteCodeContent={`<script>
  import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
</script>

<!-- Basic DocLayout -->
<DocLayout titleText="My Page" descriptionText="Page description">
  <div class="container py-4">
    <h2>Page Content</h2>
    <p>Your documentation content goes here.</p>
  </div>
</DocLayout>

<!-- DocLayout with hidden navigation -->
<DocLayout
  titleText="Standalone Page"
  isNavigationVisible={false}
  areBreadcrumbsVisible={false}>

  <div class="container py-4">
    <h1>Standalone Content</h1>
    <p>This page has no sidebar or breadcrumbs.</p>
  </div>
</DocLayout>

<!-- DocLayout with sections -->
<DocLayout titleText="Component Documentation">
  <ShowcaseSection titleText="Example Section">
    {#snippet demoContent()}
      <h4>Demo Content</h4>
      <p>Your demo here</p>
    {/snippet}

    {#snippet descriptionContent()}
      <p>Description of the component</p>
    {/snippet}
  </ShowcaseSection>
</DocLayout>`}
				typescriptCodeContent={`// Type definitions for DocLayout
interface DocLayoutProps {
  titleText?: string;
  descriptionText?: string;
  isNavigationVisible?: boolean;
  areBreadcrumbsVisible?: boolean;
  children?: Snippet;
}

// Example with TypeScript
import type { DocLayoutProps } from '@keenmate/svelte-docs';

const layoutProps: Partial<DocLayoutProps> = {
  titleText: 'API Documentation',
  descriptionText: 'Complete API reference for developers',
  isNavigationVisible: true,
  areBreadcrumbsVisible: true
};`}
			/>
		</div>

		<!-- ConfigProvider Component -->
		<ShowcaseSection
			id="config-provider"
			titleText="ConfigProvider"
			subtitleText="Global configuration provider for your documentation site">

			{#snippet demoContent()}
				<h4>What ConfigProvider Does</h4>
				<div class="alert alert-info">
					<strong>ConfigProvider</strong> wraps your entire app and provides:
				</div>
				<ul>
					<li>🌐 Site metadata (title, description, etc.)</li>
					<li>🏢 Company information</li>
					<li>🧭 Navigation structure</li>
					<li>⚙️ Feature toggles</li>
					<li>🎨 Theme configuration</li>
				</ul>
			{/snippet}

			{#snippet controlsContent()}
				<h4>Required Setup</h4>
				<p class="text-muted">Place in your root layout:</p>
				<CleanCodeBlock
					codeContent={`// src/routes/+layout.svelte
<script lang="ts">
  import { ConfigProvider } from '@keenmate/svelte-docs';
  import type { PartialDocsConfig } from '@keenmate/svelte-docs';

  const config: PartialDocsConfig = {
    site: { title: 'My Docs' },
    navigation: { main: [...] }
  };
</script>

<ConfigProvider configData={config}>
  <slot />
</ConfigProvider>`}
					languageType="svelte"
				/>
			{/snippet}

			{#snippet descriptionContent()}
				<h4>Configuration Options</h4>
				<ul>
					<li><strong>site:</strong> Title, description, SEO settings</li>
					<li><strong>company:</strong> Name, logo, social links</li>
					<li><strong>navigation:</strong> Main menu, social links</li>
					<li><strong>features:</strong> Search, breadcrumbs, table of contents</li>
				</ul>
				<a href="/configuration" class="btn btn-sm btn-outline-primary mt-2">
					View Full Configuration →
				</a>
			{/snippet}
		</ShowcaseSection>

		<!-- ConfigProvider Examples -->
		<div class="mt-5">
			<h3 class="mb-4">ConfigProvider Examples</h3>
			<CleanCodeShowcase
				titleText="Configuration Examples"
				svelteCodeContent={`<script lang="ts">
  import { ConfigProvider } from '@keenmate/svelte-docs';
  import type { PartialDocsConfig } from '@keenmate/svelte-docs';

  // Basic configuration
  const basicConfig: PartialDocsConfig = {
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

  // Advanced configuration with nested navigation
  const advancedConfig: PartialDocsConfig = {
    site: {
      title: 'Advanced Docs',
      description: 'Comprehensive documentation',
      keywords: ['documentation', 'api', 'guide'],
      author: 'Your Name'
    },
    company: {
      name: 'Your Company',
      website: 'https://example.com',
      social: {
        github: 'https://github.com/username',
        twitter: 'https://twitter.com/username'
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
            { label: 'API Reference', href: '/docs/api' },
            { label: 'Examples', href: '/docs/examples' }
          ]
        },
        { label: 'About', href: '/about', icon: 'ℹ️' }
      ]
    },
    features: {
      search: true,
      breadcrumbs: true,
      tableOfContents: true
    }
  };
</script>

<ConfigProvider configData={basicConfig}>
  <slot />
</ConfigProvider>`}
				typescriptCodeContent={`// Complete configuration interface
interface PartialDocsConfig {
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
    social?: {
      github?: string;
      twitter?: string;
      linkedin?: string;
      facebook?: string;
    };
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
}

interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}`}
			/>
		</div>

		<!-- Best Practices -->
		<div class="mt-5 p-4 bg-light rounded">
			<h3>Best Practices</h3>
			<div class="row g-4 mt-2">
				<div class="col-md-6">
					<h5>📱 Responsive Design</h5>
					<ul>
						<li>Test navigation on mobile devices</li>
						<li>Ensure content is readable on all screen sizes</li>
						<li>Use appropriate breakpoints for sidebars</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>🚀 Performance</h5>
					<ul>
						<li>Keep navigation menu size reasonable</li>
						<li>Use static generation for better performance</li>
						<li>Optimize images and assets</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>🎯 SEO</h5>
					<ul>
						<li>Always set titleText and descriptionText</li>
						<li>Use semantic heading structure</li>
						<li>Include relevant keywords</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>♿ Accessibility</h5>
					<ul>
						<li>Ensure proper heading hierarchy</li>
						<li>Use meaningful link texts</li>
						<li>Test with screen readers</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</DocLayout>