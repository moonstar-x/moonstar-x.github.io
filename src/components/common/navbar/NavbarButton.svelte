<script lang="ts">
  export let text: string;
  export let url: string;
</script>

<a href={url}>
  {text}
</a>

<style lang="scss">
  @import './src/styles/variables.scss';

  a {
    text-decoration: none;
    padding: 8px 12px;
    border: 2px transparent solid;
    border-radius: $std-border-radius;
    color: $button-color;
    background-color: $button-bg-color;
    
    &:visited {
      text-decoration: none;
    }

    &:active, &:focus, &:hover, &:focus-visible {
      border: 2px solid $button-border-color;
    }
  }
</style>
