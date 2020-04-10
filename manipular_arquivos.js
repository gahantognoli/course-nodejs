const fs = require('fs');

//Escrita
fs.writeFile('meuArquivo.txt', 'Gabriel Antonio Xavier Antognoli', function(err){
    if(err) console.log(err);
        
    console.log('Arquivo criado!');
});

//Append
fs.appendFile('meuArquivoAppend.txt', 'Gabriel Antognoli ', function(err){
    if(err) console.log(err);
    console.log('Arquivo appendado!');
})

//Leitura
fs.readFile('meuArquivo.txt', function(err, data){
    if(err) console.log(err);
    console.log(data.toString());
});