const prompt = require('prompt-sync')();

let nome = prompt('Olá, qual o seu nome? ');

console.log(`Olá, ${nome}! Vamos começar sua jornada de aprendizado.`);

let area = prompt('Você quer seguir para a área de Front-End ou seguir para a área de Back-End? ').toLowerCase();

let especializacao;
if (area === 'front-end', 'front', 'Front') {
    especializacao = prompt('Escolha a especialização: React ou Vue? ').toLowerCase();
    while (especializacao !== 'react' && especializacao !== 'vue') {
        especializacao = prompt('Por favor, escolha entre "React" ou "Vue": ').toLowerCase();
    }
} else {
    especializacao = prompt('Escolha a especialização: C# ou Java? ').toLowerCase();
    while (especializacao !== 'c#' && especializacao !== 'java') {
        especializacao = prompt('Por favor, escolha entre "C#" ou "Java": ').toLowerCase();
    }
}


let caminho = prompt('Você quer [1] Seguir se especializando na área escolhida ou [2] Se tornar Fullstack? ');
while (caminho !== '1' && caminho !== '2') {
    caminho = prompt('Por favor, escolha entre [1] Especializar-se ou [2] Tornar-se Fullstack: ');
}

if (caminho === '1') {
    console.log(`Ótimo! Você escolheu se especializar na área de ${area} com foco em ${especializacao}.`);
} else {
    console.log(`Incrível! Você quer se tornar um desenvolvedor Fullstack, começando com ${especializacao}.`);
}


let maisTecnologias = true;
let tecnologias = [];

while (maisTecnologias) {
    let tecnologia = prompt('Digite uma tecnologia que você gostaria de aprender: ');
    tecnologias.push(tecnologia);
    console.log(`Legal! ${tecnologia} é uma ótima escolha.`);

    let resposta = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite [OK] para adicionar ou qualquer outra tecla para encerrar: ').toLowerCase();
    if (resposta !== 'ok') {
        maisTecnologias = false;
    }
}

console.log(`\n${nome}, aqui está o resumo da sua jornada:`);
console.log(`- Área escolhida: ${area}`);
console.log(`- Especialização: ${especializacao}`);
console.log(`- Caminho escolhido: ${caminho === '1' ? 'Especializar-se' : 'Tornar-se Fullstack'}`);
console.log(`- Tecnologias para aprender: ${tecnologias.join(', ')}`);
console.log('Boa sorte no seu aprendizado!');
