<script lang="ts">
	import { DocLayout, ShowcaseSection, FeatureCard } from '@keenmate/svelte-docs';
	import { CleanCodeBlock, CleanCodeShowcase } from '$lib/components';
</script>

<DocLayout
	titleText="Content Components"
	descriptionText="Components for displaying and organizing content in your documentation">

	<div class="py-4">

		<!-- Overview -->
		<div class="row g-4 mb-5">
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="📋"
					titleText="ShowcaseSection"
					descriptionText="Three-column layout for demonstrations with demo, controls, and description"
					variantType="primary"
					badgeText="Core"
					badgeVariantType="primary"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="💻"
					titleText="CodeShowcase"
					descriptionText="Multi-tab code viewer with syntax highlighting and copy functionality"
					variantType="success"
					badgeText="Popular"
					badgeVariantType="success"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="📝"
					titleText="CodeBlock"
					descriptionText="Simple code display with syntax highlighting and copy button"
					variantType="info"
					badgeText="Essential"
					badgeVariantType="info"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="🎯"
					titleText="FeatureCard"
					descriptionText="Feature cards with icons, descriptions, and optional links"
					variantType="warning"
					badgeText="Flexible"
					badgeVariantType="warning"
				/>
			</div>
		</div>

		<!-- ShowcaseSection Component -->
		<ShowcaseSection
			titleText="ShowcaseSection"
			subtitleText="Three-column layout perfect for component demonstrations">

			{#snippet demoContent()}
				<div class="p-3 border rounded bg-light">
					<h5>Example Demo</h5>
					<p>This is where your component demo would be displayed. It's the main content area.</p>
					<button class="btn btn-primary btn-sm">Sample Button</button>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Controls</h6>
				<div class="mb-2">
					<label for="sample-input" class="form-label">Sample Input</label>
					<input type="text" id="sample-input" class="form-control form-control-sm" placeholder="Enter text">
				</div>
				<div class="mb-2">
					<label for="variant-select" class="form-label">Variant</label>
					<select id="variant-select" class="form-select form-select-sm">
						<option>Primary</option>
						<option>Secondary</option>
						<option>Success</option>
					</select>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Description</h6>
				<p>This column explains how the component works, its props, and usage examples.</p>
				<ul>
					<li><strong>Flexible layout:</strong> Three responsive columns</li>
					<li><strong>Customizable titles:</strong> Change column headers</li>
					<li><strong>Snippet support:</strong> Use Svelte 5 snippets</li>
				</ul>
			{/snippet}
		</ShowcaseSection>

		<!-- ShowcaseSection Examples -->
		<div class="mt-5">
			<h3 class="mb-4">ShowcaseSection Usage</h3>
			<CleanCodeShowcase
				titleText="ShowcaseSection Examples"
				svelteCodeContent={`<script>
  import { ShowcaseSection } from '@keenmate/svelte-docs';
</script>

<!-- Basic ShowcaseSection -->
<ShowcaseSection
  titleText="My Component"
  subtitleText="A demonstration of component features">

  {#snippet demoContent()}
    <h4>Live Demo</h4>
    <p>Your interactive component demo goes here</p>
    <button class="btn btn-primary">Click me</button>
  {/snippet}

  {#snippet controlsContent()}
    <h5>Controls</h5>
    <label>
      Size:
      <select bind:value={size}>
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
    </label>
  {/snippet}

  {#snippet descriptionContent()}
    <h5>About this component</h5>
    <p>This component demonstrates interactive features.</p>
    <ul>
      <li>Responsive design</li>
      <li>Multiple size options</li>
      <li>Accessible markup</li>
    </ul>
  {/snippet}
</ShowcaseSection>

<!-- Custom Column Titles -->
<ShowcaseSection
  titleText="Custom Layout"
  demoColumnTitle="Preview"
  controlsColumnTitle="Settings"
  descriptionColumnTitle="Documentation">

  {#snippet demoContent()}
    <p>Custom column titles example</p>
  {/snippet}

  {#snippet controlsContent()}
    <p>Settings panel</p>
  {/snippet}

  {#snippet descriptionContent()}
    <p>Documentation content</p>
  {/snippet}
</ShowcaseSection>`}
				typescriptCodeContent={`// ShowcaseSection props interface
interface ShowcaseSectionProps {
  titleText: string;
  subtitleText?: string;
  demoContent?: Snippet;
  controlsContent?: Snippet;
  descriptionContent?: Snippet;
  demoColumnTitle?: string;        // Default: "Demo"
  controlsColumnTitle?: string;    // Default: "Controls"
  descriptionColumnTitle?: string; // Default: "Description"
}

// Usage with TypeScript
import type { ShowcaseSectionProps } from '@keenmate/svelte-docs';

const sectionProps: Partial<ShowcaseSectionProps> = {
  titleText: 'Button Component',
  subtitleText: 'Interactive button with multiple variants',
  demoColumnTitle: 'Live Preview',
  controlsColumnTitle: 'Configuration',
  descriptionColumnTitle: 'API Reference'
};`}
			/>
		</div>

		<!-- CodeShowcase Component -->
		<ShowcaseSection
			titleText="CodeShowcase"
			subtitleText="Multi-tab code viewer with syntax highlighting">

			{#snippet demoContent()}
				<div class="border rounded">
					<CleanCodeShowcase
						titleText="Example Code Viewer"
						svelteCodeContent={`<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicked {count} times
</button>`}
						typescriptCodeContent={`interface Counter {
  count: number;
  increment(): void;
}

class CounterClass implements Counter {
  count = 0;

  increment(): void {
    this.count++;
  }
}`}
						cssCodeContent={`button {
  background: linear-gradient(45deg, #007bff, #0056b3);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: translateY(-2px);
}`}
					/>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Features</h6>
				<ul class="list-unstyled">
					<li class="mb-2">
						<span class="badge bg-success me-2">✓</span>
						Multiple tabs
					</li>
					<li class="mb-2">
						<span class="badge bg-success me-2">✓</span>
						Syntax highlighting
					</li>
					<li class="mb-2">
						<span class="badge bg-success me-2">✓</span>
						Copy to clipboard
					</li>
					<li class="mb-2">
						<span class="badge bg-success me-2">✓</span>
						Custom tab items
					</li>
				</ul>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Supported Languages</h6>
				<p>Powered by highlight.js with support for:</p>
				<div class="row">
					<div class="col-6">
						<ul class="small">
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>Svelte</li>
							<li>HTML</li>
							<li>CSS/SCSS</li>
						</ul>
					</div>
					<div class="col-6">
						<ul class="small">
							<li>Python</li>
							<li>Rust</li>
							<li>Go</li>
							<li>JSON</li>
							<li>And 50+ more!</li>
						</ul>
					</div>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- CodeBlock Component -->
		<ShowcaseSection
			titleText="CodeBlock"
			subtitleText="Simple code display with syntax highlighting">

			{#snippet demoContent()}
				<CleanCodeBlock
					titleText="Installation Command"
					codeContent="npm install @keenmate/svelte-docs"
					languageType="bash"
				/>

				<div class="mt-3">
					<CleanCodeBlock
						titleText="Basic Usage"
						codeContent={`import { DocLayout } from '@keenmate/svelte-docs';

export default function App() {
  return (
    <DocLayout titleText="My Docs">
      <h1>Welcome!</h1>
    </DocLayout>
  );
}`}
						languageType="javascript"
					/>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Props</h6>
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
								<td><code>codeContent</code></td>
								<td>string</td>
								<td>required</td>
							</tr>
							<tr>
								<td><code>languageType</code></td>
								<td>string?</td>
								<td>'text'</td>
							</tr>
							<tr>
								<td><code>titleText</code></td>
								<td>string?</td>
								<td>undefined</td>
							</tr>
							<tr>
								<td><code>isCopyable</code></td>
								<td>boolean?</td>
								<td>true</td>
							</tr>
						</tbody>
					</table>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>When to Use</h6>
				<ul>
					<li><strong>Simple code snippets:</strong> Short examples or commands</li>
					<li><strong>Single language:</strong> When you don't need multiple tabs</li>
					<li><strong>Quick examples:</strong> Installation commands, imports</li>
				</ul>
				<h6>vs CodeShowcase</h6>
				<p>Use <strong>CodeShowcase</strong> for multi-language examples with tabs.</p>
			{/snippet}
		</ShowcaseSection>

		<!-- FeatureCard Component -->
		<ShowcaseSection
			titleText="FeatureCard"
			subtitleText="Feature cards with icons and descriptions">

			{#snippet demoContent()}
				<div class="row g-3">
					<div class="col-md-6">
						<FeatureCard
							iconEmoji="🚀"
							titleText="Fast Performance"
							descriptionText="Optimized for speed with minimal bundle size"
							variantType="primary"
						/>
					</div>
					<div class="col-md-6">
						<FeatureCard
							iconEmoji="🎨"
							titleText="Beautiful Design"
							descriptionText="Pre-styled components with Bootstrap integration"
							variantType="success"
							badgeText="New"
							badgeVariantType="success"
						/>
					</div>
					<div class="col-md-6">
						<FeatureCard
							iconEmoji="🛠️"
							titleText="Easy to Use"
							descriptionText="Simple API with excellent developer experience"
							variantType="info"
							isDisabled={false}
						/>
					</div>
					<div class="col-md-6">
						<FeatureCard
							iconEmoji="📱"
							titleText="Responsive"
							descriptionText="Works perfectly on all devices and screen sizes"
							variantType="warning"
							badgeText="Mobile First"
							badgeVariantType="dark"
						/>
					</div>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Variants</h6>
				<div class="d-flex flex-column gap-2">
					<button class="btn btn-primary btn-sm">Primary</button>
					<button class="btn btn-secondary btn-sm">Secondary</button>
					<button class="btn btn-success btn-sm">Success</button>
					<button class="btn btn-danger btn-sm">Danger</button>
					<button class="btn btn-warning btn-sm">Warning</button>
					<button class="btn btn-info btn-sm">Info</button>
					<button class="btn btn-light btn-sm">Light</button>
					<button class="btn btn-dark btn-sm">Dark</button>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>All FeatureCard Props</h6>
				<ul class="small">
					<li><code>iconEmoji</code> - Icon to display</li>
					<li><code>titleText</code> - Card title (required)</li>
					<li><code>descriptionText</code> - Card description (required)</li>
					<li><code>linkHref</code> - Optional link URL</li>
					<li><code>linkLabel</code> - Link text</li>
					<li><code>variantType</code> - Bootstrap variant</li>
					<li><code>badgeText</code> - Optional badge text</li>
					<li><code>badgeVariantType</code> - Badge variant</li>
					<li><code>isDisabled</code> - Disabled state</li>
				</ul>
			{/snippet}
		</ShowcaseSection>

		<!-- Best Practices -->
		<div class="mt-5 p-4 bg-light rounded">
			<h3>Best Practices for Content Components</h3>
			<div class="row g-4 mt-2">
				<div class="col-md-6">
					<h5>📋 ShowcaseSection</h5>
					<ul>
						<li>Keep demo content focused and clear</li>
						<li>Use controls for interactive examples</li>
						<li>Provide comprehensive descriptions</li>
						<li>Test responsive behavior on mobile</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>💻 CodeShowcase</h5>
					<ul>
						<li>Use appropriate language types</li>
						<li>Keep code examples concise</li>
						<li>Include practical, runnable code</li>
						<li>Group related examples in tabs</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>📝 CodeBlock</h5>
					<ul>
						<li>Add descriptive titles</li>
						<li>Use for single-purpose snippets</li>
						<li>Choose correct language highlighting</li>
						<li>Enable copy button for user convenience</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h5>🎯 FeatureCard</h5>
					<ul>
						<li>Use meaningful icons and emojis</li>
						<li>Keep descriptions concise but informative</li>
						<li>Choose appropriate variants for context</li>
						<li>Use badges to highlight important features</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</DocLayout>