import type { PartialDocsConfig } from '@keenmate/svelte-docs';

export async function load() {
	const config: PartialDocsConfig = {
		site: {
			title: 'Svelte Docs Showcase',
			description: 'Complete documentation and showcase for @keenmate/svelte-docs component library',
			keywords: ['svelte', 'sveltekit', 'documentation', 'components', 'showcase', 'keenmate'],
			author: 'KeenMate',
			url: 'https://svelte-docs.keenmate.com',
			language: 'en'
		},
		company: {
			name: 'KeenMate',
			website: 'https://keenmate.com',
			social: {
				github: 'https://github.com/keenmate/svelte-docs'
			}
		},
		navigation: {
			main: [
				{ label: 'Home', href: '/', icon: '🏠' },
				{ label: 'Getting Started', href: '/getting-started', icon: '🚀' },
				{
					label: 'Components',
					href: '/components/layout',
					icon: '📦',
					children: [
						{ label: 'Layout', href: '/components/layout' },
						{ label: 'Content', href: '/components/content' },
						{ label: 'Navigation', href: '/components/navigation' }
					]
				},
				{
					label: 'API Reference',
					href: '/api',
					icon: '📚',
					children: [
						{ label: 'DocLayout', href: '/api/doclayout' },
						{ label: 'ConfigProvider', href: '/api/configprovider' },
						{ label: 'ShowcaseSection', href: '/api/showcasesection' }
					]
				},
				{ label: 'Configuration', href: '/configuration', icon: '⚙️' },
				{ label: 'Examples', href: '/examples', icon: '💡' }
			]
		},
		features: {
			search: true,
			breadcrumbs: true,
			tableOfContents: true,
			analyticsScripts: [
				'<script defer data-domain="svelte-docs.keenmate.dev" src="https://stats.keenmate.services/js/plausible.js"></script>'
			]
		}
	};

	return {
		config
	};
}