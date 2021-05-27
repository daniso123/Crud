const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

const rotaFuncionario = require('./routes/funcionario');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use (express.json ());
//app.use(express.urlencoded()); 

app.use((req,res,next)=>{
    res.header('Acces-Control-Allow-Origin', '*');
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, x-Requrested-with, Contente-Type,Accept,Authorization'
        );
        if(req.method=='OPTIONS'){
            req.header('Acces-Control-Allow-Methods', 'PUT', 'GET','PATH','DETELE', 'POST');
            return res.status(200).send({});
        }
        next();
});

app.use('/funcionario', rotaFuncionario);

app.use((req, res, next)=>{
    const erro = new Error("Não encontrado");
    erro.status(404);
    next(erro);
});

app.use((error, req, res,next)=>{
    res.status(error.status ||500);
    return res.send({
        erro:{
            mensagem: error.mensagem
        }
    })
});

module.exports = app;