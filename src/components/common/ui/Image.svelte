<script lang="ts">
  export let src: string;
  export let alt: string = 'Image';
  export let rounded: boolean = false;

  export let width: string|number = '100%';
  export let height: string|number = '100%';
</script>

<img src={src} alt={alt} class:rounded={rounded} style:width={width} style:height={height} />

<style lang="scss">
  .rounded {
    border-radius: 50%;
  }
</style>
