const express = require('express');
const routes = require('./src/rutas');
const path = require('path');

const app = express();
const port = 3000;

app.use('',routes);

app.listen(port,() => {
    console.log('App running on port '+port);
});

app.use('/assets', express.static(path.join(__dirname,'assets')));

app.get('',(req, res) => {
    res.send("Bienvenido");
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'vistas','notFound.html'));
})

