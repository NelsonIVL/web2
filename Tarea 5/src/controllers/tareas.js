const Tarea = require('./../models/tarea')

class ControladorTareas{

    static listar(req, res){
        Tarea.find({}).lean({})
            .then(tareas => {
                //res.render('detalleTareas',{tareas})
                res.send(tareas)
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }

    static crearTarea(req, res){
        // console.log(req.body);
        // res.send({mssg: 'Tarea creada'});
        const nuevaTarea = new Tarea(req.body);
        Tarea.create(nuevaTarea)
            .then(tarea => {
                res.send(tarea);
            })
            .catch(err => {
                console.log(err);
            })
    }

    static tareaById(req, res){
        // const tarea = {
        //     titulo: 'Tarea 1',
        //     status: 'Nueva',
        //     descripcion: 'lorem ipsum dolor sit amet.'
        // }
        // res.render('tarea',tarea);
        Tarea.findById(req.params.id).lean({})
            .then(tarea => {
                res.send(tarea);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }

    static updateTarea(req, res){
        Tarea.findByIdAndUpdate(req.params.id,req.body, {new: true})
            .then(tarea => {
                res.send(tarea);
            })
            .catch(err => res.sendStatus(400));
    }

    static eliminarTarea(req, res){
        Tarea.findByIdAndDelete(req.params.id).lean({})
            .then(deleted => {
                res.send(deleted);
            })
            .catch(err => {
                res.sendStatus(400);
            });
    }
}

module.exports = ControladorTareas;