module.exports = function (req, res, next){
    const token = req.query.token;
    if(token === '123'){
        console.log('Autenticado');
        req.user = 'John Doe'
        next();
    }else{
        res.status(401).send('Unauthorized');
    }
}