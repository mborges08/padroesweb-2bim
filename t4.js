const prompt = require('prompt-sync')();


const numeroSecreto = 7;


console.log('Bem-vindo ao jogo de adivinhação!');
console.log('Tente adivinhar o número secreto entre 0 e 10.');


let palpite;
let tentativas = 0;
let acertou = false;

while (!acertou) {
    palpite = parseInt(prompt('Qual é o seu palpite? '));
    tentativas++;

    if (palpite === numeroSecreto) {
        console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
        acertou = true;
    } else if (palpite < numeroSecreto) {
        console.log('O número secreto é maior. Tente novamente.');
    } else {
        console.log('O número secreto é menor. Tente novamente.');
    }
}

console.log('Obrigado por jogar!');
