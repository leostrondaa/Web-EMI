
const data_regionals = []

function addRegional() {
    
    const form = document.querySelector('#formRegional')
    const input_sigla = form.querySelector('input[name="sigla"]').value
    const input_cidade = form.querySelector('input[name="cidade"]').value
    
    const row = {
        id: data_regionals.length + 1,
        sigla: input_sigla.toUpperCase(),
        cidade: input_cidade.toUpperCase(),
    }
        
    data_regionals.push(row)
    addSelectRegional(row)
    addTableRegional(row)
    drawChart()
}

function addTableRegional(row) {
    
    const table = document.querySelector('#table_regional');
    
    const line = document.createElement('tr')
    
    const col_id = document.createElement('td')   
    col_id.textContent = row.id
    const col_sigla = document.createElement('td')   
    col_sigla.textContent = row.sigla
    const col_cidade = document.createElement('td')   
    col_cidade.textContent = row.cidade
    
    line.appendChild(col_id);
    line.appendChild(col_sigla);
    line.appendChild(col_cidade);
    table.appendChild(line);
}

function  addSelectRegional(row) {

    const select = document.querySelector('#select_regional');
    const op = document.createElement("option");
    op.textContent = row.sigla
    op.value = row.sigla
    select.appendChild(op)
}
