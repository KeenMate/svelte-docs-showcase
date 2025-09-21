<script lang="ts">
	import { DocLayout, ShowcaseSection, CodeBlock, FeatureCard } from '@keenmate/svelte-docs';
	import { CleanCodeBlock, CleanCodeShowcase } from '$lib/components';
</script>

<DocLayout
	titleText="Navigation Components"
	descriptionText="Components for site navigation, headers, and breadcrumb navigation">

	<div class="py-4">

		<!-- Overview -->
		<div class="row g-4 mb-5">
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="🔗"
					titleText="MenuItem"
					descriptionText="Flexible menu item component with icons, tooltips, badges, and security features"
					variantType="primary"
					badgeText="NEW"
					badgeVariantType="success"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="🧭"
					titleText="NavigationSidebar"
					descriptionText="Enhanced sidebar navigation using MenuItem components"
					variantType="secondary"
					badgeText="Updated"
					badgeVariantType="info"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="📄"
					titleText="PageHeader"
					descriptionText="Page header with title, description, and optional actions"
					variantType="success"
					badgeText="Essential"
					badgeVariantType="success"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="🗂️"
					titleText="Breadcrumbs"
					descriptionText="Breadcrumb navigation showing current page location"
					variantType="info"
					badgeText="Auto"
					badgeVariantType="info"
				/>
			</div>
		</div>

		<!-- MenuItem Component -->
		<ShowcaseSection
			titleText="MenuItem Component"
			subtitleText="Flexible menu item with comprehensive feature set">

			{#snippet demoContent()}
				<h5>🔗 MenuItem Examples</h5>
				<div class="d-flex flex-column gap-2 p-3 border rounded bg-light">
					<!-- Placeholder for actual MenuItem components -->
					<div class="d-flex align-items-center p-2 border rounded bg-white">
						<span class="me-2">🏠</span>
						<span class="me-auto">Home</span>
						<span class="badge bg-primary">New</span>
					</div>
					<div class="d-flex align-items-center p-2 border rounded bg-white">
						<span class="me-2">📚</span>
						<span class="me-auto">Documentation</span>
						<small class="text-muted ms-2" title="Complete docs">📝</small>
					</div>
					<div class="d-flex align-items-center p-2 border rounded bg-white text-muted">
						<span class="me-2">⚙️</span>
						<span class="me-auto">Settings (Disabled)</span>
					</div>
					<div class="d-flex align-items-center p-2 border rounded bg-white">
						<span class="me-2">⭐</span>
						<span class="me-auto">GitHub</span>
						<small class="text-muted ms-2">↗️</small>
					</div>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>MenuItem Features</h6>
				<ul class="list-group list-group-flush">
					<li class="list-group-item d-flex justify-content-between">
						<span>Icon Support</span>
						<span class="badge bg-success">✓</span>
					</li>
					<li class="list-group-item d-flex justify-content-between">
						<span>Tooltips</span>
						<span class="badge bg-success">✓</span>
					</li>
					<li class="list-group-item d-flex justify-content-between">
						<span>Badges</span>
						<span class="badge bg-success">✓</span>
					</li>
					<li class="list-group-item d-flex justify-content-between">
						<span>Target Control</span>
						<span class="badge bg-success">✓</span>
					</li>
					<li class="list-group-item d-flex justify-content-between">
						<span>Security Attributes</span>
						<span class="badge bg-success">✓</span>
					</li>
					<li class="list-group-item d-flex justify-content-between">
						<span>Active/Disabled States</span>
						<span class="badge bg-success">✓</span>
					</li>
				</ul>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>MenuItem Props</h6>
				<div class="table-responsive">
					<table class="table table-sm">
						<thead>
							<tr>
								<th>Prop</th>
								<th>Type</th>
								<th>Required</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>hrefUrl</code></td>
								<td>string</td>
								<td>✓</td>
							</tr>
							<tr>
								<td><code>labelText</code></td>
								<td>string</td>
								<td>✓</td>
							</tr>
							<tr>
								<td><code>iconContent</code></td>
								<td>Snippet?</td>
								<td></td>
							</tr>
							<tr>
								<td><code>tooltipText</code></td>
								<td>string?</td>
								<td></td>
							</tr>
							<tr>
								<td><code>badgeText</code></td>
								<td>string?</td>
								<td></td>
							</tr>
							<tr>
								<td><code>targetWindow</code></td>
								<td>string?</td>
								<td></td>
							</tr>
							<tr>
								<td><code>isActive</code></td>
								<td>boolean?</td>
								<td></td>
							</tr>
							<tr>
								<td><code>isDisabled</code></td>
								<td>boolean?</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- MenuItem Usage Examples -->
		<div class="mt-5">
			<h3 class="mb-4">MenuItem Usage Examples</h3>
			<CleanCodeShowcase
				titleText="MenuItem Component Examples"
				svelteCodeContent={`
					<script>
					  import { MenuItem } from '@keenmate/svelte-docs';
					</script>

					<!-- Basic MenuItem -->
					<MenuItem
					  hrefUrl="/home"
					  labelText="Home"
					/>

					<!-- MenuItem with Icon -->
					<MenuItem
					  hrefUrl="/docs"
					  labelText="Documentation">
					  {#snippet iconContent()}
					    📚
					  {/snippet}
					</MenuItem>

					<!-- MenuItem with Badge -->
					<MenuItem
					  hrefUrl="/features"
					  labelText="New Features"
					  badgeText="Beta"
					  badgeVariantType="warning"
					/>

					<!-- External Link with Tooltip -->
					<MenuItem
					  hrefUrl="https://github.com/keenmate/svelte-docs"
					  labelText="GitHub Repository"
					  tooltipText="View source code"
					  targetWindow="_blank"
					  isExternal={true}>
					  {#snippet iconContent()}
					    ⭐
					  {/snippet}
					</MenuItem>

					<!-- Disabled MenuItem -->
					<MenuItem
					  hrefUrl="/settings"
					  labelText="Settings"
					  isDisabled={true}
					  tooltipText="Coming soon">
					  {#snippet iconContent()}
					    ⚙️
					  {/snippet}
					</MenuItem>

					<!-- Active MenuItem -->
					<MenuItem
					  hrefUrl="/current-page"
					  labelText="Current Page"
					  isActive={true}
					/>

					<!-- MenuItem with Custom CSS -->
					<MenuItem
					  hrefUrl="/custom"
					  labelText="Custom Styled"
					  cssClass="my-custom-menu-item"
					/>
				`}
				typescriptCodeContent={`
					// MenuItem Props Interface
					interface MenuItemProps {
					  hrefUrl: string;                    // Required - Link URL
					  labelText: string;                  // Required - Display text
					  iconContent?: Snippet;              // Optional - Icon snippet
					  tooltipText?: string;               // Optional - Hover tooltip
					  isActive?: boolean;                 // Optional - Active state
					  isDisabled?: boolean;               // Optional - Disabled state
					  isExternal?: boolean;               // Optional - External link flag
					  targetWindow?: '_self' | '_blank' | '_parent' | '_top' | string;
					  badgeText?: string;                 // Optional - Badge text
					  badgeVariantType?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
					  cssClass?: string;                  // Optional - Custom CSS classes
					}

					// Usage with TypeScript
					import type { MenuItemProps } from '@keenmate/svelte-docs';

					const menuItemProps: MenuItemProps = {
					  hrefUrl: '/api/users',
					  labelText: 'Users API',
					  tooltipText: 'Manage user accounts',
					  badgeText: 'v2',
					  badgeVariantType: 'success',
					  targetWindow: '_self'
					};

					// Navigation with MenuItem in TypeScript
					const navigationItems: NavigationItem[] = [
					  {
					    label: 'Dashboard',
					    href: '/dashboard',
					    icon: '📊',
					    tooltip: 'View analytics dashboard'
					  },
					  {
					    label: 'Documentation',
					    href: '/docs',
					    icon: '📚',
					    children: [
					      {
					        label: 'API Reference',
					        href: '/docs/api',
					        badge: 'New',
					        tooltip: 'Complete API documentation'
					      }
					    ]
					  }
					];
				`}
				cssCodeContent={`/* MenuItem Custom Styling */
.my-custom-menu-item {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.my-custom-menu-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* MenuItem with Custom Badge */
.menu-item-badge-custom .badge {
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  border: none;
  color: white;
  font-weight: 600;
}

/* Custom Tooltip Styling */
.menu-item-tooltip {
  --bs-tooltip-bg: var(--docs-secondary);
  --bs-tooltip-color: white;
}

/* Responsive MenuItem */
@media (max-width: 768px) {
  .menu-item {
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
  }

  .menu-item .badge {
    font-size: 0.75rem;
  }
}`}
			/>
		</div>

		<!-- NavigationSidebar Component -->
		<ShowcaseSection
			titleText="NavigationSidebar"
			subtitleText="Responsive sidebar navigation integrated into DocLayout">

			{#snippet demoContent()}
				<div class="alert alert-info">
					<h5>📍 Navigation Sidebar Demo</h5>
					<p>The navigation sidebar you see on the left side of this page is a live example of the NavigationSidebar component!</p>
					<p class="mb-0">It's automatically included in <code>DocLayout</code> and configured through the <code>ConfigProvider</code>.</p>
				</div>
				<div class="border rounded p-3 bg-light">
					<h6>Current Navigation Features:</h6>
					<ul>
						<li>🏠 Home link with icon</li>
						<li>🚀 Getting Started section</li>
						<li>📦 Components with sub-menu (Layout, Content, Navigation)</li>
						<li>⚙️ Configuration section</li>
						<li>💡 Examples section</li>
						<li>🎮 Interactive Playground</li>
					</ul>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Navigation Configuration</h6>
				<p class="text-muted">Configured in <code>+layout.svelte</code></p>
				<CleanCodeBlock
					codeContent={`const config = {
  navigation: {
    main: [
      {
        label: 'Components',
        href: '/components/layout',
        icon: '📦',
        children: [
          { label: 'Layout', href: '/components/layout' },
          { label: 'Content', href: '/components/content' },
          { label: 'Navigation', href: '/components/navigation' }
        ]
      }
    ]
  }
};`}
					languageType="javascript"
				/>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Features</h6>
				<ul>
					<li><strong>Responsive:</strong> Collapsible on mobile devices</li>
					<li><strong>Hierarchical:</strong> Support for nested menu items</li>
					<li><strong>Icons:</strong> Emoji or custom icons for menu items</li>
					<li><strong>Active States:</strong> Highlights current page</li>
					<li><strong>Accessible:</strong> Keyboard navigation support</li>
				</ul>
				<p class="text-muted">The sidebar is controlled by <code>isNavigationVisible</code> prop in DocLayout.</p>
			{/snippet}
		</ShowcaseSection>

		<!-- Navigation Configuration -->
		<div class="mt-5">
			<h3 class="mb-4">Navigation Configuration</h3>
			<CleanCodeShowcase
				titleText="Setting up Navigation"
				svelteCodeContent={`<script lang="ts">
  import { ConfigProvider } from '@keenmate/svelte-docs';
  import type { PartialDocsConfig } from '@keenmate/svelte-docs';

  const config: PartialDocsConfig = {
    navigation: {
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
            { label: 'Examples', href: '/docs/examples' }
          ]
        },
        {
          label: 'Components',
          href: '/components/layout',
          icon: '📦',
          children: [
            { label: 'Layout', href: '/components/layout' },
            { label: 'Content', href: '/components/content' },
            { label: 'Forms', href: '/components/forms' }
          ]
        },
        {
          label: 'GitHub',
          href: 'https://github.com/your-repo',
          icon: '⭐'
        }
      ],
      social: [
        {
          label: 'GitHub',
          href: 'https://github.com/your-username',
          icon: '⭐'
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/your-handle',
          icon: '🐦'
        }
      ]
    }
  };
</script>

<ConfigProvider configData={config}>
  <slot />
</ConfigProvider>`}
				typescriptCodeContent={`// Navigation interfaces
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
}

interface NavigationConfig {
  main?: NavigationItem[];
  social?: SocialLink[];
}

// Usage example
const navigationConfig: NavigationConfig = {
  main: [
    {
      label: 'API Documentation',
      href: '/api',
      icon: '📖',
      children: [
        { label: 'Authentication', href: '/api/auth' },
        { label: 'Users', href: '/api/users' },
        { label: 'Products', href: '/api/products' }
      ]
    }
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/user', icon: '⭐' },
    { label: 'Discord', href: 'https://discord.gg/invite', icon: '💬' }
  ]
};`}
				cssCodeContent={`/* Custom navigation styles */
.sidebar .nav-link {
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.2s ease;
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
}

.sidebar .nav-link:hover:not(.active) {
  background-color: rgba(0, 167, 225, 0.15);
  color: #00A7E1;
}

.sidebar .nav-link.active {
  background: linear-gradient(135deg, #00A7E1 0%, #007EA7 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
}

/* Mobile navigation */
@media (max-width: 991.98px) {
  .sidebar {
    position: fixed;
    top: var(--navbar-height);
    left: 0;
    height: calc(100vh - var(--navbar-height));
    z-index: 1050;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .sidebar.show {
    transform: translateX(0);
  }
}`}
			/>
		</div>

		<!-- PageHeader Component -->
		<ShowcaseSection
			titleText="PageHeader"
			subtitleText="Page header with title, description, and optional metadata">

			{#snippet demoContent()}
				<div class="border rounded p-3">
					<div class="mb-3 p-3 bg-primary text-white rounded">
						<h3 class="mb-2">Sample Page Title</h3>
						<p class="mb-2">This is a sample page description that explains what this page is about and what users can expect to find here.</p>
						<div class="d-flex gap-2">
							<span class="badge bg-light text-dark">v1.0.0</span>
							<span class="badge bg-light text-dark">Updated: Nov 2024</span>
						</div>
					</div>
					<p class="text-muted small mb-0">
						💡 This demonstrates how PageHeader appears within DocLayout
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>PageHeader Props</h6>
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
								<td>string</td>
								<td>required</td>
							</tr>
							<tr>
								<td><code>descriptionText</code></td>
								<td>string?</td>
								<td>undefined</td>
							</tr>
							<tr>
								<td><code>badgeText</code></td>
								<td>string?</td>
								<td>undefined</td>
							</tr>
							<tr>
								<td><code>lastUpdated</code></td>
								<td>string?</td>
								<td>undefined</td>
							</tr>
						</tbody>
					</table>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Integration with DocLayout</h6>
				<p>PageHeader is automatically included in DocLayout when you provide:</p>
				<ul>
					<li><code>titleText</code> prop to DocLayout</li>
					<li><code>descriptionText</code> prop to DocLayout</li>
					<li>Page metadata through ConfigProvider</li>
				</ul>
				<p class="text-muted">The header at the top of this page is generated by DocLayout!</p>
			{/snippet}
		</ShowcaseSection>

		<!-- Breadcrumbs Component -->
		<ShowcaseSection
			titleText="Breadcrumbs"
			subtitleText="Automatic breadcrumb navigation based on route structure">

			{#snippet demoContent()}
				<div class="border rounded p-3">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb mb-0">
							<li class="breadcrumb-item">
								<a href="/" class="text-decoration-none">🏠 Home</a>
							</li>
							<li class="breadcrumb-item">
								<a href="/components/layout" class="text-decoration-none">Components</a>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Navigation
							</li>
						</ol>
					</nav>
					<p class="text-muted small mt-2 mb-0">
						💡 This shows the breadcrumb navigation for the current page
					</p>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Breadcrumb Features</h6>
				<ul class="list-unstyled">
					<li class="mb-2">
						<span class="badge bg-success me-2">✓</span>
						Auto-generated from URL
					</li>
					<li class="mb-2">
						<span class="badge bg-success me-2">✓</span>
						Accessible markup
					</li>
					<li class="mb-2">
						<span class="badge bg-success me-2">✓</span>
						Customizable separators
					</li>
					<li class="mb-2">
						<span class="badge bg-success me-2">✓</span>
						SEO-friendly structure
					</li>
				</ul>
				<h6>Control Visibility</h6>
				<CleanCodeBlock
					codeContent={`<DocLayout
  titleText="Page Title"
  areBreadcrumbsVisible={false}>
  <!-- Breadcrumbs hidden -->
</DocLayout>`}
					languageType="svelte"
				/>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>How Breadcrumbs Work</h6>
				<p>Breadcrumbs are automatically generated based on:</p>
				<ul>
					<li><strong>Route structure:</strong> URL path segments</li>
					<li><strong>Page titles:</strong> From route metadata</li>
					<li><strong>Navigation config:</strong> Labels from navigation</li>
				</ul>
				<h6>Customization</h6>
				<p>You can customize breadcrumb behavior through:</p>
				<ul>
					<li>Route-based page titles</li>
					<li>Custom separators in CSS</li>
					<li>Visibility controls per page</li>
				</ul>
			{/snippet}
		</ShowcaseSection>

		<!-- Mobile Navigation -->
		<div class="mt-5">
			<h3 class="mb-4">Mobile Navigation</h3>
			<div class="row g-4">
				<div class="col-md-6">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">📱 Mobile Sidebar</h5>
							<p class="card-text">On mobile devices, the sidebar transforms into an overlay menu accessible via hamburger button.</p>
							<ul class="small">
								<li>Touch-friendly navigation</li>
								<li>Backdrop close on tap outside</li>
								<li>Smooth slide animations</li>
								<li>Maintains all functionality</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">🎯 Responsive Behavior</h5>
							<p class="card-text">Navigation components adapt seamlessly to different screen sizes.</p>
							<ul class="small">
								<li>Collapsible menu on mobile</li>
								<li>Sticky header navigation</li>
								<li>Optimized touch targets</li>
								<li>Accessible keyboard navigation</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Best Practices -->
		<div class="mt-5 p-4 bg-light rounded">
			<h3>Navigation Best Practices</h3>
			<div class="row g-4 mt-2">
				<div class="col-md-6">
					<h5>🧭 Sidebar Navigation</h5>
					<ul>
						<li>Keep menu structure shallow (max 2-3 levels)</li>
						<li>Use clear, descriptive labels</li>
						<li>Group related items logically</li>
						<li>Include meaningful icons for quick recognition</li>
						<li>Test navigation on mobile devices</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>📄 Page Headers</h5>
					<ul>
						<li>Write clear, descriptive page titles</li>
						<li>Keep descriptions concise but informative</li>
						<li>Use consistent formatting across pages</li>
						<li>Include relevant metadata when helpful</li>
						<li>Optimize titles for SEO</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>🗂️ Breadcrumbs</h5>
					<ul>
						<li>Ensure breadcrumbs reflect actual page hierarchy</li>
						<li>Make breadcrumb links functional and accurate</li>
						<li>Use semantic markup for accessibility</li>
						<li>Keep breadcrumb labels concise</li>
						<li>Test with screen readers</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>📱 Mobile Experience</h5>
					<ul>
						<li>Ensure touch targets are at least 44px</li>
						<li>Test menu behavior on various devices</li>
						<li>Provide clear visual feedback for interactions</li>
						<li>Optimize for one-handed use</li>
						<li>Consider gesture navigation patterns</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</DocLayout>