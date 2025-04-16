// Seleciona os elementos simulados
const elementosSimulados = document.querySelectorAll('.elementos-simulados'); 
// Seleciona todos os elementos com a classe "elementos-simulados" para aplicar alterações neles.

// Variável para armazenar a última cor selecionada
let ultimaCor = '';

// Gerencia a troca de cores
document.querySelectorAll('th').forEach((th) => { 
    // Seleciona todas as células (<th>) da tabela e itera sobre elas.
    th.addEventListener('click', () => { 
        // Adiciona um evento de clique a cada célula.
        const cor = getComputedStyle(th).backgroundColor; 
        // Obtém a cor de fundo da célula clicada.
        ultimaCor = cor; 
        // Armazena a cor selecionada na variável global.
        elementosSimulados.forEach(el => el.style.backgroundColor = cor); 
        // Aplica a cor de fundo da célula clicada a todos os elementos simulados.
        document.querySelectorAll('.formato1, .formato2').forEach(el => {
            el.style.backgroundColor = cor;
        });
    });
});

// Gerencia a troca de tamanhos
document.getElementById('numeros').addEventListener('change', (event) => { 
    // Adiciona um evento de mudança ao <select> com o ID "numeros".
    const tamanho = event.target.value + 'px'; 
    // Obtém o valor selecionado no <select> e adiciona "px" para definir o tamanho.
    elementosSimulados.forEach(el => { 
        // Itera sobre todos os elementos simulados.
        el.style.width = tamanho; 
        // Define a largura do elemento simulados com o valor selecionado.
        el.style.height = tamanho; 
        // Define a altura do elemento simulados com o valor selecionado.
    });
});

// Gerencia a troca de formatos (bordas)
document.querySelectorAll('th').forEach((th) => {
    th.addEventListener('click', () => {

        elementosSimulados.forEach(el => {
            if (th.classList.contains('formato2')) {
                // Se a célula clicada tiver a classe formato2, aplica o formato círculo
                el.classList.remove('formato1');
                el.classList.add('formato2');
            } else if (th.classList.contains('formato1')) {
                // Se a célula clicada tiver a classe formato1, aplica o formato quadrado
                el.classList.remove('formato2');
                el.classList.add('formato1');
            }
        });
    });
});

// Gerencia o alinhamento flexbox
document.getElementById('alinhamento1').addEventListener('change', (event) => {
    const valor = event.target.value;
    document.querySelector('main').style.flexDirection = valor;
});

document.getElementById('alinhamento2').addEventListener('change', (event) => {
    const valor = event.target.value;
    document.querySelector('main').style.justifyContent = valor;
});

document.getElementById('alinhamento3').addEventListener('change', (event) => {
    const valor = event.target.value;
    document.querySelector('main').style.alignItems = valor;
});