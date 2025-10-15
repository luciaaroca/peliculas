import peliculas from "./peliculas.js" //importamos el array de objetos peliculas

const formulario = document.getElementById("formPeli"); //seleccionamos el id = "formPeli" (sección HTML)
const tabla = document.getElementById("tabla"); //seleccionamos el id = "tabla" () sección HTML)

// 1 ================Regx================>year 4 cifras
// 2 ================ARRAY================


//3 ==============FORMULARIO=========> evento que sucede al hacer submit en el boton del formulario
formulario.addEventListener("submit", function(event){ //escuchamos un evento (submit) (cuando enviemos el formulario)
  event.preventDefault(); //Evita que la página envíe los datos de forma tradicional
          
        //1) cogemos los valores de cada apartado del formulario
           //-creamos una constante donde guardar esos valores (accedemos a ellos con el id)

        const year = document.getElementById("year").value; 
        const titulo = document.getElementById("titulo").value;
        const descripcion= document.getElementById("descripcion").value;
        const url = document.getElementById("url").value;
        const genero = document.getElementById("genero").value;
        
  
        //2) validamos que el year cumpla las dos condiciones

        const regexAño = /^\d{4}$/; //definimos la condición
        if(!regexAño.test(year)){//si no cumple el regex (!)
          alert("Error: El año tiene que tener 4 cifras");
          return; //devuelve esta alerta
        } if (year <= 1800 && year >= 2025){ //si el num NO está entre 1800 y 2025
          alert("Error: El año tiene que estar entre 1800 - 2025");
          return
        }//si ninguna de las anteriores se cumple:
        alert('Formulario enviado correctamente.');


        //3) creamos el objeto pelicula
      
        const  pelicula = {
        titulo: titulo,
        year: year,
        descripcion:descripcion,
        url: url,
        genero: genero}
        //lo añadimos al array inicial de peliculas (esta en otro fichero)
        peliculas.push(pelicula);
        console.log(peliculas);
       
        //4) reset de formulario + actualización de la tabla (la hacemos a continuación)
     
        formulario.reset()
        actualizarTabla();

}); //cerramos addEventListener del formulario


// 4 =============TABLA================>

//1)creamos la función llamada anteriormente actualizartabla()

function actualizarTabla(peliData, peliGenero){ 
      
      //2) FILTRAR POR TÍTULO Y POR GÉNERO 
      
        //Creamos un array vacio -> aquí se guardaran las pelis filtradas (tanto título como género)
        let pelisFiltradas = [];

        //2.1) para el titulo de la peli (peliData = título que escriba el usuario, es un parámetro)
        if (peliData) { //si se introduce un titulo
                const tituloBuscado = peliData.trim().toLowerCase(); //guardamos ese título en una constante (trim y tolowercase - convierte todo sin espacios principio/final(trim) y en minuscula(tolowercase))
                //pelisFiltradas = peliculas.filter(pelicula => pelicula.titulo.toLowerCase() === tituloBuscado); ---> otra forma pero es peor
                pelisFiltradas = peliculas.filter(pelicula =>pelicula.titulo.toLowerCase().includes(tituloBuscado) /*y al array vacio le decimos que es = filtramos array inicial (peliculas)
                si hay alguna peli.titulo (lo transforma a minuscula). que tenga alguna coindidencia con (constante anterior- tituloBuscado)*/
             );
        } else {
            pelisFiltradas = peliculas; //sino se introduce titulo--> ese array va a ser igual al array inicial peliculas
        }
        //2.2) para el genero de la peli (peliGenero)
        if (peliGenero && peliGenero !== "all") {//si se selecciona alguna opción (y que no sea all)
                const generoFiltrado = peliGenero.toLowerCase(); //constante de ese genero que se ha elegido
                pelisFiltradas = pelisFiltradas.filter(pelicula =>pelicula.genero === generoFiltrado /*es = a pelisFiltradas pq ya antes dijimos que si no hay nada es = al array de peliculas,
                  hacemos un filtro para ver las coincidencias exactas de pelicula.genero ===generoFiltrado (constante anterior) */
             );
        } 
        /*else {
           pelisFiltradas = pelisFiltradas; 
         }-----> este else no seria necesario ya*/
        
       //3) CREAR TABLA
  
       //creamos la tabla con un let ya que no va a ser una variable constante
       //primero con template strings creamos la cabecera de la tabla, lo que solo se actualiza una vez
        let tablaPelis = ` 
      <h2> TABLA DE NUESTRAS PELIS</h2>
          <table id="tablaPelis">
            <thead>
              <tr>
                <th>Título</th>
                <th>Año</th>
                <th>Descripción</th>
                <th>Imagen</th> 
                <th> Género</th>
              </tr>
              </thead>
              <tbody>
              `;
        //creamos otra función, esta vez la parte actualizable
        //para cada pelicula (objeto) le añadimos a nuestra tablaPelis anterior, el body con los valores actualizablez
        //el forEach solo acepta arrays
        pelisFiltradas.forEach((peli,index) => { //vamos a tener peliculas filtradas (ya que sino = peliculas (array))
        tablaPelis += `
           <tr class="filaContenido">
             <td class="titulosNegrita">${peli.titulo}</td>
             <td>${peli.year}</td>
             <td>${peli.descripcion}</td>
             <td><img src ="${peli.url}" alt="${peli.titulo}" class="imgTabla"></td> 
             <td>${peli.genero} </td>
             <td><button class="botonEliminar" data-index="${index}">Eliminar</button></td>
             <td><button class="botonEditar" >Editar</button></td>
           </tr>
          `;
          });
        tablaPelis += `</tbody> </table>`; //aqui añadimos a tablaPeli las etiquetas de cierre de esa tabla
        tabla.innerHTML = tablaPelis    //añadimos a la sección del html, esta tablaPelis que acabamos de crear

       //4) BOTON ELIMINAR

        const botonEliminar= document.querySelectorAll(".botonEliminar"); //añadido apartado anterior
        botonEliminar.forEach(boton=>{
          boton.addEventListener("click",function(){ 
           const index = this.dataset.index; // obtenemos el index del atributo data-index
           peliculas.splice(index, 1);       // eliminamos la película del array
           actualizarTabla(); //llamamos a la función actualizar tabla
          })
        })
        //5) BOTÓN DE EDITAR
}//cerramos la función actualizar tabla

