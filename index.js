const express = require('express');

const app = express()

app.get("/", (request, response)=>{
    response.json({
        message:"Hello World!"
    });
});

const PORT = 3000

app.listen(process.env.PORT  || PORT,()=>{
    console.log('Estou rodando na porta: '+PORT)
});