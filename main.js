const estadoNN = document.getElementById('estadoNN');

estadoNN.addEventListener("change", function() {
  const NN = document.getElementById('NN');
  if (estadoNN.value === "Fueron aprehendidos" || estadoNN.value === "Se dieron a la fuga") {
      NN.style.display = "block";
    } else if (estadoNN.value === "No") {
      NN.style.display = "none";
    }
});


function descargarPDF() {
    const element = document.body;
    const botonDescargarPDF = document.getElementById("botonDescargarPDF");
    botonDescargarPDF.style.display = "none";
    const inputFoto1 = document.getElementById("inputFoto");
    inputFoto1.style.display = "none";
    const inputFoto2 = document.getElementById("inputFoto2");
    inputFoto2.style.display = "none";
    const inputFoto3 = document.getElementById("inputFoto3");
    inputFoto3.style.display = "none";
    html2pdf()
      .from(element)
      .save('informe.pdf');
  };


  function mostrarFoto(event) {
    var archivo = event.target.files[0];
    var vistaPrevia = document.getElementById("vistaPrevia");
  
    if (archivo) {
      var lector = new FileReader();
  
      lector.onload = function(e) {
        vistaPrevia.style.display = "flex";
        vistaPrevia.innerHTML = '<img src="' + e.target.result + '">';
      };
  
      lector.readAsDataURL(archivo);
    } else {
      vistaPrevia.innerHTML = "No se seleccionó ninguna foto";
    }
  }

  
  function mostrarFoto2(event) {
    var archivo = event.target.files[0];
    var vistaPrevia2 = document.getElementById("vistaPrevia2");
  
    if (archivo) {
      var lector = new FileReader();
  
      lector.onload = function(e) {
        vistaPrevia2.style.display = "flex";
        vistaPrevia2.innerHTML = '<img src="' + e.target.result + '">';
      };
  
      lector.readAsDataURL(archivo);
    } else {
      vistaPrevia2.innerHTML = "No se seleccionó ninguna foto";
    }
  }

  
  function mostrarFoto3(event) {
    var archivo = event.target.files[0];
    var vistaPrevia3 = document.getElementById("vistaPrevia3");
  
    if (archivo) {
      var lector = new FileReader();
  
      lector.onload = function(e) {
        vistaPrevia3.style.display = "flex";
        vistaPrevia3.innerHTML = '<img src="' + e.target.result + '">';
      };
  
      lector.readAsDataURL(archivo);
    } else {
      vistaPrevia3.innerHTML = "No se seleccionó ninguna foto";
    }
  }


