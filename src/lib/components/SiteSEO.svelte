<script lang="ts">
  import type { OpenGraphData, OpenGraphImageData, TwitterData } from '../types/seo';

  export let title: string|null = null;
  export let description: string|null = null;
  export let author: string|null = null;
  export let keywords: string[]|null = null;
  export let canonical: string|null = null;
  export let openGraph: OpenGraphData|null = null;
  export let openGraphImage: OpenGraphImageData|null = null;
  export let twitter: TwitterData|null = null;

  if (openGraph) {
    if (title && !openGraph.title) {
      openGraph.title = title;
    }

    if (description && !openGraph.description) {
      openGraph.description = description;
    }

    if (canonical && !openGraph.url) {
      openGraph.url = canonical;
    }
  }

  if (twitter) {
    if (title && !twitter.title) {
      twitter.title = title;
    }

    if (description && !twitter.description) {
      twitter.description = description;
    }
  }

  let openGraphKeys = Object.keys(openGraph || {}) as (keyof OpenGraphData)[];
  let openGraphImageKeys = Object.keys(openGraphImage || {}) as (keyof OpenGraphImageData)[];
  let twitterKeys = Object.keys(twitter || {}) as (keyof TwitterData)[];
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
    <meta name="title" content={title} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
  {/if}

  {#if author}
    <meta name="author" content={author} />
  {/if}

  {#if keywords}
    <meta name="keywords" href={keywords.join(', ')} />
  {/if}

  {#if canonical}
    <link rel="canonical" href={canonical} />
  {/if}

  {#if openGraph}
    {#each openGraphKeys as key}
      <meta name={`og:${key}`} content={openGraph[key]} />
    {/each}
  {/if}

  {#if openGraphImage}
    {#each openGraphImageKeys as key}
      <meta name={`og:image:${key}`} content={openGraphImage[key]} />
    {/each}
  {/if}

  {#if twitter}
    {#each twitterKeys as key}
      <meta name={`twitter:${key}`} content={twitter[key]} />
    {/each}
  {/if}
</svelte:head>
