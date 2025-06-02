
function ex04() {
    
    const form = document.querySelector('#form04')
    const input = form.querySelector('input[name="in_04"]').value
    // dividindo elementos por espaço
    arrayInput = input.split(' ')
    
    //transformando cada valor da string em numeros
    arrayInput = arrayInput.map(item => parseFloat(item));
    //selecionando h1 com tal id
    const output = document.querySelector('#output')
    //output recebe o valor retornado da função, OBS: "..." para espalhar os valores como argumentos
    output.innerHTML = resolve04(...arrayInput)
    
    form.reset()
}

function resolve04() {
    arrayOutput = []
    //arguments não é um vetor de verdade, logo nao tem algumas funções, por isso que tive que usar esse array.from
    const perfeitos = arrayOutput = Array.from(arguments).filter(num => filter_perfeito(num));
    
    return perfeitos.length > 0 ? perfeitos.join(' ') : 'Nenhum número perfeito encontrado.';
    

}

const filter_perfeito = (val) =>  {
    somaDivisores = 0;
    for (let index = 1; index < val; index++) {
        if(val % index == 0){
            somaDivisores += index;
        }
    }
    return somaDivisores === val && val !== 0;
}

