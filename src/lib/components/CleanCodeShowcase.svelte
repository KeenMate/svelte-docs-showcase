<script lang="ts">
	import { CodeShowcase } from '@keenmate/svelte-docs';
	import { cleanCodeIndentation } from '$lib/utils/code-formatter.js';

	interface Props {
		titleText?: string;
		tabItems?: Array<{ label: string; languageType: string; content: string }>;
		svelteCodeContent?: string;
		typescriptCodeContent?: string;
		cssCodeContent?: string;
		javascriptCodeContent?: string;
		htmlCodeContent?: string;
		jsonCodeContent?: string;
	}

	let {
		titleText,
		tabItems,
		svelteCodeContent,
		typescriptCodeContent,
		cssCodeContent,
		javascriptCodeContent,
		htmlCodeContent,
		jsonCodeContent
	}: Props = $props();

	// Clean all provided code contents
	const cleanedSvelteCode = svelteCodeContent ? cleanCodeIndentation(svelteCodeContent) : undefined;
	const cleanedTypescriptCode = typescriptCodeContent ? cleanCodeIndentation(typescriptCodeContent) : undefined;
	const cleanedCssCode = cssCodeContent ? cleanCodeIndentation(cssCodeContent) : undefined;
	const cleanedJavascriptCode = javascriptCodeContent ? cleanCodeIndentation(javascriptCodeContent) : undefined;
	const cleanedHtmlCode = htmlCodeContent ? cleanCodeIndentation(htmlCodeContent) : undefined;
	const cleanedJsonCode = jsonCodeContent ? cleanCodeIndentation(jsonCodeContent) : undefined;

	// Clean custom tab items if provided
	const cleanedTabItems = tabItems?.map(item => ({
		...item,
		content: cleanCodeIndentation(item.content)
	}));
</script>

<CodeShowcase
	{titleText}
	tabItems={cleanedTabItems}
	svelteCodeContent={cleanedSvelteCode}
	typescriptCodeContent={cleanedTypescriptCode}
	cssCodeContent={cleanedCssCode}
	javascriptCodeContent={cleanedJavascriptCode}
	htmlCodeContent={cleanedHtmlCode}
	jsonCodeContent={cleanedJsonCode}
/>