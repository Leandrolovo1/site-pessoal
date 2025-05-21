const data_regionals = []

function addRegional() {
    
    /*
    -------------------------
    PARTE QUE RECEBE OS DADOS
    -------------------------
    */
    id = data_regionals.length;
    const form = document.querySelector('#formRegional')
    
    const inputSigla = form.querySelector('input[name="sigla"]')
    const inputCidade = form.querySelector('input[name="cidade"]')
    regiao = {
        sigla: inputSigla.value,
        cidade: inputCidade.value

    };
    data_regionals.push(regiao);
    console.log(data_regionals)

     /*
    ------------------------------
        PARTE QUE INSERE NA TABELA
        ---------------------------
    */

    const table = document.querySelector('#table_regional')

    const line = document.createElement('tr')
    const columId = document.createElement('td')
    const columSigla = document.createElement('td')
    const columCidade = document.createElement('td')

    columId.textContent = id +1;
    columSigla.textContent = inputSigla.value
    columCidade.textContent = inputCidade.value

    line.appendChild(columId);
    line.appendChild(columSigla);
    line.appendChild(columCidade);
    table.appendChild(line)
    
    form.reset();
    


}   
