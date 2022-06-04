<script lang="ts">
  export let imageSource: string = '/android-chrome-192x192.png';
  export let text: string = 'moonstar-x';
</script>

<div tabindex="0">
  <img src={imageSource} alt="navbar-brand-logo" />
  <h1>{text}</h1>
</div>

<style lang="scss">
  div {
    padding: 1rem;
    display: inline-block;
  }

  img {
    display: inline-block;
    max-height: 2rem;
    max-width: 2rem;
    vertical-align: middle;
    margin-right: 0.5em;
  }
  
  h1 {
    display: inline-block;
    line-height: 2rem;
    vertical-align: middle;
    margin: 0;
  }
</style>
