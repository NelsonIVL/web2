// function middleware(req, res, next){
//     console.log("pasando por aquí")
//     next()
// }
const path = require('path');
const express = require('express');
const auth = require('./src/middlewares').auth;



module.exports = function(app){

    app.use('/assets', express.static(path.join(__dirname,'assets')));

    app.get('/', (req, res) => {
        res.render('inicio');
    })

    
    function cargarUsuarios(req, res){
        console.log('aqui!');
        res.send('Cargando usuarios de '+req.user);
    }
    

    app.post('/login',express.json(), function(req, res){
        console.log(req.body);
        res.send('datos correctos');
    })

}
