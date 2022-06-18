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

  .btn-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
</style>
