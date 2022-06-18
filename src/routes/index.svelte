<script lang="ts">
  /* eslint-disable indent */
  /* eslint-disable camelcase */
  import '../lib/styles/global.scss';
  import { TwitterCard } from '../lib/types/seo';
  import SiteSEO from '../lib/components/SiteSEO.svelte';
  import Navbar from '../lib/components/navbar/Navbar.svelte';
  import Feature from '../lib/components/Feature.svelte';
  import Projects from '../lib/components/Projects.svelte';
  import About from '../lib/components/About.svelte';
  import Contact from '../lib/components/Contact.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import { locale } from '../lib/stores/app';
  import { CANONICAL_URL, TWITTER_HANDLE } from '../lib/constants';

  const dataSEO = {
    title: "Hi, I'm moonstar-x",
    description: "Hi, I'm Christian, a soon-to-be software engineer with a passion for programming. I spend my free time learning new technlologies and developing fun stuff.",
    author: 'moonstar-x',
    keywords: ['moonstar', 'moonstar-x', 'software', 'development', 'programming'],
    canonical: CANONICAL_URL,
    openGraph: {
      type: 'website',
      determiner: '',
      locale: $locale as string,
      site_name: 'moonstar-x'
    },
    openGraphImage: {
      url: `${CANONICAL_URL}/img/me.jpg`,
      type: 'image/jpeg',
      width: '690',
      height: '690',
      alt: 'Me'
    },
    twitter: {
      card: TwitterCard.Summary,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      image: `${CANONICAL_URL}/img/me.jpg`,
      'image:alt': 'Me'
    }
  };
</script>

<SiteSEO {...dataSEO} />
{#key $locale}
	<main>
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
