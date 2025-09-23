<script lang="ts">
	import { DocLayout, FeatureCard } from '@keenmate/svelte-docs';
</script>

<DocLayout
	titleText="API Reference"
	descriptionText="Complete API documentation for all @keenmate/svelte-docs components">

	<div class="py-4">
		<div class="mb-5">
			<h2 class="mb-3">📚 Component API Reference</h2>
			<p class="lead">
				Complete reference documentation for all components in the @keenmate/svelte-docs library.
			</p>
		</div>

		<div class="row g-4">
			<!-- Layout Components -->
			<div class="col-12">
				<h3 class="mb-4">🏗️ Layout Components</h3>
			</div>
			<div class="col-md-6">
				<a href="/api/doclayout" class="text-decoration-none">
					<FeatureCard
						iconEmoji="🏗️"
						titleText="DocLayout"
						descriptionText="Main page layout component with navigation, breadcrumbs, and SEO features"
						variantType="primary"
						badgeText="Core"
						badgeVariantType="primary"
					/>
				</a>
			</div>
			<div class="col-md-6">
				<a href="/api/configprovider" class="text-decoration-none">
					<FeatureCard
						iconEmoji="⚙️"
						titleText="ConfigProvider"
						descriptionText="Global configuration provider with SSR support and theme management"
						variantType="success"
						badgeText="Required"
						badgeVariantType="success"
					/>
				</a>
			</div>

			<!-- Content Components -->
			<div class="col-12 mt-5">
				<h3 class="mb-4">📝 Content Components</h3>
			</div>
			<div class="col-md-6">
				<a href="/api/showcasesection" class="text-decoration-none">
					<FeatureCard
						iconEmoji="📋"
						titleText="ShowcaseSection"
						descriptionText="Three-column layout for demos, controls, and documentation"
						variantType="info"
						badgeText="Popular"
						badgeVariantType="info"
					/>
				</a>
			</div>
			<div class="col-md-6">
				<a href="/components/content#code-showcase" class="text-decoration-none">
					<FeatureCard
						iconEmoji="💻"
						titleText="CodeShowcase"
						descriptionText="Multi-tab code viewer with syntax highlighting and copy functionality"
						variantType="warning"
						badgeText="Utility"
						badgeVariantType="warning"
					/>
				</a>
			</div>
			<div class="col-md-6">
				<a href="/components/content#code-block" class="text-decoration-none">
					<FeatureCard
						iconEmoji="📄"
						titleText="CodeBlock"
						descriptionText="Simple code display with syntax highlighting and copy button"
						variantType="secondary"
						badgeText="Utility"
						badgeVariantType="secondary"
					/>
				</a>
			</div>
			<div class="col-md-6">
				<a href="/components/content#feature-card" class="text-decoration-none">
					<FeatureCard
						iconEmoji="🎯"
						titleText="FeatureCard"
						descriptionText="Feature cards with icons, badges, and optional links"
						variantType="light"
						badgeText="UI"
						badgeVariantType="dark"
					/>
				</a>
			</div>
		</div>

		<!-- Quick Reference -->
		<div class="mt-5 p-4 bg-light rounded">
			<h3 class="mb-3">🚀 Quick Reference</h3>
			<div class="row g-4">
				<div class="col-md-6">
					<h5>Getting Started</h5>
					<ul>
						<li><a href="/getting-started">Installation Guide</a></li>
						<li><a href="/getting-started#new-in-v100-rc02">New in v1.0.0-rc02</a></li>
						<li><a href="/components/layout#ssr-configuration">SSR Configuration</a></li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>Common Patterns</h5>
					<ul>
						<li><a href="/examples">Usage Examples</a></li>
						<li><a href="/configuration">Configuration Guide</a></li>
						<li><a href="/components/layout#best-practices">Best Practices</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</DocLayout>