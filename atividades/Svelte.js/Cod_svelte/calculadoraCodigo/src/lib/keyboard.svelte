<script>
    import { numeroVisor } from '$lib/store.js'; // Importa o store

    let numeroVisorAntes = null;
    let operador = null;

    function clickNumber(numero){
        // Note as mudanças: lendo com $ e atualizando com .set()
        if($numeroVisor === '0'){ 
            numeroVisor.set(numero);
        }else{
            numeroVisor.set($numeroVisor + numero); // Concatena e atualiza
        }
    }
    function clickOperador(op) {
        operador = op
        numeroVisorAntes = parseFloat($numeroVisor); // Acessa o valor do store
        numeroVisor.set('0'); // Atualiza o store
    }
    function clickEfetuarConta() {
        let resultado;
        let numeroAtual = parseFloat($numeroVisor) // Acessa o valor do store
        switch (operador) {
            case '+':
                resultado = numeroVisorAntes + numeroAtual;
                break;
            case '-':
                resultado = numeroVisorAntes - numeroAtual;
                break;
            case '*':
                resultado = numeroVisorAntes * numeroAtual;
                break;
            case '/':
                resultado = numeroVisorAntes / numeroAtual;
                break;
        }
        numeroVisor.set(resultado.toString()); // Atualiza o store
        operador = null
        numeroVisorAntes = null
    }
    function clickButtonC() {
        numeroVisor.set('0'); // Atualiza o store
        numeroVisorAntes = null
        operador = null;
    }
</script>
<main> 
    <div>
    <div>
        <button onclick={ () => clickNumber('1')}>1</button>
        <button onclick={ () => clickNumber('2')}>2</button>
        <button onclick={ () => clickNumber('3')}>3</button> 
        <button onclick={ () => clickOperador('+')}>+</button> 
    </div>
    <div>
        <button onclick={ () => clickNumber('4')}>4</button>
        <button onclick={ () => clickNumber('5')}>5</button> 
        <button onclick={ () => clickNumber('6')}>6</button> 
        <button onclick={ () => clickOperador('-')}>-</button> 
    </div>
    <div>
        <button onclick={ () => clickNumber('7')}>7</button> 
        <button onclick={ () => clickNumber('8')}>8</button> 
        <button onclick={ () => clickNumber('9')}>9</button> 
        <button onclick={ () => clickOperador('*')}>*</button> 
    </div>
    <div>
        <button onclick={ () => clickEfetuarConta()}>=</button> 
        <button onclick={ () => clickNumber('0')}>0</button> 
        <button onclick={ () => clickButtonC()}>C</button> 
        <button onclick={ () => clickOperador('/')}>/</button> 
    </div>
    </div>
</main>
<style>
    button {
        font-size: 1.5em;
        width: 50px;
        height: 50px;
        padding: 0.2em;
        margin: 0.2em;
        background-color: #ff3e00;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #ff5722;
    }

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>