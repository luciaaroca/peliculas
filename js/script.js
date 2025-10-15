import peliculas from "./peliculas.js" //importamos el array de objetos peliculas

const formulario = document.getElementById("formPeli"); //seleccionamos el id = "formPeli"
const tabla = document.getElementById("tabla"); //seleccionamos el id = "tabla" (es una nueva sección)

// 1 ================Regx================
// 2 ================ARRAY================

formulario.addEventListener("submit", function(event){ //escuchamos un evento (submit) (cuando enviemos el formulario)
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
function actualizarTabla(peliData, peliGenero){ 
  //creamos la tabla con un let ya que no va a ser una variable constante
  //primero con template strings creamos la cabecera de la tabla, lo que solo se actualiza una vez


/////logica de hacer filtrado por peliData!!! 
    let pelisFiltradas = [];

    //para el titulo de la peli (peliData)
    if (peliData) {
            const tituloBuscado = peliData.trim().toLowerCase();
            //pelisFiltradas = peliculas.filter(pelicula => pelicula.titulo.toLowerCase() === tituloBuscado);
            pelisFiltradas = peliculas.filter(pelicula =>pelicula.titulo.toLowerCase().includes(tituloBuscado)
);
    } else {
        pelisFiltradas = peliculas;
    }
    //para el genero de la peli (peliGenero)
    if (peliGenero && peliGenero !== "all") {
            const generoFiltrado = peliGenero.toLowerCase();
            pelisFiltradas = pelisFiltradas.filter(pelicula =>pelicula.genero === generoFiltrado
);
     } 
     //else {
    //     pelisFiltradas = pelisFiltradas; //esto no hace falta
    // }
    
  

  let tablaPelis = ` 
<h2> TABLA DE NUESTRAS PELIS</h2>
    <table id="tablaPelis">
      <thead>
        <tr>
          <th>Título</th>
          <th>Año</th>
          <th>Descripción</th>
          <th>Imagen</th> 
          <th> Genero</th>
        </tr>
        </thead>
        <tbody>
        `;
        //creamos otra función, esta vez la parte actualizable
        //para cada pelicula (objeto) le añadimos a nuestra tablaPelis anterior, el body con los valores actualizablez
        //el forEach solo acepta arrays
        pelisFiltradas.forEach((peli,index) => { //vamos a tener peliculas filtradas
        tablaPelis += `
           <tr class="filaContenido">
             <td>${peli.titulo}</td>
             <td>${peli.year}</td>
             <td>${peli.descripcion}</td>
             <td><img src ="${peli.url}" alt="${peli.titulo}"></td> 
             <td>${peli.genero} </td>
             <td><button class="botonEliminar" data-index="${index}">Eliminar</button></td>
             <td><button class="botonEditar" >Editar</button></td>
           </tr>
          `;
          });
        tablaPelis += `</tbody> </table>`; //aqui añadimos a tablaPeli las etiquetas de cierre de esa tabla
        tabla.innerHTML = tablaPelis    //añadimos a la sección del html, esta tablaPelis que acabamos de crear

      ////BOTON ELIMINAR////
        const botonEliminar= document.querySelectorAll(".botonEliminar");
        botonEliminar.forEach(boton=>{
          boton.addEventListener("click",function(){
           const index = this.dataset.index; // obtenemos el index del atributo data-index
           peliculas.splice(index, 1);       // eliminamos la película del array
           actualizarTabla();
          })
        })



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
}//cerramos la función actualizar tabla
actualizarTabla();


//---------------FILTROS COMBINADOS-----------
//FILTRO POR TITULO
document.getElementById("botonBuscar").addEventListener("click", function() { //del boton y click
    const filtro = document.getElementById("buscador").value;
    const filtroGenero = document.getElementById("genero-filter").value;
    actualizarTabla(filtro, filtroGenero); // Actualiza la tabla mostrando solo las pelis que coincidan
   
});


//FILTRO POR GENERO
document.getElementById("genero-filter").addEventListener("change", function(event) { 
    const filtroGenero = event.target.value
    const filtro = document.getElementById("buscador").value
    actualizarTabla(filtro, filtroGenero); 
});




   
