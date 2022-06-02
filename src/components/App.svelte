<script lang="ts">
	import Navbar from './common/navbar/Navbar.svelte';
	import Feature from './common/Feature.svelte';
</script>

<main>
	<Navbar />
	<div class="content">
		<Feature />
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
