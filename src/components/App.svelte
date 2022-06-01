<script lang="ts">
	import Navbar from './common/navbar/Navbar.svelte';
</script>

<main>
	<Navbar />
	<div class="content">
		<p>This section is empty.</p>
	</div>
</main>

<style lang="scss">
	@import './src/styles/variables.scss';
	
	div {

		&.content {
			margin: 0% $content-horizontal-margin;
		}
	}
</style>