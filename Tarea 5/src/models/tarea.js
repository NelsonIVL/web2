// class Tarea{
//     static buscar(filtros){
//         return new Promise((resolve, reject) => {
//             const tareas = [
//                 {titulo: 'Tarea 1', status: 'completada'},
//                 {titulo: 'Tarea 2', status: 'nueva'}
//             ]
//             setTimeout(() => {
//                 resolve(tareas);
//             },1000);
//         })
//     }
// }

// module.exports = Tarea;


const {Schema, model} = require('mongoose');

const now = new Date();

const tareaSchema = new Schema({
    titulo: {type: String},
    descripcion: { type: String},
    status: {type: String, default: 'new'},
    date: {type: Date, default: now}
});


module.exports = model('tareas', tareaSchema);

