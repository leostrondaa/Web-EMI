<script>
  let count = 0;
  // let dobro = count * 2;
  $: dobro = count * 2;
</script>
<button on:click={() => count++}>Contador: {count}</button>
<p>Dobro: {dobro}</p>
