const data_subjects = []

function addsubject() {

    id = data_subjects.length;

    //referencia form do html
    const form = document.querySelector('#formSubject')
    
    // Obtém o valor do campo de entrada
    const input_descricao = form.querySelector('input[name="descricao"]')
    
    const table = document.querySelector('#table_subject')
    const line = document.createElement('tr')
    const id_colum = document.createElement('td')
    
    const colum_conteudo = document.createElement('td')
    data_subjects.push(input_descricao)
    id_colum.textContent = id +1;
    colum_conteudo.textContent = input_descricao.value
    line.appendChild(id_colum);
    line.appendChild(colum_conteudo);
    
    table.appendChild(line);
    form.reset()
}