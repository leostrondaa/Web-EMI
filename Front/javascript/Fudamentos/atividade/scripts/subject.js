
const data_subjects = []

function addSubject() {
    
    const form = document.querySelector('#formSubject')
    const input_assunto = form.querySelector('input[name="descricao"]').value

    const row = {
        id: data_subjects.length + 1,
        assunto: input_assunto.toUpperCase(),
    }
        
    data_subjects.push(row)
    addSelectSubject(row)
    addTableSubject(row)
}

function addTableSubject(row) {
    
    const table = document.querySelector('#table_subject');
    
    const line = document.createElement('tr')
    
    const col_id = document.createElement('td')   
    col_id.textContent = row.id
    const col_assunto = document.createElement('td')   
    col_assunto.textContent = row.assunto
    
    line.appendChild(col_id)
    line.appendChild(col_assunto)
    table.appendChild(line)
    drawChart()
}

function  addSelectSubject(row) {

    const select = document.querySelector('#select_subject');
    const op = document.createElement("option");
    op.textContent = row.assunto
    op.value = row.assunto
    select.appendChild(op)
}
