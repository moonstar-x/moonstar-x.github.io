<script lang="ts">
  import NavbarBrand from './NavbarBrand.svelte';
  import NavbarButton from './NavbarButton.svelte';

  const buttons = [
    { text: 'GitHub', url: 'https://github.com/moonstar-x' },
    { text: 'Projects', url: '#projects' },
    { text: 'About', url: '#about' },
    { text: 'Contact', url: '#contact' }
  ];

</script>

<nav>
  <div class="left">
    <NavbarBrand />
  </div>

  <ul class="right">
    {#each buttons as { text, url }}
      <li>
        <NavbarButton text={text} url={url} />
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  @import './src/styles/variables.scss';

  nav {
    display: flex;
    padding: 5% $content-horizontal-margin;
  }

  div {
    display: inline-block;

    &.left {
      text-align: left;
      margin: auto 0;
    }
  }

  ul {
    list-style: none;
    display: inline-block;
    padding: 0;
    margin: 0;

    &.right {
      text-align: right;
      flex: 1;
    }
  }

  li {
    display: inline-block;
    margin: 0.75rem;
  }
</style>
