Descripción: 

Esta aplicación es un buscador de noticias muy al estilo de google, yahoo, bing, etc. Para mostrar noticias sobre
lo que se agregue en el buscador y con ayuda de "newsAPI" obtenemos los resultados para mostrarlos en pantalla.

Tecnologías:

Se utilizó node.js para el servidor, la llamada a la API de news se hace desde el backend, en un modelo de Noticia. 
Los resultados obtenidos son recibidos en el controlador y enviados al cliente, utiliando handlebars de express para cada una
de las noticias.

Librerías:

- express
- express-handlebars
- path
- Router de express