<script>
  let nome = "";
  let mensagem = "";

  function handleSubmit() {
    if (nome) {
      mensagem = `Olá, ${nome}!`;
			nome = ""; // Limpa o input após o envio
    } else {
      mensagem = "Por favor, digite seu nome.";
    }
  }
</script>

<main>
  <h1>Digite seu nome:</h1>
  <input type="text" bind:value={nome} placeholder="Seu nome aqui">
  <button on:click={handleSubmit}>Enviar</button>

  {#if mensagem}
    <p>{mensagem}</p>
  {/if}
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
    margin-bottom: 20px;
  }

  input[type="text"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  button {
    padding: 10px 20px;
		font-size: 16px;
		font-weight: bold;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  p {
    margin-top: 1rem;
    font-weight: bold;
  }
</style>

