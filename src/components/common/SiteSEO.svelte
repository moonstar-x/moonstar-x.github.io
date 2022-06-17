<script lang="ts">
  export let title: string|null = null;
  export let description: string|null = null;
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
    <meta name="title" content={title} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>
