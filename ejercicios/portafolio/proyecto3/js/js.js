document.addEventListener("DOMContentLoaded", function(){
    var listaSpan = "";
    document.getElementById("boton").addEventListener('click', function(){

        valor = document.getElementById("cajaDeTexto").value;
        listaSpan += "<span id='"+ valor +"'>"+ valor +"</span> ";
        document.getElementById("lista").innerHTML = listaSpan;
    
    }, false);
  }, false);

  //boton de desaparecer//
  let visible = true; 

  document.getElementById('botonMostrarOcultar').addEventListener('click', function() {
    const foto = document.getElementById('foto'); 
  

    if (visible) {
      foto.style.display = 'none'; 
    } else {
      foto.style.display = 'block'; 
    }
  
    visible = !visible; 
  });

  //caja de contacto//
  document.getElementById('mostrarInfo').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
  
    setTimeout(function() {
      console.log("Nombre introducido: " + nombre);
      }, 10000);
  });