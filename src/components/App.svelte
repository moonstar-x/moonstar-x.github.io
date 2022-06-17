<script lang="ts">
	import SiteSEO from './common/SiteSEO.svelte';
	import Navbar from './common/navbar/Navbar.svelte';
	import Feature from './common/Feature.svelte';
	import Projects from './common/Projects.svelte';
	import About from './common/About.svelte';
	import Contact from './common/Contact.svelte';
	import Footer from './common/Footer.svelte';
</script>

<main>
	<SiteSEO title="hi there" description="what is this" />
	<Navbar />
	<div class="content">
		<Feature />
		<Projects />
	</div>
	<div class="content colored">
		<About />
	</div>
	<div class="content">
		<Contact />
	</div>
	<Footer />
</main>

<style lang="scss">
	@import './src/styles/variables.scss';

	main {
		padding: 0;
	}
	
	.content {
		padding: 0% $content-horizontal-margin;

		&.colored {
			background-color: $bg-color-light;
		}
	}
</style>
