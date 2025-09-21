<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/components/layout', { replaceState: true });
	});
</script>

<svelte:head>
	<meta http-equiv="refresh" content="0; url=/components/layout">
</svelte:head>

<!-- Fallback for non-JS users -->
<p>Redirecting to <a href="/components/layout">Components Layout</a>...</p>