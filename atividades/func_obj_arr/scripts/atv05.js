
function ex05() {
    
    const form = document.querySelector('#form05')
    const input = form.querySelector('input[name="in_05"]').value
        //'{"id": "1", "nome": 35, "media": "6"]}';
   let objetoInput;
   //tratamento de erros, estava cansado do js quebrar a pagina
    try {
        objetoInput = JSON.parse(input);
    } catch (error) {
        alert("[ERRO] Estrutura JSON inválida.\nTente novamente.");
        return;
    }
    const output = document.querySelector('#output');
    output.textContent = resolve05(objetoInput);
    form.reset();
}

function resolve05(obj) {
    let novoUsuario;
  
    novoUsuario = new usuario(obj)
    return novoUsuario.toString();       
   
}

class usuario
{
    constructor({id,nome,media}){
        this.id = id
        this.nome = nome
        this.media = media
    }
    toString() {
        return `id: ${this.id}\n nome: ${this.nome}\n media: ${this.media}`;
    }
}
   
