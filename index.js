const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", (request, response)=>{
    response.json({
        message:"Hello World!"
    });
});

app.get('/produtos',(req,res)=>{
    res.json([{nome: 'Celular'},{nome: 'TV'},{nome: 'Sofá'}])
});

const PORT = 3000

app.listen(process.env.PORT  || PORT,()=>{
    console.log('Estou rodando na porta: '+PORT)
});