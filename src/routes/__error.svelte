<script context="module" lang="ts">
	import type { ErrorLoad } from "@sveltejs/kit";
	export const load: ErrorLoad = ({error, status}) => {
		return {
			props: {
				message: error.message,
				status
			}
		}
	}
</script>

<script lang="ts">
	import PageNotFound from "$lib/PageNotFound.svelte";

	export let status;
	export let message;
</script>

{#if status === 404}
	<PageNotFound />
{:else}
	<h1>{message}</h1>
{/if}