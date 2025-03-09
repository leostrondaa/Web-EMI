<script>
  function handleClick(node) {
    function handleEvent(event) {
      alert('Elemento clicado!');
    }

    node.addEventListener('click', handleEvent);

    return {
      destroy() {
        node.removeEventListener('click', handleEvent);
      }
    };
  }
</script>

<div use:handleClick>
  Clique aqui!
</div>
