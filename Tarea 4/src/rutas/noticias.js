const router = require('express').Router();
const controladorNoticias = require('../controllers/noticias');

//Agregar las rutas para noticia/

router.get('',controladorNoticias.buscar); //Ejecuta la función del controlador

module.exports = router;