var ola = "Olá Mundo JS";
console.log(ola);

function log(valor){
    console.log(valor);
}

// Tipos de váriaveis

var valor = 10;
log(typeof valor); 

var palavra = "Fernando";
log(typeof palavra);

var isOK = true;
log(typeof isOK);

var meuObj = {} 
var meuArray = [];
var nulo = null;
var variavelFlamengo;


// Escopo de variável
function compararEscopo() {
    if (true) {
        var varDentro = "Var dentro do bloco";
        let letDentro = "Let dentro do bloco";
        const constDentro = "Const dentro do bloco";

        log(varDentro);
        log(letDentro);
        log(constDentro);
    }
    log(varDentro);
}
compararEscopo();

// Operações Simples

const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2);
log(n1 * n2);


log(n1 == n2);
log(n2 == valorNumericoStr);
log(n2 === valorNumericoStr);

// Manipulando Arrays

let frutas = ["Maça","Banana","Laranja"];

log(frutas.length);
log(frutas[0]);

log(frutas);

frutas.pop();

log(frutas);

frutas.push("Manga");

log(frutas);

// Estruturas condicionais
const idade = 18;
if(idade >= 18) {
    log("Sou Adulto");
}else if(idade >= 2) {
    log("Sou criança")
}else {
    ("Sou bebê")
}

const instituicao = "CEUB";

switch(instituicao) {
    case "CEUB":
        log("Faculdade");
        break;
    case "CIL":
        log("Escola de Línguas");
        break;
    case "CEM10":
        log("Escola");
        break;
}

for (let loop = 1; loop < 5; loop++) {
    log(`"Meu valor no loop: "${loop}`);
}

let valorWhile = 0;
while(valorWhile < 5) {
    log(`Meu valor no While: ${valorWhile}`);
    valorWhile++;
}

// Função Assíncronas permitem executar operações 
// sem bloquear a execução do código 

async function buscarDados() {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve("Dados Recebidos");
        }, 4*1000);
    });
}

async function executarBusca() {
    log("Buscando.....");
    let resultado = await buscarDados();
    log(resultado);
}

executarBusca();

const meuMetodo = function exemploMetodo() {
    log("Executei por metodo normal");
}

log(meuMetodo);

const objTeste = {
    oi() {
        log("oi");
    },
    tchau() {
        log("tchau");
    },
};

objTeste.oi();
objTeste.tchau();

document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botao");
    const imagem = document.getElementById("imagem");

    botao.addEventListener("click", function () {
        if (imagem.style.display === "none") {
            imagem.style.display = "block";
            botao.textContent = "Hide"; // muda o texto do botão
        } else {
            imagem.style.display = "none";
            botao.textContent = "Show";
        }
    });
});