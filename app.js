const { request, response } = require('express');
const express = require('express');//importo la biblioteca
const app = express()

//crear un endpoint---es la url
//localhost:3000/user
app.get('/users',(request, response) =>{
    response.send("hola mundo");
});

app.listen(3000,() =>{
    console.log("server runnig on port 3000");
});