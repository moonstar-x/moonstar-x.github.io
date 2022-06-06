<script lang="ts">
	import Navbar from './common/navbar/Navbar.svelte';
	import Feature from './common/Feature.svelte';
	import Projects from './common/Projects.svelte';
	import About from './common/About.svelte';
</script>

<main>
	<Navbar />
	<div class="content">
		<Feature />
		<Projects />
	</div>
	<div class="content colored">
		<About />
	</div>
</main>

<style lang="scss">
	@import './src/styles/variables.scss';

	main {
		padding-bottom: 2rem;
	}
	
	.content {
		padding: 0% $content-horizontal-margin;

		&.colored {
			background-color: $bg-color-light;
		}
	}
</style>
