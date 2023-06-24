/* Selecciona el tipo de evento y despliega el Div correspondiente*/
const evento = document.getElementById('evento');

evento.addEventListener("change", function () {
  const emergenciaMedica = document.getElementById('emergenciaMedica');
  const incendio = document.getElementById('incendio');
  const intrusion = document.getElementById('intrusion');
  const intentoInt = document.getElementById('intentoIntrusion');
  const robo = document.getElementById('robo');
  const extravio = document.getElementById('extravioMenor');
  const alteracion = document.getElementById('alteracion');
  const reclamos = document.getElementById('reclamos');

  if (evento.value === "none"){
    emergenciaMedica.style.display = "";
    incendio.style.display = "";
    intrusion.style.display = "";
    intentoInt.style.display = "";
    robo.style.display = "";
    extravio.style.display = "";
    alteracion.style.display = "";
    reclamos.style.display = "";
  }else if (evento.value === "Emergencia medica") {
    emergenciaMedica.style.display = "block";
    incendio.style.display = "";
    intrusion.style.display = "";
    intentoInt.style.display = "";
    robo.style.display = "";
    extravio.style.display = "";
    alteracion.style.display = "";
    reclamos.style.display = "";
  } else if (evento.value === "Incendio") {
    incendio.style.display = "block";
    emergenciaMedica.style.display = "";
    intrusion.style.display = "";
    intentoInt.style.display = "";
    robo.style.display = "";
    extravio.style.display = "";
    alteracion.style.display = "";
    reclamos.style.display = "";
  } else if (evento.value === "Intrusion perimetral") {
    intrusion.style.display = "block";
    incendio.style.display = "";
    emergenciaMedica.style.display = "";
    intentoInt.style.display = "";
    robo.style.display = "";
    extravio.style.display = "";
    alteracion.style.display = "";
    reclamos.style.display = "";
  }else if (evento.value === "Intento de intrusion perimetral") {
    intrusion.style.display = "";
    incendio.style.display = "";
    emergenciaMedica.style.display = "";
    intentoInt.style.display = "block";
    robo.style.display = "";
    extravio.style.display = "";
    alteracion.style.display = "";
    reclamos.style.display = "";
  }else if (evento.value === "Robo o hurto") {
    intrusion.style.display = "";
    incendio.style.display = "";
    emergenciaMedica.style.display = "";
    intentoInt.style.display = "";
    robo.style.display = "block";
    extravio.style.display = "";
    alteracion.style.display = "";
    reclamos.style.display = "";
  }else if (evento.value === "Extravio de menor") {
    intrusion.style.display = "";
    incendio.style.display = "";
    emergenciaMedica.style.display = "";
    intentoInt.style.display = "";
    robo.style.display = "";
    extravio.style.display = "block";
    alteracion.style.display = "";
    reclamos.style.display = "";
  }else if (evento.value === "Alteracion del orden interno") {
    intrusion.style.display = "";
    incendio.style.display = "";
    emergenciaMedica.style.display = "";
    intentoInt.style.display = "";
    robo.style.display = "";
    extravio.style.display = "";
    alteracion.style.display = "block";
    reclamos.style.display = "";
  } else if (evento.value === "Reclamo de propietario") {
    intrusion.style.display = "";
    incendio.style.display = "";
    emergenciaMedica.style.display = "";
    intentoInt.style.display = "";
    robo.style.display = "";
    extravio.style.display = "";
    alteracion.style.display = "";
    reclamos.style.display = "block";
  }
});


const barrio = document.getElementById('barrio');

barrio.addEventListener("change", function () {
  const areaSS = document.getElementById('areaSS');

    if (barrio.value === "San Sebastian") {
      areaSS.style.display = "block";
    } else areaSS.style.display = "";
  });


const altInter = document.getElementById('altInter');

altInter.addEventListener("change", function () {
  const menores = document.getElementById('Menores');
  const mayores = document.getElementById('Mayores');

    if (altInter.value === "May") {
      menores.style.display = "";
      mayores.style.display = "block";
    } else if (altInter.value === "Men") {
      menores.style.display = "block";
      mayores.style.display = "";
    } else {
      menores.style.display = "";
      mayores.style.display = "";
    }});

const obs = document.getElementById('observaciones');
obs.addEventListener("change", function () {
  const divObs = document.getElementById('divObs');
  if (obs.value === "obs") {
    divObs.style.display = "block";
  } else {
    divObs.style.display = "";
  }
})


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


