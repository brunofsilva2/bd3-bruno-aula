const database = 'BD3-BRUNO-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].deleteOne(
    {codigo: '7'}
);