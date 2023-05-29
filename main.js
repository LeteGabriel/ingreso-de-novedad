function descargarPDF() {
    const element = document.body;
    const botonDescargarPDF = document.getElementById("botonDescargarPDF");
    botonDescargarPDF.style.display = "none";
    html2pdf()
      .from(element)
      .save('informe.pdf');
  };
