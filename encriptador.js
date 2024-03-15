var botonEncriptar = document.querySelector(".btn_encriptar");
var botonDesencriptar = document.querySelector(".btn_Desencriptar");
var lumine = document.querySelector(".lumine");
var contenedor= document.querySelector(".contenedor_parrafo");
var resultado = document.querySelector(".texto_resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    lumine.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

 for (var i= 0; i < texto.length; i++){
    if(texto[i] == "a"){
        textoFinal = textoFinal + "ai"
    }
    else if (texto [i] == "e"){
        textoFinal = textoFinal + "enter"
    }
    else if (texto [i] == "i"){
        textoFinal = textoFinal + "imes"
    }
    else if (texto [i] == "o"){
        textoFinal = textoFinal + "ober"
    }
    else if (texto [i] == "u"){
        textoFinal = textoFinal + "ufat"
    }
    else{
        textoFinal = textoFinal + texto[i]
    }

}   
 return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

 for (var i= 0; i < texto.length; i++){
    if(texto[i] == "a"){
        textoFinal = textoFinal + "a"
        i = i+4;
    }
    else if (texto [i] == "e"){
        textoFinal = textoFinal + "e"
        i = i+3;
    }
    else if (texto [i] == "i"){
        textoFinal = textoFinal + "i"
        i = i+3;
    }
    else if (texto [i] == "o"){
        textoFinal = textoFinal + "o"
        i = i+3;
    }
    else if (texto [i] == "u"){
        textoFinal = textoFinal + "u"
        i = i+3;
    }
    else{
        textoFinal = textoFinal + texto[i]
    }

}   
 return textoFinal;

}


<INput id="miInput" type="text" onchange="verificarInput()"></INput>    
 // Función que valida si el texto contiene alguna mayúscula
 function validarMinusculas(texto) {
    // Expresión regular que busca letras mayúsculas
    let regex = /[A-Z]/;
    // Si el texto coincide con la expresión regular, devuelve true
    return regex.test(texto);
  }
  
  // Función que se ejecuta cuando el input cambia de valor
  function noMayusculas() {
    // Obtiene el elemento input por su id
    let texto = document.getElementById("titulo-mensaje");
    // Obtiene el valor del input
    let valor = texto.value;
    // Si el valor contiene alguna mayúscula, muestra una alerta y borra el valor
    if (validarMinusculas(valor)) {
      alert("Solo se permiten minúsculas");
      texto.value = "";
    }
  }

  if (/^[a-z]+$/.test("texto-mensaje")){
    alert("El texto ingresado sólo debe contener letras minúsculas");
    return; 

    console.log(texto);
    return;
    }

    else{
        alert("El texto ingresado sólo debe contener letras minúsculas");    
    }
