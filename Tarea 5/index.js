const express = require('express');
const rutas = require('./rutas');
const routes = require('./src/rutas');
require('dotenv').config(); //Busca el archivo .env para generar las variables de entorno

const {engine} = require('express-handlebars');
const mongoose = require('mongoose');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./swagger.config');




const port = process.env.PORT || 3000;
const app = express();


const mongoUrl = process.env.MONGO_URL;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views','./src/views');

const swaggerDocs = swaggerJsdoc(swaggerConfig);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

rutas(app);
app.use('',routes);


app.get('*', (req, res) => {
    res.status(404).send("Pagina no encontrada");
});

mongoose.connect(mongoUrl, {useUnifiedTopology: true}).then(() => {
    console.log('Successfully connected to DataBase')
    app.listen(port, () => {
        console.log('app is running in port '+port);
    });
}).catch(err => console.log("Couldn't connect to Database"));






