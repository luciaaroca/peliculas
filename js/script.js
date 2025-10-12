const peliculas = []; //creamos un array vacío donde se almacenaran todas las peliculas
const formulario = document.getElementById("formPeli"); //seleccionamos el id = "formPeli"
const tabla = document.getElementById("tabla"); //seleccionamos el id = "tabla" (es una nueva sección)

// 1 ================Regx================
// 2 ================ARRAY================

formulario.addEventListener("submit", function(event){ //escuchamos un evento (submit)
  event.preventDefault(); //Evita que la página envíe los datos de forma tradicional
      
  //cogemos los valores de cada apartado del formulario
  const year = document.getElementById("year").value; 
  const titulo = document.getElementById("titulo").value;
  const descripcion= document.getElementById("descripcion").value;
  const url = document.getElementById("url").value;
  const genero = document.getElementById("genero").value;
  
  
  //validamos que el year cumpla las dos condiciones
  const regexAño = /^\d{4}$/; //definimos la condición
  if(!regexAño.test(year)){//si no cumple el regex (!)
    alert("Error: El año tiene que tener 4 cifras");
    return; //devuelve esta alerta
  } if (year <= 1800 && year >= 2025){ //si el num NO está entre 1800 y 2025
    alert("Error: El año tiene que estar entre 1800 - 2025");
    return
  }//si ninguna de las anteriores se cumple:
  alert('Formulario enviado correctamente.');

  //creamos el objeto pelicula

  const  pelicula = {
  titulo: titulo,
  year: year,
  descripcion:descripcion,
  url: url,
  genero: genero}

  //lo añadimos al array vacío peliculas
  peliculas.push(pelicula);
  console.log(peliculas);

  //cada vez que se envie el formulario se resetea
  formulario.reset()
 //cada vez que se envie el formulario se actualiza la tabla
  actualizarTabla();

}); //cerramos formulario

// 3 =============TABLA================

//creamos la función llamada anteriormente actualizartabla()
function actualizarTabla (){ 
  //creamos la tabla con un let ya que no va a ser una variable constante
  //primero con template strings creamos la cabecera de la tabla, lo que solo se actualiza una vez
let tablaPelis = `
<h2> TABLA DE NUESTRAS PELIS</h2>
    <table id="tablaPelis">
      <thead>
        <tr>
          <th>Título</th>
          <th>Año</th>
          <th>Imagen</th> 
          <th> Genero</th>
        </tr>
        </thead>
        <tbody>
        `;
        //creamos otra función, esta vez la parte actualizable
        //para cada pelicula (objeto) le añadimos a nuestra tablaPelis anterior, el body con los valores actualizablez
        peliculas.forEach(peli => {
        tablaPelis += `
           <tr>
             <td>${peli.titulo}</td>
             <td>${peli.year}</td>
             <td><img src ="${peli.url}" alt="${peli.titulo}"></td> 
             <td>${peli.genero} </td>
           </tr>
          `;
          });
        tablaPelis += `</tbody> </table>`; //aqui añadimos a tablaPeli las etiquetas de cierre de esa tabla
        tabla.innerHTML = tablaPelis  //añadimos a la sección del html, esta tablaPelis que acabamos de crear
}//cerramos la función actualizar tabla
   
