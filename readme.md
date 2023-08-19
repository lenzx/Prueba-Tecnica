# Vista: https://prueba-tecnica-7vvw.onrender.com/
# Prueba Tecnica


Para la realización de la prueba técnica se uso javascript con el Framework Express.js, se decidió tomar esta decision ya que este Framework permite gestionar fácilmente las rutas y poder gestionar fácilmente la base de datos en conjunto con el ORM sequelize. Para la base de datos se uso Mysql a través de la aplicación XAMPP que permite crear un servidor local.

Para el correcto funcionamiento se debe tener instalado node.js y ejecutar el comando npm install. la configuración de la base de datos esta en el archivo config.js, para ejecutarse de manera local requiere tener previamente una base de datos mysql que coincida con la configuración del archivo config.js.

Instrucciones desde local:
-instalar node.js desde https://nodejs.org/es en caso de no tenerlo instalado
-debe crearse una base de datos en local mysql y configurar el archivo config.js
-desde la terminal ejecutar "npm install"
-desde la terminal ejecutar "node index.js"
abrir navegador y en el url escribir "localhost:3000"






## Preguntas

Las páginas se encuentran en la carpeta (./view/) de todas las preguntas desarrolladas y su respectivo CSS en la carpeta (./public/css/). Los resultados de la pregunta 1 y 2 se pueden visualizar en la consola.

#### Pregunta 1
vista: https://prueba-tecnica-7vvw.onrender.com/ejercicio1
La solución se encuentra en la carpeta (./public/js/ejercicio1.js).

#### Pregunta 2
vista: https://prueba-tecnica-7vvw.onrender.com/ejercicio2
La solución se encuentra en la carpeta (./public/js/ejercicio2.js).
#### Pregunta 3
vista: https://prueba-tecnica-7vvw.onrender.com/ejercicio3
La solución se encuentra en la carpeta (./view/ejercicio3.html).

En este caso, se mostró el atributo "player" declarado pero no se encuentra instanciado. Para ello, en el método "config()", dependiendo del archivo ingresado, se debe instanciar la clase "MP3Audio" o "OGGAudio". En el primer caso: "player = new OGGAudio();", y para el segundo caso: "player = new MP3Audio();".
#### Pregunta 4
view: https://prueba-tecnica-7vvw.onrender.com/
La solución se encuentra en la carpeta (./public/js/ejercicio4.js) y (./public/js/ejercicio4.js).

