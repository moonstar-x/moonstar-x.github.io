<script lang="ts">
  import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
  import type { DropdownItem } from '../../../types';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { createEventDispatcher } from 'svelte';
  
  export let icon: IconDefinition | null = null;
  export let label: string = '';
  export let items: DropdownItem[];

  const dispatch = createEventDispatcher();

  let dropdownVisible = false;
  const handleDropdownShow = () => {
    dropdownVisible = true;
  };
  const handleDropdownHide = () => {
    dropdownVisible = false;
  };

  const handleSelect = (e) => {
    const { value } = e.target.attributes['data-value'];
    dispatch('select', value);
  };
</script>

<div class="dropdown" on:mouseenter={handleDropdownShow} on:mouseleave={handleDropdownHide}>
  <button class:active={dropdownVisible}>
    {#if icon}
      <Fa icon={icon} size="lg" />
    {/if}
    {label}
  </button>
  {#if dropdownVisible}
    <ul>
      {#each items as { text, value }}
        <li data-value={value} on:click={handleSelect} on:select={handleSelect}>{text}</li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  @import './src/styles/variables.scss';

  .dropdown {
    position: relative;
    display: inline-block;
  }

  button {
    text-decoration: none;
    padding: 8px 12px;
    border: 2px transparent solid;
    border-radius: $std-border-radius;
    color: $button-color;
    background-color: $button-bg-color;
    cursor: pointer;

    &:active, &:focus, &:hover, &:focus-visible, &.active {
      border: 2px solid $button-border-color;
    }
  }

  ul {
    list-style: none;
    position: absolute;
    background-color: $bg-color-light;
    text-align: left;
    border-radius: $std-border-radius;
    padding: 0;
    right: 0;
  }

  li {
    display: block;
    padding: 1rem;

    &:active, &:focus, &:hover, &:focus-visible {
      background-color: $bg-color-lighter;
      cursor: pointer;
    }

    &:first-child {
      border-radius: $std-border-radius $std-border-radius 0 0;
    }

    &:last-child {
      border-radius: 0 0 $std-border-radius $std-border-radius;
    }
  }
</style>
