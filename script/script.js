const resultado = document.querySelector(' .result '); 
const confirmar = document.qyerySelector(' .igual ');

//Função para inserir os números no visor
function insert( valor ) {
    resultado.innerHTML += valor;
}

//Função para limpar o visor.
function clean() {
    resultado.innerHTML = ' ';
}

//Função para limpar o último número do visor.
function backspace() {
    if(resultado.textContent) {
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}

//Função para calcular as operações.
function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML);
    }
}