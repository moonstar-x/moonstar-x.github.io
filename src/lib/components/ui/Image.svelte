<script lang="ts">
  export let src: string;
  export let alt: string = 'Image';
  export let rounded: boolean = false;
</script>

<img src={src} alt={alt} class:rounded={rounded} />

<style lang="scss">
  @import '../../../lib/styles/variables.scss';


  .rounded {
    border-radius: 50%;
  }

  img {
    width: var(--width);
    height: var(--height);
  }

  @media (max-width: map-get($breakpoints, 'md')) {
    img {
      width: var(--mobile-width);
      height: var(--mobile-height);
    }
  }
</style>
