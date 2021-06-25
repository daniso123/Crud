const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        error.query(
            "SELECT * FROM Funcionario;",
            (error, resultado,fields)=>{
            if(error){return res.status(500).send({error: error})}
            return res.status(500).send({response: resultado})
            }
        )
    });

});

router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'INSERT INTO Funcionario (nome, sobrenome,salario,data_nasc,cargo) VALUES(?,?,?,?,?)',
            [req.body.nome,
            req.body.sobrenome,
            req.body.salario,
            req.body.data_nasc,
            req.body.cargo,],
            (error, resultado, field) => {
                conn.release();
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: "teste post",
                    id_funcionario:resultado.insertId
                });
            }
        )

    });
});


router.get('/:id_Funcionario', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            "SELECT * FROM Funcionario WHERE id_funcionario = ?;",
            [res.params.id_funcionario],
            (error, resultado,fields)=>{
            if(error){return res.status(500).send({error: error})}
            return res.status(500).send({response: resultado})
            }
        )
    });
});


module.exports = router;