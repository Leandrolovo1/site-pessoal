const data_subjects = []

function addsubject() {

    id = data_subjects.length;

    /*
    ------------------------------------------------------------------------
        parte de receber dados do usuario
    ------------------------------------------------------------------------

    */

    //referencia form do html
    const form = document.querySelector('#formSubject')
    
    // Obtém o valor do campo de entrada
    const input_descricao = form.querySelector('input[name="descricao"]')

    //adiciona esse elemento no array
    data_subjects.push(input_descricao)

    /*
    ------------------------------------------------------------------------
        parte de preencher a tabela
    ------------------------------------------------------------------------
    */

    //referencia table do html
    const table = document.querySelector('#table_subject')

    //essa variavel recebe um elemento tr
    const line = document.createElement('tr')

    //essa variavel recebe um elemento td
    const id_colum = document.createElement('td')

    //essa variavel recebe um elemento tr (conteudo)
    const colum_conteudo = document.createElement('td')

    //adiciona o texto do numero à variavel 
    id_colum.textContent = id +1;

    //adiciona o texto do conteudo à variavel 
    colum_conteudo.textContent = input_descricao.value

    //adiciona os elementos no html
    line.appendChild(id_colum);
    line.appendChild(colum_conteudo);
    table.appendChild(line);
    
    //reseta os campos
    form.reset()
}
