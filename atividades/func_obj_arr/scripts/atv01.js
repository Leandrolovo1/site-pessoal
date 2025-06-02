
function ex01() {
    
    const form = document.querySelector('#form01')
    const input = form.querySelector('input[name="in_01"]').value
    
    // dividindo elementos por espaço
    arrayInput = input.split(' ')
    
    //transformando cada valor da string em numeros
    arrayInput = arrayInput.map(item => parseFloat(item));
    //selecionando h1 com tal id
    const output = document.querySelector('#output')
    //output recebe o valor retornado da função, OBS: "..." para espalhar os valores como argumentos
    output.textContent = resolve01(...arrayInput)
    form.reset()
}

function resolve01() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return (soma = soma/arguments.length).toFixed(2);
} 



