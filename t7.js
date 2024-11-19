const prompt = require('prompt-sync')();


function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}


function calculadora() {
    console.log("Bem-vindo à calculadora!");

    while (true) {
        console.log("\nEscolha uma opção:");
        console.log("1. Soma");
        console.log("2. Subtração");
        console.log("3. Multiplicação");
        console.log("4. Divisão");
        console.log("5. Sair");

        let opcao = prompt("Digite o número da opção desejada: ");

        if (opcao === '5') {
            console.log("Até a próxima!");
            break;
        }

        if (!['1', '2', '3', '4'].includes(opcao)) {
            console.log("Opção inválida. Tente novamente.");
            continue;
        }

        let num1 = parseFloat(prompt("Digite o primeiro número: "));
        let num2 = parseFloat(prompt("Digite o segundo número: "));

        let resultado;
        switch (opcao) {
            case '1':
                resultado = soma(num1, num2);
                console.log(`Resultado da soma: ${resultado}`);
                break;
            case '2':
                resultado = subtracao(num1, num2);
                console.log(`Resultado da subtração: ${resultado}`);
                break;
            case '3':
                resultado = multiplicacao(num1, num2);
                console.log(`Resultado da multiplicação: ${resultado}`);
                break;
            case '4':
                resultado = divisao(num1, num2);
                console.log(`Resultado da divisão: ${resultado}`);
                break;
        }
    }
}

calculadora();
