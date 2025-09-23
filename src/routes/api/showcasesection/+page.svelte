<script lang="ts">
	import { DocLayout, CodeBlock, ShowcaseSection } from '@keenmate/svelte-docs';
	import { CleanCodeBlock } from '$lib/components';
</script>

<DocLayout
	titleText="ShowcaseSection API Reference"
	descriptionText="Complete API documentation for the ShowcaseSection component">

	<div class="py-4">
		<!-- Component Overview -->
		<div class="mb-5">
			<h2 class="mb-3">📚 ShowcaseSection Component</h2>
			<p class="lead">
				A three-column layout component for displaying interactive demos, configuration controls, and documentation content.
			</p>

			<div class="row g-4 mb-4">
				<div class="col-md-6">
					<CodeBlock
						codeContent={`import { ShowcaseSection } from '@keenmate/svelte-docs';`}
						languageType="javascript"
						titleText="Import"
					/>
				</div>
				<div class="col-md-6">
					<CodeBlock
						codeContent={`<ShowcaseSection titleText="Component Demo">
  {#snippet demoContent()}
    <!-- Demo here -->
  {/snippet}

  {#snippet descriptionContent()}
    <!-- Documentation -->
  {/snippet}
</ShowcaseSection>`}
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
							<td><code>titleText</code> *</td>
							<td><code>string</code></td>
							<td><code>required</code></td>
							<td>Main section title</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>subtitleText</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>Optional subtitle or description</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>id</code></td>
							<td><code>string</code></td>
							<td><code>undefined</code></td>
							<td>HTML id attribute for anchor links</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>demoColumnTitle</code></td>
							<td><code>string</code></td>
							<td><code>'Demo'</code></td>
							<td>Title for the demo column</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>controlsColumnTitle</code></td>
							<td><code>string</code></td>
							<td><code>'Controls'</code></td>
							<td>Title for the controls column</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>descriptionColumnTitle</code></td>
							<td><code>string</code></td>
							<td><code>'Description'</code></td>
							<td>Title for the description column</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="text-muted">
				<small>* Required property</small>
			</p>
		</div>

		<!-- Template Snippets -->
		<div class="mb-5">
			<h3 class="mb-4">🎭 Template Snippets</h3>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th style="width: 23%">Snippet</th>
							<th style="width: 32%">Parameters</th>
							<th style="width: 32%">Description</th>
							<th style="width: 13%">Version</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>demoContent</code></td>
							<td><code>None</code></td>
							<td>Left column - Interactive demos and live examples</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>controlsContent</code></td>
							<td><code>None</code></td>
							<td>Middle column - Interactive controls, settings, and configuration</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
						<tr>
							<td><code>descriptionContent</code></td>
							<td><code>None</code></td>
							<td>Right column - Documentation, explanations, and details</td>
							<td><span class="badge bg-primary">1.0.0+</span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Layout Structure -->
		<div class="mb-5">
			<h3 class="mb-4">🏗️ Layout Structure</h3>
			<p>Understanding the three-column responsive layout:</p>

			<CleanCodeBlock
				codeContent={`<!-- Generated HTML structure -->
<section class="showcase-section" {id}>
  <!-- Section Header -->
  <header class="showcase-header">
    <h3>{titleText}</h3>
    {#if subtitleText}
      <p class="subtitle">{subtitleText}</p>
    {/if}
  </header>

  <!-- Three-Column Layout -->
  <div class="showcase-content">
    <!-- Demo Column -->
    <div class="showcase-demo">
      <h4>{demoColumnTitle}</h4>
      <!-- demoContent snippet -->
    </div>

    <!-- Controls Column -->
    <div class="showcase-controls">
      <h4>{controlsColumnTitle}</h4>
      <!-- controlsContent snippet -->
    </div>

    <!-- Description Column -->
    <div class="showcase-description">
      <h4>{descriptionColumnTitle}</h4>
      <!-- descriptionContent snippet -->
    </div>
  </div>
</section>`}
				languageType="html"
			/>
		</div>

		<!-- Usage Examples -->
		<div class="mb-5">
			<h3 class="mb-4">💡 Usage Examples</h3>

			<div class="row g-4">
				<div class="col-lg-6">
					<h5>Basic Component Demo</h5>
					<CleanCodeBlock
						codeContent={`<ShowcaseSection
  titleText="Button Component"
  subtitleText="Interactive button with multiple variants">

  {#snippet demoContent()}
    <button class="btn btn-primary" class:btn-{variant}>
      {buttonText}
    </button>
  {/snippet}

  {#snippet controlsContent()}
    <label>
      Button Text:
      <input bind:value={buttonText} />
    </label>

    <label>
      Variant:
      <select bind:value={variant}>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="success">Success</option>
      </select>
    </label>
  {/snippet}

  {#snippet descriptionContent()}
    <h4>Button Component</h4>
    <p>A versatile button component with multiple styling options.</p>

    <h5>Features</h5>
    <ul>
      <li>Multiple color variants</li>
      <li>Customizable text</li>
      <li>Accessible markup</li>
    </ul>
  {/snippet}
</ShowcaseSection>`}
						languageType="svelte"
					/>
				</div>

				<div class="col-lg-6">
					<h5>API Endpoint Documentation</h5>
					<CleanCodeBlock
						codeContent={`<ShowcaseSection
  id="get-users"
  titleText="GET /api/users"
  subtitleText="Retrieve a paginated list of users">

  {#snippet demoContent()}
    <div class="api-demo">
      <h4>Request</h4>
      <pre><code>GET /api/users?page=1&limit=10</code></pre>

      <h4>Response</h4>
      <pre class="json-response">{JSON.stringify(responseData, null, 2)}</pre>
    </div>
  {/snippet}

  {#snippet controlsContent()}
    <h4>Parameters</h4>
    <label>
      Page: <input type="number" bind:value={page} min="1" />
    </label>

    <label>
      Limit: <input type="number" bind:value={limit} min="1" max="100" />
    </label>

    <button on:click={makeRequest}>Try It</button>
  {/snippet}

  {#snippet descriptionContent()}
    <h4>Description</h4>
    <p>Returns a paginated list of users with their basic information.</p>

    <h4>Query Parameters</h4>
    <table class="table table-sm">
      <tr><td>page</td><td>Page number (default: 1)</td></tr>
      <tr><td>limit</td><td>Items per page (default: 20, max: 100)</td></tr>
    </table>
  {/snippet}
</ShowcaseSection>`}
						languageType="svelte"
					/>
				</div>

				<div class="col-lg-6">
					<h5>Code Example with Live Demo</h5>
					<CleanCodeBlock
						codeContent={`<ShowcaseSection
  titleText="Counter Example"
  subtitleText="State management with Svelte 5">

  {#snippet demoContent()}
    <div class="counter-demo">
      <button on:click={() => count--}>-</button>
      <span class="count-display">{count}</span>
      <button on:click={() => count++}>+</button>
    </div>
  {/snippet}

  {#snippet controlsContent()}
    <label>
      Step Size:
      <input type="number" bind:value={step} min="1" />
    </label>

    <button on:click={() => count = 0}>Reset</button>
  {/snippet}

  {#snippet descriptionContent()}
    <h4>Code Example</h4>
    <pre><code>{counterCode}</code></pre>

    <h4>Key Concepts</h4>
    <ul>
      <li>Reactive state with $state()</li>
      <li>Event handling</li>
      <li>Component composition</li>
    </ul>
  {/snippet}
</ShowcaseSection>`}
						languageType="svelte"
					/>
				</div>

				<div class="col-lg-6">
					<h5>Custom Column Titles</h5>
					<CleanCodeBlock
						codeContent={`<ShowcaseSection
  titleText="Chart Configuration"
  subtitleText="Customize your data visualization"
  demoColumnTitle="Live Preview"
  controlsColumnTitle="Settings"
  descriptionColumnTitle="Chart Documentation">

  {#snippet demoContent()}
    <div class="chart-container">
      <Chart {data} {options} />
    </div>
  {/snippet}

  {#snippet controlsContent()}
    <fieldset>
      <legend>Chart Type</legend>
      <label>
        <input type="radio" bind:group={chartType} value="bar" />
        Bar Chart
      </label>
      <label>
        <input type="radio" bind:group={chartType} value="line" />
        Line Chart
      </label>
    </fieldset>

    <label>
      Title: <input bind:value={chartTitle} />
    </label>
  {/snippet}

  {#snippet descriptionContent()}
    <h4>Chart Component API</h4>
    <p>Configure charts with various visualization types.</p>

    <h5>Supported Types</h5>
    <ul>
      <li><strong>Bar:</strong> Compare values across categories</li>
      <li><strong>Line:</strong> Show trends over time</li>
      <li><strong>Pie:</strong> Display proportional data</li>
    </ul>
  {/snippet}
</ShowcaseSection>`}
						languageType="svelte"
					/>
				</div>
			</div>
		</div>

		<!-- Responsive Behavior -->
		<div class="mb-5">
			<h3 class="mb-4">📱 Responsive Layout</h3>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Screen Size</th>
							<th>Layout</th>
							<th>Column Behavior</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><strong>Desktop (≥1200px)</strong></td>
							<td>Three columns side-by-side</td>
							<td>Demo (40%) | Controls (30%) | Description (30%)</td>
						</tr>
						<tr>
							<td><strong>Tablet (768px-1199px)</strong></td>
							<td>Demo full width, Controls/Description side-by-side</td>
							<td>Demo (100%) + Controls (50%) | Description (50%)</td>
						</tr>
						<tr>
							<td><strong>Mobile (≤767px)</strong></td>
							<td>Single column, stacked vertically</td>
							<td>Demo → Controls → Description (all 100%)</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Live Example -->
		<ShowcaseSection
			id="live-example"
			titleText="ShowcaseSection Live Example"
			subtitleText="This is an actual ShowcaseSection demonstrating itself"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Configuration"
			descriptionColumnTitle="About This Demo">

			{#snippet demoContent()}
				<div class="border rounded p-3 bg-light">
					<h5>🎯 Interactive Demo Area</h5>
					<p>This column typically contains:</p>
					<ul class="mb-0">
						<li>Live component demos</li>
						<li>Interactive examples</li>
						<li>Code playgrounds</li>
						<li>Visual representations</li>
					</ul>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="border rounded p-3 bg-info bg-opacity-10">
					<h5>⚙️ Controls Panel</h5>
					<p>This column usually includes:</p>
					<ul class="mb-0">
						<li>Form controls</li>
						<li>Configuration options</li>
						<li>Interactive settings</li>
						<li>Parameter inputs</li>
					</ul>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="border rounded p-3 bg-success bg-opacity-10">
					<h5>📚 Documentation</h5>
					<p>This column typically contains:</p>
					<ul class="mb-0">
						<li>API documentation</li>
						<li>Usage instructions</li>
						<li>Best practices</li>
						<li>Related links</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- CSS Classes & Customization -->
		<div class="mb-5">
			<h3 class="mb-4">🎨 CSS Classes & Customization</h3>
			<p>ShowcaseSection generates these CSS classes for styling:</p>

			<CleanCodeBlock
				codeContent={`/* Main container */
.showcase-section {
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
}

/* Section header */
.showcase-header {
  padding: 1.5rem;
  background: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
}

.showcase-header h3 {
  margin: 0 0 0.5rem 0;
  color: var(--heading-color);
}

.showcase-header .subtitle {
  margin: 0;
  color: var(--subtitle-color);
  opacity: 0.8;
}

/* Three-column layout */
.showcase-content {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr;
  gap: 1.5rem;
  padding: 1.5rem;
}

/* Individual columns */
.showcase-demo,
.showcase-controls,
.showcase-description {
  min-width: 0; /* Prevent grid overflow */
}

.showcase-demo h4,
.showcase-controls h4,
.showcase-description h4 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: var(--column-heading-color);
}

/* Responsive breakpoints */
@media (max-width: 1199.98px) {
  .showcase-content {
    grid-template-columns: 1fr;
    grid-template-areas:
      "demo"
      "controls-description";
  }

  .showcase-demo {
    grid-area: demo;
  }

  .showcase-controls {
    grid-area: controls-description;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 767.98px) {
  .showcase-content {
    grid-template-columns: 1fr;
    grid-template-areas:
      "demo"
      "controls"
      "description";
  }

  .showcase-controls {
    grid-area: controls;
    display: block;
  }

  .showcase-description {
    grid-area: description;
  }
}`}
				languageType="css"
			/>
		</div>

		<!-- Best Practices -->
		<div class="mb-5">
			<h3 class="mb-4">✅ Best Practices</h3>
			<div class="row g-4">
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h6 class="mb-0">Content Organization</h6>
						</div>
						<div class="card-body">
							<ul class="list-unstyled mb-0">
								<li>✅ Use demoContent for interactive examples</li>
								<li>✅ Put configuration controls in controlsContent</li>
								<li>✅ Include API docs in descriptionContent</li>
								<li>✅ Keep column content focused</li>
								<li>✅ Use descriptive section titles</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h6 class="mb-0">Accessibility</h6>
						</div>
						<div class="card-body">
							<ul class="list-unstyled mb-0">
								<li>🎯 Use semantic HTML in snippets</li>
								<li>🎯 Include proper labels for form controls</li>
								<li>🎯 Provide alt text for images</li>
								<li>🎯 Ensure sufficient color contrast</li>
								<li>🎯 Test with screen readers</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</DocLayout>