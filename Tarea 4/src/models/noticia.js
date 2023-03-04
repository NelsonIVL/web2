const axios = require('axios');

class Noticia {

    static buscar(query) {
        
        return axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=a7186bf042c54a0c97789c689fac1619`)
            .then(news => {
                //console.log(news.data.articles);
                return news.data.articles;
            })
            .catch(err => console.log(err));
    }
}

module.exports = Noticia;