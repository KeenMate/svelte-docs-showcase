<script lang="ts">
	import { DocLayout, ShowcaseSection, FeatureCard } from '@keenmate/svelte-docs';
	import { CleanCodeBlock } from '$lib/components';
</script>

<DocLayout
	titleText="Svelte Docs Showcase"
	descriptionText="Professional component library for building beautiful documentation sites">

	<!-- Hero Section -->
	<div class="py-5">
		<div class="text-center mb-5">
			<h1 class="display-4 fw-bold mb-4">
				<span class="text-primary">@keenmate/svelte-docs</span>
			</h1>
			<p class="lead mb-4">
				A professional component library for building beautiful documentation and showcase sites with SvelteKit
			</p>
			<div class="d-flex gap-3 justify-content-center flex-wrap">
				<a href="/getting-started" class="btn btn-primary btn-lg">
					🚀 Get Started
				</a>
				<a href="/components/layout" class="btn btn-outline-primary btn-lg">
					📦 Browse Components
				</a>
				<a href="https://github.com/keenmate/svelte-docs" target="_blank" class="btn btn-outline-dark btn-lg">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" class="me-2">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
					</svg>
					GitHub
				</a>
			</div>
		</div>

		<!-- Key Features -->
		<div class="row g-4 mb-5">
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🎨"
					titleText="Beautiful Components"
					descriptionText="Pre-styled components with Bootstrap integration for professional documentation"
					variantType="primary"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🌈"
					titleText="Syntax Highlighting"
					descriptionText="Powered by highlight.js with support for 50+ programming languages"
					variantType="success"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="📱"
					titleText="Fully Responsive"
					descriptionText="Mobile-first design that works perfectly on all devices and screen sizes"
					variantType="info"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🚀"
					titleText="Svelte 5 Ready"
					descriptionText="Built with the latest Svelte 5 features including runes and snippets"
					variantType="warning"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🎯"
					titleText="TypeScript Support"
					descriptionText="Full TypeScript support with complete type definitions included"
					variantType="danger"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🔧"
					titleText="Highly Configurable"
					descriptionText="Extensive configuration system for complete customization"
					variantType="secondary"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🔗"
					titleText="New MenuItem Component"
					descriptionText="Flexible menu items with tooltips, badges, and security features"
					variantType="primary"
					badgeText="NEW"
					badgeVariantType="success"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<FeatureCard
					iconEmoji="🛡️"
					titleText="Enhanced Security"
					descriptionText="Automatic security attributes for external links and target control"
					variantType="info"
					badgeText="Enhanced"
					badgeVariantType="info"
				/>
			</div>
		</div>

		<!-- Quick Install -->
		<ShowcaseSection
			titleText="Quick Installation"
			subtitleText="Get started in seconds"
			demoColumnTitle="Package Manager"
			controlsColumnTitle="Import"
			descriptionColumnTitle="Usage">

			{#snippet demoContent()}
				<CleanCodeBlock
					codeContent="npm install @keenmate/svelte-docs"
					languageType="bash"
					titleText="npm"
				/>
				<CleanCodeBlock
					codeContent="pnpm add @keenmate/svelte-docs"
					languageType="bash"
					titleText="pnpm"
				/>
				<CleanCodeBlock
					codeContent="yarn add @keenmate/svelte-docs"
					languageType="bash"
					titleText="yarn"
				/>
			{/snippet}

			{#snippet controlsContent()}
				<CleanCodeBlock
					codeContent={`import {
  ConfigProvider,
  DocLayout,
  ShowcaseSection,
  CodeShowcase,
  CodeBlock,
  FeatureCard
} from '@keenmate/svelte-docs';`}
					languageType="javascript"
					titleText="Import components"
				/>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose">
					<h4>Simple to Use</h4>
					<p>
						Install the package using your preferred package manager, then import and use the components in your SvelteKit application.
					</p>
					<h4>Zero Configuration</h4>
					<p>
						Works out of the box with sensible defaults, but fully customizable when you need it.
					</p>
					<h4>Bootstrap Included</h4>
					<p>
						Comes with Bootstrap 5.3.2 CSS included - no additional styling dependencies needed.
					</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Example Usage -->
		<div class="mt-5">
			<h2 class="mb-4">Example Usage</h2>
			<CleanCodeBlock
				codeContent={`<script lang="ts">
  import { ConfigProvider, DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';

  const config = {
    site: {
      title: 'My Documentation',
      description: 'Documentation for my awesome project'
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
  <DocLayout titleText="Welcome">
    <ShowcaseSection titleText="My Component">
      {#snippet demoContent()}
        <p>Your demo here</p>
      {/snippet}
    </ShowcaseSection>
  </DocLayout>
</ConfigProvider>`}
				languageType="svelte"
				titleText="Basic Setup"
			/>
		</div>

		<!-- Stats -->
		<div class="row text-center mt-5 pt-5 border-top">
			<div class="col-md-3">
				<h3 class="display-6 fw-bold text-primary">15+</h3>
				<p class="text-muted">Components</p>
			</div>
			<div class="col-md-3">
				<h3 class="display-6 fw-bold text-primary">50+</h3>
				<p class="text-muted">Languages Supported</p>
			</div>
			<div class="col-md-3">
				<h3 class="display-6 fw-bold text-primary">100%</h3>
				<p class="text-muted">TypeScript</p>
			</div>
			<div class="col-md-3">
				<h3 class="display-6 fw-bold text-primary">MIT</h3>
				<p class="text-muted">License</p>
			</div>
		</div>
	</div>
</DocLayout>