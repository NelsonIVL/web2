const port = process.env.PORT || 3000;

module.exports = {
    swaggerDefinition: {
        swagger: '2.0',
        info: {
            title: 'API de Tareas',
            description: 'api para administrar tareas',
            version: '1.0.0',
            server: [ 'http://localhost:' + port]
        }
    },
    apis: ['src/rutas/**/*.js']
}