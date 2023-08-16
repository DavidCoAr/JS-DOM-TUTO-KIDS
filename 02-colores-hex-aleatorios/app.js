//Selecciono el 1º elemento con etiqueta button
const boton = document.querySelector("button");
//Selecciono el elemento p donde está #2B807B
const textoColor = document.getElementById("color");

//F(X) que maneje el proceso de generar un color hex aleatorio
function generarColorHexaAleatorio( ) {
    // 16 caracteres son los eligibles en hex
    //Los strings pueden ser tratatas como arrays
        //Posición 0: 0. 
        //Posición 15: F
       
    let caracteres = "0123456789ABCDEF";
    //Antes de los dígitos llevan el #
    let colorHex = "#";
    //Math.floor redondea hacia abajo como ENTERO
    //Math.random () es entre 0 y casi 1. Luego *16 para entre 0 y casi 16
    for (let i = 0; i < 6; i++){ //Un hex son 6 caracteres, necesito 6 iteraciones entre posición 0 y 15
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += caracteres[indiceAleatorio]; //colorHex = colorHex + caracteres[indiceAleatorio]
    }
    return colorHex;
}


boton.addEventListener("click", function () {
    let colorAleatorioGenerado = generarColorHexaAleatorio();
    console.log(colorAleatorioGenerado);

    //Actualizo el texto con el valor de colorAleatorioGenerado
    textoColor.textContent = colorAleatorioGenerado; 
    //También vale textoColor.innerText  = colorAleatorioGenerado;  podría ser más adecuado para asegurarte de que el contenido solo sea visible si el elemento en sí también es visible.

    //Actualizar el background-color del body
    document.body.style.backgroundColor = colorAleatorioGenerado;
});