<script>
  let nome = "mundo";
	
  function alterarNome() {
    nome = "Svelte";
  }
</script>
<main>
  <h1>Olá, {nome}!</h1>
	<br>
  <button on:click={alterarNome}>Clique aqui para mudar o nome</button>
</main>
<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
  }
  h1 {
    color: #333;
    margin-bottom: 10px;
  }
  button {
    padding: 20px 40px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
