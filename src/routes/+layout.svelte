<script lang="ts">
	import { ConfigProvider } from '@keenmate/svelte-docs';
	import '../app.scss';

	export let data;
</script>

<ConfigProvider configData={data.config}>
	<slot />
</ConfigProvider>