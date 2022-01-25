<script lang="ts">
import '../styles/tailwind-output.css';
import Footer from "$lib/footer.svelte";
import Navbar from "$lib/navbar.svelte";
</script>
<Navbar />
<main>
	<slot></slot>
</main>
<Footer />