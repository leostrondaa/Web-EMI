<script>
  function customTransition(node, { textColor, bgColor }) {
    return {
      duration: 1000,
      tick: (t) => {
        node.style.backgroundColor = `rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, ${t})`;
        node.style.color = textColor;
      }
    };
  }

  let visible = true;
</script>

<button on:click={() => visible = !visible}>
  Alternar visibilidade
</button>

{#if visible}
  <div transition:customTransition={
		{ textColor: 'white', bgColor: [10, 100, 10]}
	}>
    Este texto aparece e desaparece com transição customizada.
  </div>
{/if}

