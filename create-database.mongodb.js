//NOME DO BANCO DE DADOS
const database = 'BD3-BRUNO-AULA';

//NOME DO BANCO DA COLEÇÃO DE DADOS
const collection = 'LIVRARIA';

//CRIAR OU ACESSAR O BANCO 
use(database);

//CRIAR UMA COLEÇÃO DE DADOS
db.createCollection(collection);
