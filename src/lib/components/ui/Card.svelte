<script lang="ts">
  export let title: string|null = null;
  export let subtitle: string|null = null;
  export let description: string|null = null;
  export let footer: string|null = null;
  export let color: string = '#fff';
</script>

<div class="card" style:border-color={color}>
  {#if title}
    <h1>
      {title}
    </h1>
  {/if}
  {#if subtitle}
    <h2>
      {subtitle}
    </h2>
  {/if}
  {#if description}
    <p>
      {description}
    </p>
  {/if}
  <slot />
  {#if footer}
    <footer>
      {footer}
    </footer>
  {/if}
</div>

<style lang="scss">
  @import '../../../lib/styles/variables.scss';

  .card {
    border-radius: $std-border-radius;
    border-left-width: 8px;
    border-left-style: solid;
    background-color: $bg-color-light;
    padding: 1.5rem;

    flex: 1 25%;
  }

  h1 {
    margin: 0;
    font-weight: normal;
    font-size: 1.5em;
  }

  h2 {
    margin: 0;
    font-weight: normal;
    font-size: 1.1em;
    color: $text-color-muted;
  }

  footer {
    margin-top: 1rem;
  }
</style>
