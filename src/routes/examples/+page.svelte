<script lang="ts">
	import { DocLayout, ShowcaseSection, FeatureCard } from '@keenmate/svelte-docs';
	import { CleanCodeBlock, CleanCodeShowcase } from '$lib/components';
</script>

<DocLayout
	titleText="Practical Examples"
	descriptionText="Real-world examples and use cases for @keenmate/svelte-docs">

	<div class="py-4">

		<!-- Overview -->
		<div class="row g-4 mb-5">
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="📖"
					titleText="API Documentation"
					descriptionText="Complete API reference with endpoints, parameters, and examples"
					linkHref="#api-docs"
					linkLabel="View Example"
					variantType="primary"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="📦"
					titleText="Component Library"
					descriptionText="Interactive component showcase with live examples"
					linkHref="#component-lib"
					linkLabel="View Example"
					variantType="success"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="🎓"
					titleText="Tutorial Guide"
					descriptionText="Step-by-step learning materials with code examples"
					linkHref="#tutorial"
					linkLabel="View Example"
					variantType="info"
				/>
			</div>
			<div class="col-md-6 col-lg-3">
				<FeatureCard
					iconEmoji="🏢"
					titleText="Product Docs"
					descriptionText="Enterprise product documentation with multiple sections"
					linkHref="#product-docs"
					linkLabel="View Example"
					variantType="warning"
				/>
			</div>
		</div>

		<!-- API Documentation Example -->
		<ShowcaseSection
			titleText="API Documentation Example"
			subtitleText="RESTful API reference with interactive examples"
			id="api-docs">

			{#snippet demoContent()}
				<div class="border rounded p-3 bg-light">
					<h5>🔌 Users API</h5>
					<div class="mb-3">
						<span class="badge bg-success me-2">GET</span>
						<code>/api/users</code>
					</div>
					<p class="mb-3">Retrieve a list of all users with optional filtering and pagination.</p>

					<h6>Parameters</h6>
					<div class="table-responsive">
						<table class="table table-sm">
							<thead>
								<tr><th>Name</th><th>Type</th><th>Description</th></tr>
							</thead>
							<tbody>
								<tr><td><code>page</code></td><td>number</td><td>Page number for pagination</td></tr>
								<tr><td><code>limit</code></td><td>number</td><td>Number of items per page</td></tr>
								<tr><td><code>search</code></td><td>string</td><td>Search query for user names</td></tr>
							</tbody>
						</table>
					</div>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Try it out</h6>
				<div class="mb-2">
					<label for="page-input" class="form-label">Page</label>
					<input type="number" id="page-input" class="form-control form-control-sm" value="1" min="1">
				</div>
				<div class="mb-2">
					<label for="limit-select" class="form-label">Limit</label>
					<select id="limit-select" class="form-select form-select-sm">
						<option>10</option>
						<option>25</option>
						<option>50</option>
					</select>
				</div>
				<div class="mb-3">
					<label for="search-input" class="form-label">Search</label>
					<input type="text" id="search-input" class="form-control form-control-sm" placeholder="Enter username">
				</div>
				<button class="btn btn-primary btn-sm w-100">Send Request</button>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Response Example</h6>
				<CleanCodeBlock
					codeContent={`{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 45,
    "pages": 5
  }
}`}
					languageType="json"
					titleText="200 OK"
				/>
			{/snippet}
		</ShowcaseSection>

		<!-- Full API Documentation Structure -->
		<div class="mt-5">
			<h3 class="mb-4">Complete API Documentation Setup</h3>
			<CleanCodeShowcase
				titleText="API Documentation Structure"
				svelteCodeContent={`<!-- src/routes/api/users/+page.svelte -->
<script>
  import { DocLayout, ShowcaseSection, CodeBlock } from '@keenmate/svelte-docs';
</script>

<DocLayout titleText="Users API" descriptionText="User management endpoints">

  <!-- GET /api/users -->
  <ShowcaseSection titleText="List Users" subtitleText="GET /api/users">
    {#snippet demoContent()}
      <div class="api-endpoint">
        <span class="badge bg-success">GET</span>
        <code>/api/users</code>
      </div>
      <p>Retrieve a paginated list of users.</p>

      <!-- Parameters table -->
      <h6>Query Parameters</h6>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>page</code></td>
              <td>integer</td>
              <td>No</td>
              <td>Page number (default: 1)</td>
            </tr>
            <tr>
              <td><code>limit</code></td>
              <td>integer</td>
              <td>No</td>
              <td>Items per page (default: 20, max: 100)</td>
            </tr>
          </tbody>
        </table>
      </div>
    {/snippet}

    {#snippet controlsContent()}
      <!-- Interactive API tester -->
      <h6>Try it out</h6>
      <form>
        <div class="mb-2">
          <label>Page:</label>
          <input type="number" class="form-control form-control-sm" value="1">
        </div>
        <div class="mb-2">
          <label>Limit:</label>
          <input type="number" class="form-control form-control-sm" value="20">
        </div>
        <button type="button" class="btn btn-primary btn-sm">Send Request</button>
      </form>
    {/snippet}

    {#snippet descriptionContent()}
      <h6>Response Examples</h6>
      <CleanCodeBlock
        titleText="200 Success"
        languageType="json"
        codeContent={\`{
  "users": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 156
  }
}\`}
      />

      <CleanCodeBlock
        titleText="400 Bad Request"
        languageType="json"
        codeContent={\`{
  "error": "Invalid page parameter",
  "code": "INVALID_PARAMETER"
}\`}
      />
    {/snippet}
  </ShowcaseSection>
</DocLayout>`}
				typescriptCodeContent={`// types/api.ts
export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface ApiError {
  error: string;
  code: string;
  details?: Record<string, any>;
}

// API client example
export class UsersApi {
  private baseUrl = 'https://api.example.com';

  async getUsers(params: {
    page?: number;
    limit?: number;
    search?: string;
  } = {}): Promise<PaginatedResponse<User>> {
    const searchParams = new URLSearchParams();

    if (params.page) searchParams.set('page', params.page.toString());
    if (params.limit) searchParams.set('limit', params.limit.toString());
    if (params.search) searchParams.set('search', params.search);

    const response = await fetch(\`\${this.baseUrl}/users?\${searchParams}\`);

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }

    return response.json();
  }
}`}
				cssCodeContent={`/* API Documentation Styles */
.api-endpoint {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 0.375rem;
  border-left: 4px solid var(--docs-primary);
}

.api-endpoint code {
  font-family: 'Monaco', 'Cascadia Code', monospace;
  font-size: 1rem;
  color: var(--docs-secondary);
}

/* HTTP Method badges */
.badge.bg-success { background-color: #28a745 !important; } /* GET */
.badge.bg-primary { background-color: #007bff !important; } /* POST */
.badge.bg-warning { background-color: #ffc107 !important; } /* PUT */
.badge.bg-danger { background-color: #dc3545 !important; }  /* DELETE */

/* Parameter tables */
.table th {
  background-color: var(--docs-light);
  border-bottom: 2px solid var(--docs-primary);
  font-weight: 600;
}

.table code {
  background-color: rgba(var(--docs-primary-rgb), 0.1);
  color: var(--docs-secondary);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
}`}
			/>
		</div>

		<!-- Component Library Example -->
		<ShowcaseSection
			titleText="Component Library Example"
			subtitleText="Interactive UI component showcase"
			id="component-lib">

			{#snippet demoContent()}
				<div class="p-3 border rounded">
					<h5>🎨 Button Component</h5>
					<div class="d-flex gap-2 flex-wrap mb-3">
						<button class="btn btn-primary">Primary</button>
						<button class="btn btn-secondary">Secondary</button>
						<button class="btn btn-success">Success</button>
						<button class="btn btn-danger">Danger</button>
						<button class="btn btn-outline-primary">Outlined</button>
					</div>
					<div class="d-flex gap-2 flex-wrap">
						<button class="btn btn-primary btn-sm">Small</button>
						<button class="btn btn-primary">Default</button>
						<button class="btn btn-primary btn-lg">Large</button>
					</div>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Customize</h6>
				<div class="mb-2">
					<label for="variant-select-2" class="form-label">Variant</label>
					<select id="variant-select-2" class="form-select form-select-sm">
						<option>primary</option>
						<option>secondary</option>
						<option>success</option>
						<option>danger</option>
						<option>outline-primary</option>
					</select>
				</div>
				<div class="mb-2">
					<label for="size-select" class="form-label">Size</label>
					<select id="size-select" class="form-select form-select-sm">
						<option>sm</option>
						<option selected>default</option>
						<option>lg</option>
					</select>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" id="disabled">
					<label class="form-check-label" for="disabled">Disabled</label>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Usage</h6>
				<CleanCodeBlock
					codeContent={`<Button
  variant="primary"
  size="default"
  disabled={false}
  onClick={() => console.log('clicked')}
>
  Click me
</Button>`}
					languageType="svelte"
					titleText="Button.svelte"
				/>
				<h6>Props</h6>
				<ul class="small">
					<li><code>variant</code> - Button style variant</li>
					<li><code>size</code> - Button size (sm, default, lg)</li>
					<li><code>disabled</code> - Disabled state</li>
					<li><code>onClick</code> - Click handler function</li>
				</ul>
			{/snippet}
		</ShowcaseSection>

		<!-- Tutorial Example -->
		<ShowcaseSection
			titleText="Tutorial Guide Example"
			subtitleText="Step-by-step learning content"
			id="tutorial">

			{#snippet demoContent()}
				<div class="tutorial-step p-3 border rounded">
					<div class="d-flex align-items-center mb-3">
						<span class="badge bg-primary me-2">Step 1</span>
						<h5 class="mb-0">Setting up your environment</h5>
					</div>
					<p>Before we begin building our application, let's make sure you have all the necessary tools installed.</p>

					<h6>Prerequisites</h6>
					<ul class="list-group list-group-flush">
						<li class="list-group-item d-flex justify-content-between">
							<span>Node.js 18+</span>
							<span class="badge bg-success">✓</span>
						</li>
						<li class="list-group-item d-flex justify-content-between">
							<span>Git</span>
							<span class="badge bg-success">✓</span>
						</li>
						<li class="list-group-item d-flex justify-content-between">
							<span>VS Code (recommended)</span>
							<span class="badge bg-secondary">Optional</span>
						</li>
					</ul>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<h6>Quick Commands</h6>
				<div class="d-grid gap-2">
					<button class="btn btn-outline-primary btn-sm">📋 Copy install command</button>
					<button class="btn btn-outline-secondary btn-sm">📁 Open in VS Code</button>
					<button class="btn btn-outline-success btn-sm">▶️ Run dev server</button>
				</div>

				<h6 class="mt-3">Progress</h6>
				<div class="progress">
					<div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Step 1 of 4</div>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<h6>Installation</h6>
				<CleanCodeBlock
					codeContent="npm create svelte@latest my-app\ncd my-app\nnpm install\nnpm run dev"
					languageType="bash"
					titleText="Terminal"
				/>

				<div class="alert alert-info mt-3">
					<strong>💡 Tip:</strong> Make sure to use the latest version of Node.js for the best experience.
				</div>

				<h6>Next Step</h6>
				<p class="text-muted">Once your development server is running, we'll create your first component.</p>
			{/snippet}
		</ShowcaseSection>

		<!-- Usage Patterns -->
		<div class="mt-5">
			<h3 class="mb-4">Common Usage Patterns</h3>
			<div class="row g-4">
				<div class="col-md-6">
					<div class="card h-100">
						<div class="card-body">
							<h5 class="card-title">📚 Documentation Site</h5>
							<p class="card-text">Perfect for:</p>
							<ul>
								<li>API documentation</li>
								<li>User guides</li>
								<li>Technical specifications</li>
								<li>Knowledge bases</li>
							</ul>
							<CleanCodeBlock
								codeContent={`navigation: {
  main: [
    { label: 'Getting Started', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Guides', href: '/guides' }
  ]
}`}
								languageType="javascript"
							/>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="card h-100">
						<div class="card-body">
							<h5 class="card-title">🎨 Design System</h5>
							<p class="card-text">Ideal for:</p>
							<ul>
								<li>Component libraries</li>
								<li>Design tokens</li>
								<li>Style guides</li>
								<li>Brand guidelines</li>
							</ul>
							<CleanCodeBlock
								codeContent={`navigation: {
  main: [
    { label: 'Foundations', href: '/foundations' },
    { label: 'Components', href: '/components/layout' },
    { label: 'Patterns', href: '/patterns' }
  ]
}`}
								languageType="javascript"
							/>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="card h-100">
						<div class="card-body">
							<h5 class="card-title">🎓 Learning Platform</h5>
							<p class="card-text">Great for:</p>
							<ul>
								<li>Tutorial series</li>
								<li>Course materials</li>
								<li>Educational content</li>
								<li>Progressive learning</li>
							</ul>
							<CleanCodeBlock
								codeContent={`navigation: {
  main: [
    { label: 'Beginner', href: '/beginner' },
    { label: 'Intermediate', href: '/intermediate' },
    { label: 'Advanced', href: '/advanced' }
  ]
}`}
								languageType="javascript"
							/>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="card h-100">
						<div class="card-body">
							<h5 class="card-title">🏢 Product Documentation</h5>
							<p class="card-text">Excellent for:</p>
							<ul>
								<li>Feature documentation</li>
								<li>User manuals</li>
								<li>Release notes</li>
								<li>Support articles</li>
							</ul>
							<CleanCodeBlock
								codeContent={`navigation: {
  main: [
    { label: 'Features', href: '/features' },
    { label: 'Setup', href: '/setup' },
    { label: 'Support', href: '/support' }
  ]
}`}
								languageType="javascript"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Templates -->
		<div class="mt-5 p-4 bg-light rounded">
			<h3>Ready-to-use Templates</h3>
			<p>Get started quickly with these pre-configured templates:</p>
			<div class="row g-3 mt-2">
				<div class="col-md-4">
					<div class="d-grid">
						<button class="btn btn-outline-primary">
							📖 API Documentation Template
						</button>
					</div>
				</div>
				<div class="col-md-4">
					<div class="d-grid">
						<button class="btn btn-outline-success">
							🎨 Component Library Template
						</button>
					</div>
				</div>
				<div class="col-md-4">
					<div class="d-grid">
						<button class="btn btn-outline-info">
							🎓 Tutorial Site Template
						</button>
					</div>
				</div>
			</div>
			<p class="text-muted mt-3 mb-0">
				Each template includes pre-configured navigation, sample content, and best practices.
			</p>
		</div>
	</div>
</DocLayout>