const Noticia = require('../models/noticia');

class ControladorNoticias{
    static buscar(req, res){
        //Llamar a la función del modelo de noticias que traerá los datos
        let keyWord = req.query.q;
        
        Noticia.buscar(keyWord)
            .then(news => res.render('news',{news}))
            .catch(err => console.log(err)); 
    }
}

module.exports = ControladorNoticias;