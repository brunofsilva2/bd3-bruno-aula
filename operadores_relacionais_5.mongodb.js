const database = 'BD3-BRUNO-AULA';

const collection = 'LIVRARIA';

use(database);

//SELECIONA TODOS OS LIVROS DE UM DETERMINADO AUTOR
db[collection].find({
    autor: "J.R.R Tolkien"
}).sort({valor: -1});