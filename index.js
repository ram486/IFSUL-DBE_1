const express = require('express');
const app=express();
const PORT=80;

//Rota principal
app.get('/', (req,res) => {
    res.send('Bem-vindo ao site da Marvel e DC!');
});

app.get('/marvel', (req, res) => {
    res.send('Este é o universo de heróis da Marvel.');
});

app.get('/dc', (req, res)=>{
    const nome = req.params.nome;
    res.send('Este é o universo de heróis da DC.');
})
//Inicia servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando  em http://localhost:${PORT}`);
});
//console.log("Servidor Node está  funcionando!");