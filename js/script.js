console.log ("funciona");

//Vamos a validar el año: tiene que tener 4 cifras y estar entre 1800 y el año actual
//================Regx================
const formulario = document.getElementById("formPeli");

formPeli.addEventListener("submit", function(event){
  event.preventDefault();
  const year = document.getElementById("year").value;
  const regexAño = /^\d{4}$/;
  if(!regexAño.test(year)){
    alert("El año tiene que tener 4 cifras");
    return;
  } if (Number(year) > 1800 || Number (year)< 2025){
    alert("El año tiene que estar entre 1800 - 2025");
    return
  }
  alert('Formulario enviado correctamente.');
});
