<script>
  let name = "";
  let items = ["Carlos", "Daniela", "Eduardo"];
	let showItems = false;

  function handleClick() {
		if(name != "") items.push(name);
		console.log(items);
    showItems = !showItems;
  }
</script>

<main>
  <input type="text" bind:value={name} placeholder="Digite seu nome">
  {#if name}
    <h1>Olá, {name}!</h1>
  {:else}
    <h1>Olá, Mundo!</h1>
  {/if}

  <button on:click={handleClick}>Clique aqui</button>
	<br><br>
  {#if showItems}
		{#each items as item}
      <li>{item}</li>
    {/each}
  {/if}
	
</main>

