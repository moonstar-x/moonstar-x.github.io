<script lang="ts">
	import '../lib/styles/global.scss';
	import SiteSEO from '../lib/components/SiteSEO.svelte';
	import Navbar from '../lib/components/navbar/Navbar.svelte';
	import Feature from '../lib/components/Feature.svelte';
	import Projects from '../lib/components/Projects.svelte';
	import About from '../lib/components/About.svelte';
	import Contact from '../lib/components/Contact.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import { locale } from '../lib/stores/app';
</script>

{#key $locale}
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
{/key}

<style lang="scss">
	@import '../lib/styles/variables.scss';

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
