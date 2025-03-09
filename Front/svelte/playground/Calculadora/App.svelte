<script>
  let display = '0';
  let operator = null;
  let previousValue = null;

  function handleNumberClick(number) {
    if (display === '0') {
      display = number;
    } else {
      display += number;
    }
  }

  function handleOperatorClick(op) {
    operator = op;
    previousValue = parseFloat(display);
    display = '0';
  }

  function handleEqualsClick() {
    const currentValue = parseFloat(display);
    let result = 0;

    switch (operator) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '*':
        result = previousValue * currentValue;
        break;
      case '/':
        result = previousValue / currentValue;
        break;
    }

    display = result.toString();
    operator = null;
    previousValue = null;
  }
</script>

<style>
  /* Estilos CSS para a calculadora */
</style>

<div>
  <input type="text" value={display} readonly>

  <div>
    <button on:click={() => handleNumberClick('7')}>7</button>
    <button on:click={() => handleNumberClick('8')}>8</button>
    <button on:click={() => handleNumberClick('9')}>9</button>
    <button on:click={() => handleOperatorClick('/')}>/</button>
  </div>

  <div>
    <button on:click={() => handleNumberClick('4')}>4</button>
    <button on:click={() => handleNumberClick('5')}>5</button>
    <button on:click={() => handleNumberClick('6')}>6</button>
    <button on:click={() => handleOperatorClick('*')}>*</button>
  </div>

  <div>
    <button on:click={() => handleNumberClick('1')}>1</button>
    <button on:click={() => handleNumberClick('2')}>2</button>
    <button on:click={() => handleNumberClick('3')}>3</button>
    <button on:click={() => handleOperatorClick('-')}>-</button>
  </div>

  <div>
    <button on:click={() => handleNumberClick('0')}>0</button>
    <button on:click={() => handleOperatorClick('+')}>+</button>
    <button on:click={handleEqualsClick}>=</button>
  </div>
</div>
