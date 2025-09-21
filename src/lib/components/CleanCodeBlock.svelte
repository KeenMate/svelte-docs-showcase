<script lang="ts">
	import { CodeBlock } from '@keenmate/svelte-docs';
	import { cleanCodeIndentation } from '$lib/utils/code-formatter.js';

	interface Props {
		codeContent: string;
		languageType?: string;
		titleText?: string;
		isCopyable?: boolean;
	}

	let { codeContent, languageType, titleText, isCopyable = true }: Props = $props();

	// Automatically clean the code content
	const cleanedCode = cleanCodeIndentation(codeContent);
</script>

<CodeBlock
	codeContent={cleanedCode}
	{languageType}
	{titleText}
	{isCopyable}
/>