
const data_agents = []

function addAgent() {
    
    const form = document.querySelector('#formAgent')
    const input_nome = form.querySelector('input[name="nome"]').value
    const input_regional = form.querySelector('select[name="regional"]').value

    const row = {
        id: data_agents.length + 1,
        nome: input_nome.toUpperCase(),
        regional: input_regional.toUpperCase(),
    }
        
    data_agents.push(row)
    addSelectAgent(row)
    addTableAgent(row)
    drawChart()
}

function addTableAgent(row) {
    
    const table = document.querySelector('#table_agent');
    
    const line = document.createElement('tr')
    
    const col_id = document.createElement('td')   
    col_id.textContent = row.id
    const col_nome = document.createElement('td')   
    col_nome.textContent = row.nome
    const col_regional = document.createElement('td')   
    col_regional.textContent = row.regional
    
    line.appendChild(col_id);
    line.appendChild(col_nome);
    line.appendChild(col_regional);
    table.appendChild(line);
}

function addSelectAgent(row) {

    const select = document.querySelector('#select_agent');
    const op = document.createElement("option");
    op.textContent = row.nome
    op.value = row.nome
    select.appendChild(op)
}

