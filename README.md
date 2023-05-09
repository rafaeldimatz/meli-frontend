### `Acerca de la consola`
Se creo una consola similar a Mercado Libre, en la misma podran ver un input, donde se podra poner una producto a buscar.
Esta realizada en modo defensivo, es decir, si el usuario ingresa en el path una ruta incorrecta, mostrara un mensaje pagina no encontrada.
Si el producto ingresado, por ejemplo `asdasdsadasd`, no existe, se motrara un cartel similar a la pagina original, avisando que no se encontro el producto.
El usuario puede presionar enter o directamente hacer click en la lupa que se encuentra a la derecha del input.
Ademas si el usuario desde el path del browser cambia el id, podra visualizar el producto, previa verificacion de que exista ese id
La consola es responsiva, esto quiere decir que la visualizacion no se rompera en diferentes dispositivos.
La consola, esta relacionada con una API, realizada en NodeJS, la cual, parametriza la salida con los datos necesarios que debe consumir la consola BFF.
Para SEO instale la dependencia Helmet, y defini esto en las vistas

### `Como levantar la API BFF`
### `npm install`
Se instalaran las dependencias necesarias que requiere el proyecto
### `npm start`
Luego npm start. La misma quedara corriendo en un puerto http://localhost:5000

### `Como levantar la consola Front End`
### `npm install`
Se instalaran las despendencias necesarias

### `npm start`
Ejecutando este comando arrancara la consola en nuestro browser en http://localhost:3000

### `npm test`
Se ejecutaran los test
