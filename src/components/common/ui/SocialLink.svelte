<script lang="ts">
  import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
  import Fa from 'svelte-fa/src/fa.svelte';

  export let url: string;
  export let icon: IconDefinition;
</script>

<a href={url}>
  <Fa icon={icon} size="lg" />
</a>

<style lang="scss">
  @import './src/styles/variables.scss';

  a {
    text-decoration: none;
    padding: 0.75rem;
    color: $text-color-muted;
    display: inline-block;

    &:visited {
      text-decoration: none;
    }

    &:active, &:focus, &:hover, &:focus-visible {
      color: $text-color;
    }
  }  
</style>
