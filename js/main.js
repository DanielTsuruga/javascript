let nome = "Daniel Eiji";
let numero = 5;
let numeroReal = 5.2;
let ligado = true;

// EXEMPLO
nome = prompt("Nome: ");
let resposta = confirm("Você confirma?");
console.log("Nome: " + nome + "\nConfirmado: " + resposta)

// estruturas de controle
// seleção

let x = 12;
let y = 7;

if(x > y) {
    console.log("X é maior que Y")
}

// seleção composta
let idade = 20;
const MAIOR_IDADE = 18;

if (idade >= MAIOR_IDADE) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

// operador ternario
let resultado = (idade >= MAIOR_IDADE) ? "Maior de idade" : "Menor de idade"
console.log (resultado);

// seleção multipla (switch)
let tipousuario = "A"

switch (tipousuario) {
    case "A":
        console.log("Aluno");
        break;
    case "P":
        console.log("Profesor");
        break;
    case "F":
        console.log ("Funcionario");
        break;
    default:
        console.error("Invalido");
        break;
}

// if / else
let dataAtual = new Date();
let horaAtual = dataAtual.getHours();

if(horaAtual < 12) {
    console.log("bom dia")
} else if (horaAtual < 18) {
    console.log("boa tarde")
} else {
    console.log ("boa noite")
}

// estrutura de repetição
// for: usando quando o numero de iterações é conhecido
for (let i = 0; i < 5; i++) {
    console.log(i+" ");
}

for (let i = 5; i >= 0; i--) {
    console.log(i);
}

// While: usando quando é condição de parada não é pré determinada
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// do/While: executa o bloco de codigo pelo menos uma vez, e depois verifica
contador = 0

do {
    console.log(contador);
    contador++;
} while(contador < 5);