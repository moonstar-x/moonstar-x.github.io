<script lang="ts">
  export let text: string;
  export let url: string;
</script>

<a href={url}>
  <slot name="pre" />
  {text}
</a>
