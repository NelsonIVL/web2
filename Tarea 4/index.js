const express = require('express');

const {engine} = require('express-handlebars');
const routes = require('./src/rutas');

const path = require('path');


const port = 3000;
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');


app.use('',routes);

app.use('/assets', express.static(path.join(__dirname,'assets')));

app.listen(port, () => {
    console.log("App listening on port "+port);
});

app.get('/', (req, res) =>{
    res.render('welcome');
});
