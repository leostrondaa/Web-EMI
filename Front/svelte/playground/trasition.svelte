<script>
  import { fade } from 'svelte/transition';

  let visible = true;
</script>

<button on:click={() => visible = !visible}>
  Alternar visibilidade
</button>

{#if visible}
  <div transition:fade>
    Este texto aparece e desaparece com efeito de fade.
  </div>
{/if}

