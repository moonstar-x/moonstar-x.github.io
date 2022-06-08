<script lang="ts">
  export let text: string;
  export let url: string;
</script>

<a href={url} target="_blank">
  <slot name="pre" />
  {text}
</a>

<style lang="scss">
  @import './src/styles/variables.scss';

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
</style>

