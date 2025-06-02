function ex03() {
    
    const form = document.querySelector('#form03')
    const input = form.querySelector('input[name="in_03"]').value
    
    // dividindo elementos por espaço
    arrayInput = input.split(' ')
    
    //transformando cada valor da string em numeros
    arrayInput = arrayInput.map(item => parseFloat(item));
    //selecionando h1 com tal id
    const output = document.querySelector('#output')
    //output recebe o valor retornado da função, OBS: "..." para espalhar os valores como argumentos
    output.innerHTML = resolve03(...arrayInput)
    form.reset()
}

function resolve03() {
    arrayOutput = []
    for (const i in arguments) {
        // ? se true == par senao impar
        arrayOutput.push(isEven(arguments[i])? 'PAR':'IMPAR');
    }
     // Junta os resultados em linhas separadas
    return arrayOutput.join('\n');
} 

function isEven(val) {
    // retorna true se o número for par e false
    return val % 2 === 0;
}





