<script lang="ts">
  export let text: string;
  export let url: string;
</script>

<a href={url} target="_blank">
  <slot name="pre" />
  {text}
</a>

<style lang="scss">
  @import '../../../lib/styles/variables.scss';

  a {
    text-decoration: none;
    padding: 8px 12px;
    border: 2px solid $button-border-color;
    border-radius: $std-border-radius;
    color: $button-color;
    background-color: $button-bg-color;
    display: inline-block;

    &:visited {
      text-decoration: none;
    }

    &:active, &:focus, &:hover, &:focus-visible {
      background-color: $bg-color-lighter;
    }
  }
</style>
