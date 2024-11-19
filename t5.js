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
    let desejaAdicionar = prompt('Você deseja adicionar uma comida na sua lista de compras? (sim/não): ').toLowerCase();

    if (desejaAdicionar === 'não' || desejaAdicionar === 'nao') {
        console.log("\nLista de compras:");
        for (let categoria in listaCompras) {
            if (listaCompras[categoria].length > 0) {
                console.log(`    ${categoria}: ${listaCompras[categoria].join(', ')}`);
            } else {
                console.log(`    ${categoria}:`);
            }
        }
        console.log("Obrigado por usar o organizador de lista de compras!");
        break;
    } else if (desejaAdicionar === 'sim') {
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
    } else {
        console.log('Resposta inválida. Por favor, responda com "sim" ou "não".');
    }
}
