// https://dev.to/oieduardorabelo/svelte-3-guia-para-o-desenvolvedor-react-impaciente-52i5

<script>
  export let handleSubmit = function(event) {
    // valor padrão da prop
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="search">Search:</label>
  <input type="search" id="search" required />
  <button type="submit">Search</button>
</form>
