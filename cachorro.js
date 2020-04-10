var Cachorro = {
    nome: 'Bob',
    idade: 3,
    latir: () => {
        console.log('Au au!');
    }
}

var Gato = {
    nome: 'Gatita',
    idade: 2,
    miar: () => {
        console.log('Miau!');
    }
}

module.exports = {Cachorro, Gato};