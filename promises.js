const fs = require('fs');

async function read(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data.toString());
        })
    })
}

read('meuArquivoAppend.txt')
    .then(res => console.log(res))
    .catch(err => console.log(err));

read('meuArquivo.txt')
    .then(res => console.log(res))
    .catch(err => console.log(err));