<script lang="ts">
  export let text: string;
  export let url: string;
</script>

<a href={url} target="_blank">
  <div class="btn-inner">
    <slot name="pre" />
    <span>
      {text}
    </span>
  </div>
</a>

<style lang="scss">
  @import '../../../lib/styles/variables.scss';

  a {
    text-decoration: none;
    padding: 8px 12px;
    border-radius: $std-border-radius;
    color: black;
    background-color: $accent-color;
    display: inline-block;
    margin: 1rem;
    font-size: 1.2em;

    &:visited {
      text-decoration: none;
    }

    &:active, &:focus, &:hover, &:focus-visible {
      background-color: $accent-color-light;
    }
  }

  .btn-inner {
    display: flex;
    align-items: center;
    gap: 2px;
  }
</style>

