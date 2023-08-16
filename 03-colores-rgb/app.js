//EXTRACIÓN DE VALORES DE INPUTS
//ACTUALIZAR ESTILO OTROS ELEMENTOS EN BASE A ESOS VALORES

//SELECCIÓN ELEMENTOS DEL DOM
// #region
//Seleccionamos por su id los ELEMENTOS INPUT donde VARIAMOS los VALORES de R, G, B
const inputRojo = document.getElementById("valor-rojo");
const inputVerde = document.getElementById("valor-verde");
const inputAzul = document.getElementById("valor-azul");

//Seleccionamos por su id los ELEMENTOS P  donde se MOSTRARÁN los VALORES de R, G, B
const textoValorRojo = document.getElementById("texto-valor-rojo");
const textoValorVerde = document.getElementById("texto-valor-verde");
const textoValorAzul = document.getElementById("texto-valor-azul");

//Creamos las VARIABLES que, RECIBEN los VALORES de los INPUT, y ACTUALIZARÁN los INNERTEXT de textoValorRojo,...
let valorRojo = inputRojo.value; // por defecto recibe 23
let valorVerde = inputVerde.value; // por defecto recibe 41
let valorAzul = inputAzul.value; // por defecto recibe 56
// #endregion

// #region console.log ValorRojo,...
console.log("Valor por defecto recibe valorRojo: " + valorRojo);
console.log("Valor por defecto recibe valorVerde: " + valorVerde);
console.log("Valor por defecto recibe valorAzul: " + valorAzul);
// #endregion console.log ValorRojo,...

//Actualizamos el valor de los ELEMENTOS P donde se MOSTRARÁN los VALORES de R, G, B
textoValorRojo.innerText = valorRojo; // por defecto mostrará 23
textoValorVerde.innerText = valorVerde; // por defecto mostrará 41
textoValorAzul.innerText = valorAzul; // por defecto mostrará 56



//F(X) que ACTUALIZA el background-color del BODY
function actualizarBackgroundBody (paramRojo,paramVerde,paramAzul){
    const colorRGBBody = `rgb(${paramRojo}, ${paramVerde}, ${paramAzul})`;
    console.log("\n---Valores RGB al CHANGE los imput: " + colorRGBBody);
    //Actualizamos el estilo background-color de Body con la variable colorRGBBody
    document.body.style.backgroundColor = colorRGBBody;
}

//ADDEVENTLISTENER ()
// #region

//F(X) que AL CHANGE INPUTS ACTUALIZA las VARIABLES (valorRojo) que, reciben los valores de los input, 
    //y ACTUALIZA CON INNERTEXT  el texto contenido en los elementos P  donde se mostrarán los textos de los valores de R,G,B
inputRojo.addEventListener("change", (evento) => {
    valorRojo = evento.target.value;
    console.log("-Valor Actualizado para valorRojo: " + valorRojo)
    //Actualizamos, TRAS CHANGE el INPUT, el valor de los elementos p donde se mostrarán los valores de R, G, B
    textoValorRojo.innerText = valorRojo;
    console.log("--En pantalla aparece para Rojo:" + textoValorRojo.innerText)
    actualizarBackgroundBody(valorRojo, valorVerde, valorAzul );
});

inputVerde.addEventListener("change", (evento) => {
    valorVerde = evento.target.value;
    //Actualizamos, TRAS CHANGE el INPUT, el valor de los elementos p donde se mostrarán los valores de R, G, B
    textoValorVerde.innerText = valorVerde;
    actualizarBackgroundBody(valorRojo, valorVerde, valorAzul );
});

// Como tenemos claro de dónde extraer el valor, usamos inputAzul para extraerlo y eliminamos event
inputAzul.addEventListener("change", () => {
    valorAzul = inputAzul.value; //Sé que el blanco del change es inputAzul
    //Actualizamos, TRAS CHANGE el INPUT, el valor de los elementos p donde se mostrarán los valores de R, G, B
    textoValorAzul.innerText = valorAzul;
    actualizarBackgroundBody(valorRojo, valorVerde, valorAzul );
});

// #endregion
