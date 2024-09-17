const database = 'BD3-BRUNO-AULA';

const collection = 'LIVRARIA';

use(database);

// SELECIONA O LIVRO DE VALOR MAIOR QUE DETERMINADO NÚMERO ">"
db[collection].find({
    valor: {$gt: 100}
})

// SELECIONA O LIVRO DE MENOR VALOR
db[collection].find({
    valor: {$lt:101}
})

// MAIOR OU IGUAL
db[collection].find({
    valor: {$gte: 100}
})

//MENOR OU IGUAL
db[collection].find({
    valor: {$lte: 100}
})