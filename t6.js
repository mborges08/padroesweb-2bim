const prompt = require('prompt-sync')();

let listaCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

console.log("Bem-vindo ao organizador de lista de compras!");

while (true) {

    const temItensNaLista = Object.values(listaCompras).some(categoria => categoria.length > 0);

   
    let acao = prompt(`Você deseja:\n  1. Adicionar uma comida na lista\n  ${temItensNaLista ? '2. Remover uma comida da lista\n' : ''}  3. Finalizar o programa\nEscolha uma opção: `);

    if (acao === '3') {
        console.log("\nLista de compras final:");
        for (let categoria in listaCompras) {
            if (listaCompras[categoria].length > 0) {
                console.log(`    ${categoria}: ${listaCompras[categoria].join(', ')}`);
            } else {
                console.log(`    ${categoria}:`);
            }
        }
        console.log("Obrigado por usar o organizador de lista de compras!");
        break;
    }

    
    if (acao === '1') {
        let comida = prompt('Qual comida você deseja adicionar? ');
        let categoria = prompt(
            'Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros): '
        ).toLowerCase();

        switch (categoria) {
            case 'frutas':
                listaCompras.Frutas.push(comida);
                break;
            case 'laticínios':
            case 'laticinios':
                listaCompras.Laticínios.push(comida);
                break;
            case 'congelados':
                listaCompras.Congelados.push(comida);
                break;
            case 'doces':
                listaCompras.Doces.push(comida);
                break;
            case 'outros':
                listaCompras.Outros.push(comida);
                break;
            default:
                console.log('Categoria inválida. A comida será adicionada na categoria "Outros".');
                listaCompras.Outros.push(comida);
        }
        console.log(`${comida} foi adicionado à lista na categoria ${categoria}.`);

    
    } else if (acao === '2' && temItensNaLista) {
        console.log("\nLista atual:");
        for (let categoria in listaCompras) {
            if (listaCompras[categoria].length > 0) {
                console.log(`    ${categoria}: ${listaCompras[categoria].join(', ')}`);
            }
        }

        let comidaRemover = prompt('Digite o nome da comida que deseja remover: ');
        let itemEncontrado = false;

        for (let categoria in listaCompras) {
            let index = listaCompras[categoria].indexOf(comidaRemover);
            if (index !== -1) {
                listaCompras[categoria].splice(index, 1); // Remove o item da lista
                console.log(`${comidaRemover} foi removido da categoria ${categoria}.`);
                itemEncontrado = true;
                break;
            }
        }

        if (!itemEncontrado) {
            console.log('Não foi possível encontrar o item dentro da lista!');
        }

    } else {
        console.log('Opção inválida. Tente novamente.');
    }
}
