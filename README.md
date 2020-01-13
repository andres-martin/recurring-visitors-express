# recurring-visitors-express
recurring visitors in express - Make it real task --> express, node.js, mongoose, mongoDB

Visitantes recurrentes

140 puntos

Hola Maker,

Tu misión en este reto es crear una aplicación similar a la del reto anterior pero con algunas mejoras:

Queremos saber cuántas veces ingresa una persona con el mismo nombre así que necesitamos una llave adicional count en cada documento que lleve esa cuenta (ya no es necesaria la llave date).

Queremos mostrar una tabla en la raíz (/) que muestre la lista de los visitantes: el _id, name y count.

Nota: Si en el query string no viene name (o es vacío) deberás siempre crear un nuevo documento con name "Anónimo" y count en 1.

Por ejemplo, el resultado después de una visita anónima, dos visitas con el path /?name=pedro y una última anónima sería el siguiente:

Resultado

Instrucciones

Puedes modificar el proyecto del reto anterior o empezar uno desde cero para practicar.

Escribe tu solución (recuerda que la aplicación debe correr en el puerto 3000).

Inicializa el repositorio de Git y publícalo en Github.

Ingresa la URL a tu repositorio para evaluar.
