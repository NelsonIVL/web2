const express = require('express');
const router = express.Router();
const auth = require('./../middlewares').auth;


const userRoutes = require('./usuarios');
const taskroutes = require('./tareas');


router.use('',auth);
router.use('',express.json());

router.use('/usuarios',userRoutes);
router.use('/tareas',taskroutes);

module.exports = router;

