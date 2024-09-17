const database = 'BD3-BRUNO-AULA';

const collection = 'LIVRARIA';

use(database);

//SELECIONA O LIVRO DE UMA CATEGORIA E UM DETERMINADO VALOR
db[collection].find({

    $or:[
        {categoria: {$eq: 'Fantasia Heroica'}},
        {valor: {$lte: 100}}
    ]

})