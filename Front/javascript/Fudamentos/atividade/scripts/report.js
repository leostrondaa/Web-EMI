
const data_reports = []

function addReport() {
    
    const form = document.querySelector('#formReport')
    const input_data = form.querySelector('input[name="data"]').value
    const input_assunto = form.querySelector('select[name="assunto"]').value
    const input_agente = form.querySelector('select[name="agente"]').value

    const row = {
        id: data_reports.length + 1,
        data: input_data,
        assunto: input_assunto.toUpperCase(),
        agente: input_agente.toUpperCase(),
    }
        
    data_reports.push(row)
    addTableReport(row)
    drawChart()
}

function addTableReport(row) {
    
    const table = document.querySelector('#table_report');
    
    const line = document.createElement('tr')
    
    const { id, data, assunto, agente } = row;

    // alert(id + " \ " + data + " \ " + assunto + " \ " + agente)

    const col_id = document.createElement('td')   
    col_id.textContent = id
    const col_data = document.createElement('td')   
    col_data.textContent = data
    const col_assunto = document.createElement('td')   
    col_assunto.textContent = assunto
    const col_agente = document.createElement('td')   
    col_agente.textContent = agente

    line.appendChild(col_id);
    line.appendChild(col_data);
    line.appendChild(col_assunto);
    line.appendChild(col_agente);
    table.appendChild(line);
}
