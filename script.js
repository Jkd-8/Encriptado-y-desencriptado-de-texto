function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let lumine = document.getElementById('zoya');



  var regex = /^[a-z]+(\s[a-z]+)*$/;
  if (regex.test(texto) == true) {

    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if (texto.length != 0) {
      document.getElementById("mensaje-encriptado").value = textoCifrado;
      tituloMensaje.textContent = textoCifrado;
      parrafo.textContent = "Mensaje cifrado con exito";
      zoya.src = "zoya.PNG";
      document.getElementById("texto").value = "";


    }
    else {
      zoya.src = "chief.PNG";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

    }
  }
  else {
    alert("El texto ingresado sólo debe contener letras minúsculas");
  }

}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let lumine = document.getElementById('zoya');

  var regex = /^[a-z]+(\s[a-z]+)*$/;
  if (regex.test(texto) == true) {

    let textoCifrado = texto
      .replace(/ufat/gi, "u")
      .replace(/ober/gi, "o")
      .replace(/ai/gi, "a")
      .replace(/imes/gi, "i")
      .replace(/enter/gi, "e");

    if (texto.length != 0) {
      document.getElementById("mensaje-encriptado").value = textoCifrado;
      tituloMensaje.textContent = textoCifrado;
      parrafo.textContent = "Mensaje descifrado con exito";
      zoya.src = "zoya.PNG";
      document.getElementById("texto").value = "";

    } else {
      zoya.src = "chief.PNG";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      
    }
  }
  else {
    alert("El texto ingresado sólo debe contener letras minúsculas");

  }

}


function btnCopiar() {

  var codigoACopiar = document.getElementById('titulo-mensaje');
  navigator.clipboard.writeText(codigoACopiar.textContent)
  alert("El texto ha sido copiado");
  textoingresado.value = " ";
}
