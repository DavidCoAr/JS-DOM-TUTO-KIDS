//SELECIONAR ELEMENTOS DEL DOM CON LOS INTERACTUAREMOS

//Botón al que hacerle click, cambia la cita motivacional
let botonElemento = document.getElementById("boton-cambiar-cita");
//Elemento P donde está la cita que cargamos del Array citas con su propiedad cita
let citaElemento = document.getElementById("cita");
//Elemento P donde está el autor que cargamos del Array citas con su propiedad autor
let autorElemento = document.getElementById("autor");


//F(X) generar entero (Math.floor) aleatorio (Math.random) entre 1 rango (* (max - min) + min)) 
    //para generar una cita aleatoria  a partir de un índice aleatorio en el Array citas        
function generarNumAleatorio (min, max) {
    //NO se incluye el max en el rango
    return Math.floor(Math.random() * (max - min) + min);
}

//F(X) cambia cita-autor a partir del índice aleatorio del array
    //Actualiza con innerText el texto contenido en los elementos P para cita y autor
function cambiarCitaAutor () {
    // RANGO MAX coincide con la longitud del array
    let indiceAleatoerioArrayCitas = generarNumAleatorio (0, citas.length);
    //Actualizo el texto contenido en citaElemento(P con la cita) y autorElemento(P con el autor) con la PROP TEXTO y PROP AUTOR del objeto en la posición X del Array citas
    citaElemento.innerText = `"${citas[indiceAleatoerioArrayCitas].texto}"`;
    autorElemento.innerText = citas[indiceAleatoerioArrayCitas].autor;
}

cambiarCitaAutor();


//ADDEVENTLISTENER PARA EL EVENTO TIPO CLICK EN EL BOTON

botonElemento.addEventListener("click", cambiarCitaAutor);