const database = 'BD3-BRUNO-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].deleteMany(
    {autor: 'Isaac Asimov'}
);