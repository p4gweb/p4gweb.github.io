<script>
  export let title;
</script>

<svelte:head>
    <title>{title ? `${title} - Phase 4 Ground` : 'Phase 4 Ground'}</title>
</svelte:head>

<slot></slot>

