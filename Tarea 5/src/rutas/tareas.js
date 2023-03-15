const router = require('express').Router();
const controladorTareas = require('../controllers/tareas');


/**
 * @swagger
 * /tareas:
 *  get:
 *    description: obtener lista de tareas
 *    parameters:
 *      - in: query
 *        name: token
 *        description: token del usuario autenticado
 *        schema:
 *          type: string
 *    responses:
 *      200: 
 *        description: Lista de tareas del usuario
 */
router.get('',controladorTareas.listar);



/**
 * @swagger
 * /tareas/{id}:
 *  get:
 *    description: obtener tarea por id
 *    parameters:
 *      - in: query
 *        name: token
 *        description: token del usuario autenticado
 *        schema:
 *          type: string
 *      - in: path
 *        name: id
 *        description: Id de la tarea a recuperar
 *        schema:
 *          type: string
 *    responses:
 *      200: 
 *        description: Tarea obtenida
 *
 */
router.get('/:id', controladorTareas.tareaById);




/**
 * @swagger
 * /tareas:
 *  post:
 *    description: Crear una nueva tarea en la DB
 *    parameters:
 *      - in: query
 *        name: token
 *        description: token del usuario autenticado
 *        schema:
 *          type: string
 *      - in: body
 *        name: tarea
 *        description: Tarea a crear
 *        schema:
 *          type: Object
 *          required:
 *            - titulo
 *            - descripcion
 *          properties:
 *            titulo: 
 *              type: string
 *            descripcion:
 *              type: string
 *    responses: 
 *      200:
 *        description: Tarea creada
 */
router.post('', controladorTareas.crearTarea);




/**
 * @swagger
 * /tareas/{id}:
 *  delete:
 *    description: Eliminar tarea por id
 *    parameters:
 *      - in: query
 *        name: token
 *        description: token del usuario autenticado
 *        schema:
 *          type: string
 *      - in: path
 *        name: id
 *        description: Id de la tarea a eliminar
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Tarea eliminada
 */
router.delete('/:id', controladorTareas.eliminarTarea);

/**
 * @swagger
 * /tareas/{id}:
 *  put:
 *    description: Acttualizar tarea con id y body
 *    parameters:
 *      - in: query
 *        name: token
 *        description: token del usuario autenticado
 *        schema:
 *          type: string
 *      - in: path
 *        name: id
 *        description: id de la tarea a actualizar
 *        schema:
 *          type: string
 *      - in: body
 *        name: nueva tarea
 *        schema:
 *          type: Object
 *          required: 
 *            - titulo
 *            - descripcion
 *            - status
 *          properties:
 *            titulo: 
 *              type: string
 *            descripcion:
 *              type: string
 *            status:
 *              type: string
 *    responses:
 *      200:
 *        description: Tarea actualizada    
 *        
 */
router.put('/:id',controladorTareas.updateTarea);



module.exports = router;