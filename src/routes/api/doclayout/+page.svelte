<script lang="ts">
	import { DocLayout, CodeBlock } from '@keenmate/svelte-docs';
	import { CleanCodeBlock } from '$lib/components';
</script>

<DocLayout
	titleText="DocLayout API Reference"
	descriptionText="Complete API documentation for the DocLayout component">

	<div class="py-4">
		<!-- Component Overview -->
		<div class="mb-5">
			<h2 class="mb-3">📚 DocLayout Component</h2>
			<p class="lead">
				The main layout component that provides navigation sidebar, breadcrumbs, content area, and SEO-optimized head tags.
			</p>

			<div class="row g-4 mb-4">
				<div class="col-md-6">
					<CodeBlock
						codeContent={`import { DocLayout } from '@keenmate/svelte-docs';`}
						languageType="javascript"
						titleText="Import"
					/>
				</div>
				<div class="col-md-6">
					<CodeBlock
						codeContent={`<DocLayout titleText="My Page" descriptionText="Page description">
  <div class="py-4">
    <h2>Page Content</h2>
    <p>Your content here</p>
  </div>
</DocLayout>`}
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
							<td><code>titleText</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Page title for SEO and display</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>descriptionText</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Meta description for SEO</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>isNavigationVisible</code></td>
							<td><code>boolean</code></td>
							<td><code>true</code></td>
							<td>Show/hide navigation sidebar</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>areBreadcrumbsVisible</code></td>
							<td><code>boolean</code></td>
							<td><code>true</code></td>
							<td>Show/hide breadcrumb navigation</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>children</code></td>
							<td><code>Snippet</code></td>
							<td><code>required</code></td>
							<td>Main content area</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- SEO Features -->
		<div class="mb-5">
			<h3 class="mb-4">🔍 SEO Features</h3>
			<p>DocLayout automatically generates SEO-optimized head tags based on your configuration:</p>

			<div class="row g-4">
				<div class="col-lg-6">
					<h5>Automatic Meta Tags</h5>
					<ul>
						<li>✅ Page title with site title suffix</li>
						<li>✅ Meta description</li>
						<li>✅ Open Graph tags (og:title, og:description)</li>
						<li>✅ Twitter Card meta tags</li>
						<li>✅ Canonical URL</li>
						<li>✅ Language attribute</li>
					</ul>
				</div>
				<div class="col-lg-6">
					<h5>Configuration Sources</h5>
					<CleanCodeBlock
						codeContent={`// Values taken from ConfigProvider
const config = {
  site: {
    title: 'My Site',           // Site title suffix
    description: 'Default desc', // Fallback description
    url: 'https://example.com',  // Base URL for canonical
    language: 'en',              // HTML lang attribute
    ogImage: '/og-image.png',    // Default OG image
    twitterHandle: '@username'   // Twitter site handle
  }
};`}
						languageType="typescript"
					/>
				</div>
			</div>
		</div>

		<!-- Layout Structure -->
		<div class="mb-5">
			<h3 class="mb-4">🏗️ Layout Structure</h3>
			<p>Understanding DocLayout's internal structure for customization:</p>

			<CleanCodeBlock
				codeContent={`<!-- Generated HTML structure -->
<div class="docs-layout">
  <!-- Navigation Sidebar (if isNavigationVisible) -->
  <aside class="sidebar">
    <nav><!-- Navigation items --></nav>
  </aside>

  <!-- Main Content Area -->
  <main class="main-content">
    <!-- Breadcrumbs (if areBreadcrumbsVisible) -->
    <nav class="breadcrumbs" aria-label="breadcrumb">
      <!-- Auto-generated breadcrumb trail -->
    </nav>

    <!-- Your Content -->
    <div class="content-wrapper">
      <!-- children snippet renders here -->
    </div>
  </main>
</div>`}
				languageType="html"
			/>
		</div>

		<!-- Usage Examples -->
		<div class="mb-5">
			<h3 class="mb-4">💡 Usage Examples</h3>

			<div class="row g-4">
				<div class="col-lg-6">
					<h5>Standard Documentation Page</h5>
					<CleanCodeBlock
						codeContent={`<DocLayout
  titleText="Getting Started"
  descriptionText="Learn how to install and use our library">

  <div class="py-4">
    <h2>Installation</h2>
    <pre><code>npm install @keenmate/svelte-docs</code></pre>

    <h2>Basic Usage</h2>
    <p>Import the components you need...</p>
  </div>
</DocLayout>`}
						languageType="svelte"
					/>
				</div>

				<div class="col-lg-6">
					<h5>Landing Page (No Navigation)</h5>
					<CleanCodeBlock
						codeContent={`<DocLayout
  titleText="Welcome"
  descriptionText="Welcome to our documentation"
  isNavigationVisible={false}
  areBreadcrumbsVisible={false}>

  <div class="hero-section text-center py-5">
    <h1>Welcome to Our Docs</h1>
    <p class="lead">Everything you need to get started</p>
    <a href="/getting-started" class="btn btn-primary">
      Get Started
    </a>
  </div>
</DocLayout>`}
						languageType="svelte"
					/>
				</div>

				<div class="col-lg-6">
					<h5>API Reference Page</h5>
					<CleanCodeBlock
						codeContent={`<DocLayout
  titleText="API Reference - Users"
  descriptionText="Complete API documentation for user management endpoints">

  <div class="py-4">
    <div class="api-section">
      <h2>GET /api/users</h2>
      <p>Retrieve a list of users</p>

      <h3>Parameters</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <!-- ... -->
      </table>
    </div>
  </div>
</DocLayout>`}
						languageType="svelte"
					/>
				</div>

				<div class="col-lg-6">
					<h5>Tutorial Page with Sections</h5>
					<CleanCodeBlock
						codeContent={`<DocLayout
  titleText="Tutorial: Building Your First App"
  descriptionText="Step-by-step guide to building applications">

  <div class="py-4">
    <ShowcaseSection
      titleText="Step 1: Setup"
      subtitleText="Installing dependencies and creating project structure">

      {#snippet demoContent()}
        <div class="step-demo">
          <!-- Interactive demo -->
        </div>
      {/snippet}

      {#snippet descriptionContent()}
        <h4>What we're building</h4>
        <p>In this step, we'll...</p>
      {/snippet}
    </ShowcaseSection>
  </div>
</DocLayout>`}
						languageType="svelte"
					/>
				</div>
			</div>
		</div>

		<!-- Layout Spacing (New in v1.0.0-rc02) -->
		<div class="mb-5">
			<h3 class="mb-4">📏 Layout Spacing (v1.0.0-rc02+)</h3>
			<div class="alert alert-success">
				<strong>🆕 Improved in v1.0.0-rc02:</strong> Better spacing with reduced margins and cleaner vertical rhythm
			</div>

			<div class="row g-4">
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h6 class="mb-0">Spacing Improvements</h6>
						</div>
						<div class="card-body">
							<ul class="list-unstyled mb-0">
								<li>✅ h2 top margin: 2rem → 1.25rem</li>
								<li>✅ h3 top margin: 1.5rem → 1rem</li>
								<li>✅ Better bottom margins</li>
								<li>✅ Reduced container padding (p-4 → p-3)</li>
								<li>✅ First-child rules prevent extra top margins</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h6 class="mb-0">SCSS Variables</h6>
						</div>
						<div class="card-body">
							<CleanCodeBlock
								codeContent={`// Override these variables:
$h1-margin-top: 2rem !default;
$h2-margin-top: 1.25rem !default;
$h3-margin-top: 1rem !default;
$paragraph-margin-bottom: 1rem !default;
$container-padding: 0.75rem !default;`}
								languageType="scss"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Responsive Behavior -->
		<div class="mb-5">
			<h3 class="mb-4">📱 Responsive Behavior</h3>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Screen Size</th>
							<th>Navigation</th>
							<th>Layout</th>
							<th>Behavior</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><strong>Desktop (≥992px)</strong></td>
							<td>Fixed sidebar</td>
							<td>Two-column</td>
							<td>Navigation always visible</td>
						</tr>
						<tr>
							<td><strong>Tablet (768px-991px)</strong></td>
							<td>Collapsible sidebar</td>
							<td>Overlay</td>
							<td>Toggle button in header</td>
						</tr>
						<tr>
							<td><strong>Mobile (≤767px)</strong></td>
							<td>Full-screen overlay</td>
							<td>Single column</td>
							<td>Hamburger menu navigation</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Accessibility -->
		<div class="mb-5">
			<h3 class="mb-4">♿ Accessibility Features</h3>
			<div class="row g-4">
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h6 class="mb-0">Built-in Features</h6>
						</div>
						<div class="card-body">
							<ul class="list-unstyled mb-0">
								<li>✅ Semantic HTML structure</li>
								<li>✅ Proper ARIA labels and roles</li>
								<li>✅ Skip navigation links</li>
								<li>✅ Focus management</li>
								<li>✅ Keyboard navigation support</li>
								<li>✅ Screen reader optimization</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h6 class="mb-0">Best Practices</h6>
						</div>
						<div class="card-body">
							<ul class="list-unstyled mb-0">
								<li>🎯 Always provide titleText</li>
								<li>🎯 Use semantic heading structure</li>
								<li>🎯 Include descriptive page descriptions</li>
								<li>🎯 Test with screen readers</li>
								<li>🎯 Ensure sufficient color contrast</li>
								<li>🎯 Test keyboard-only navigation</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- CSS Classes -->
		<div class="mb-5">
			<h3 class="mb-4">🎨 CSS Classes & Customization</h3>
			<p>DocLayout generates these CSS classes for customization:</p>

			<CleanCodeBlock
				codeContent={`/* Main layout structure */
.docs-layout {
  /* Main container */
}

.docs-layout .sidebar {
  /* Navigation sidebar */
  width: var(--sidebar-width, 16rem);
}

.docs-layout .main-content {
  /* Main content area */
}

.docs-layout .breadcrumbs {
  /* Breadcrumb navigation */
  padding: 0.5rem 0;
}

.docs-layout .content-wrapper {
  /* Your content wrapper */
  min-height: calc(100vh - var(--navbar-height, 4rem));
}

/* Responsive classes */
@media (max-width: 991.98px) {
  .docs-layout .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .docs-layout .sidebar.show {
    transform: translateX(0);
  }
}`}
				languageType="css"
			/>
		</div>

		<!-- Common Issues -->
		<div class="mb-5">
			<h3 class="mb-4">🚨 Common Issues & Solutions</h3>
			<div class="accordion" id="commonIssues">
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#issue1">
							Navigation not showing
						</button>
					</h2>
					<div id="issue1" class="accordion-collapse collapse" data-bs-parent="#commonIssues">
						<div class="accordion-body">
							<p><strong>Solution:</strong> Ensure ConfigProvider is wrapping your app with navigation configuration:</p>
							<CleanCodeBlock
								codeContent={`const config = {
  navigation: {
    main: [
      { label: 'Home', href: '/' },
      // ... more items
    ]
  }
};`}
								languageType="typescript"
							/>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#issue2">
							SEO tags not appearing
						</button>
					</h2>
					<div id="issue2" class="accordion-collapse collapse" data-bs-parent="#commonIssues">
						<div class="accordion-body">
							<p><strong>Solution:</strong> Make sure you're using SSR and have configured site metadata:</p>
							<CleanCodeBlock
								codeContent={`// +layout.server.ts
export async function load() {
  return {
    config: {
      site: {
        title: 'My Site',
        description: 'My site description',
        url: 'https://mysite.com'
      }
    }
  };
}`}
								languageType="typescript"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</DocLayout>