actualizarTabla(); //la llamamos para que nada más cargar la página nos salgan todas las pelis


//5) ---------------FILTROS COMBINADOS-----------

//5.1) FILTRO POR TITULO
//nos creamos HTML un input de texto + botón buscar
document.getElementById("botonBuscar").addEventListener("click", function() { //al hacer click en el botón de buscar (id botonBuscar)
    const filtro = document.getElementById("buscador").value; //guardamos el valor de ese input de texto (id buscador)
    const filtroGenero = document.getElementById("genero-filter").value; //guardamos el filtro genero (abajo)
    actualizarTabla(filtro, filtroGenero); // Actualiza la tabla mostrando solo las pelis que coincidan- hay que ponerlo en este orden, igual que en el siguiente
   
});


//5.2)FILTRO POR GENERO
document.getElementById("genero-filter").addEventListener("change", function(event) { //change para la opción que se eligan en las opciones que hemos generado (el evento es ese cambio)
    const filtroGenero = event.target.value //guardamos el valor de ese evento en una constante
    const filtro = document.getElementById("buscador").value //cogemos la constante titulo
    actualizarTabla(filtro, filtroGenero); //mismo orden que el primer filtro combinado
});




   
//  ////BOTON EDITAR////
      //   const botonEditar= document.querySelector(".botonEditar");
      //   botonEditar.addEventListener("click",function(){ 
      //      const fila = document.querySelector(".filaContenido")
      //      //lo siguiente no hace falta
      //      fila.innerHTML =`
      //      <td>
      //        <form class="edit-form">
      //        <label>Título: <input type="text" name="titulo" value="${peli.titulo}" required></label>
      //        <label>Año: <input type="number" name="year" value="${peli.year}" required></label>
      //        <label>Descripción: <input type="text" name="descripcion" value="${peli.descripcion}" required></label>
      //        <button type="submit">Guardar</button>
      //        </form>
      //      </td>
      //     `;
      //     const formEdit = fila.querySelector(".edit-form");
      //     formEdit.addEventListener("submit", (event) =>{
      //     event.preventDefault();
      //     peli.titulo = formEdit.elements.titulo.value.trim();
      //     peli.year = parseInt (formEdit.elements.titulo.value.trim()); //parseint - convierte un string en un num entero
      //     peli.descripcion = formEdit.elements.descripcion.value.trim();
      //     actualizarTabla(); // refrescamos la tabla con los cambios
      //     });



      //     })