const prompt = require('prompt-sync')();

let nome = String(prompt('Olá, qual o seu nome? '));
let idade = Number(prompt('Quantos anos você tem? '));
let lng = String(prompt('Qual linguagem de programação você está estudando? '));

console.log("Olá " + nome + ",você tem " + idade + " anos e já está aprendendo " + lng );

let gosto = String(prompt('Você gosta de estudar ' + lng + '? Responda com o número 1 para SIM ou 2 para NÃO '));
if (gosto == 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
}

if (gosto == 2){
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
}