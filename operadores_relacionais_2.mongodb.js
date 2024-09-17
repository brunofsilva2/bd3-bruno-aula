const database = 'BD3-BRUNO-AULA';

const collection = 'LIVRARIA';

use(database);

//SELECIONA LIVROS ENTRE OS VALORES INSERIDOS
db[collection].find({
    valor: {$gte:100, $lte:150}
})