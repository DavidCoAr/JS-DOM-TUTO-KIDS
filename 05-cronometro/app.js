//SELECCIONAR LOS ELEMENTOS DEL DOM CON LOS QUE VAMOS A INTERACTUAR
const digitosCrono = document.getElementById("cronometro");
const botonInicioPausa = document.getElementById("boton-inicio-pausa");
const botonReinicio = document.getElementById("boton-reiniciar");

// Creamos variables para horas, minutos , segundos
    //let hora = 0;
    //let minutos = 0;
    //let segundos = 0;
let [horas, minutos, segundos] = [0, 0 ,0];
console.log (horas);
console.log (minutos);
console.log (segundos);


//intervalo de tiempo (1 segundo=1000 miliseg) que debe transcurrir antes de actualizar el cronomentro
let intervaloTiempo;

//Cronómetro tiene 2 estados. PUASADO Y ANDANDO
let estadoCronometro = "pausado";

//F(X) actualizar tiempo transcurrido para horas, minutos y segundos
function actualizarTiempoCrono () {
    //1º se actualizan los seg de 1 en 1
    segundos++;
    //Si llegan a 60 seg, se suma 1 min y se reinicia a 0 los seg
    if ((segundos / 60) === 1) {
        segundos = 0;
        minutos++
    //Si llegan a 60 min, se suma 1 hora y se reinicia a 0 los min
        if ((minutos / 60) === 1) {
            minutos = 0;
            horas++;
        }

    }
    // Dar formato a los valores añadiendo un 0 a su izq si no llegan a 10 (seg, min,hora)
        // Sin Formato 0:0:1
        // Con Formato 00:00:01
    const segundosConFomato = asignarFormato (segundos);
    const minutosConFomato = asignarFormato (minutos);
    const horasConFomato = asignarFormato (horas);

    //Actualizar el DOM con la nueva presentación con formato
    digitosCrono.innerText = `${horasConFomato}:${minutosConFomato}:${segundosConFomato}`;
}

//F(x) que da formato 00:00:00
/*EQUIVALENTE CON TERNARIOS
function asignarFormato (unidadDeTiempo) {
    return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
}
*/
function asignarFormato(unidadDeTiempo) {
    if (unidadDeTiempo < 10) {
        return "0" + unidadDeTiempo;
    } else { //SI unidadDe tiempo ≥ 10
        return unidadDeTiempo;
    }
}

//ADDEVENTLISTENERS
botonInicioPausa.addEventListener("click", function () {
    if (estadoCronometro === "pausado") {
        //Asignar 1000 miliseg tiene que pasar para que se actualice la ventana,
            //CON WINDOW.SETINTERVAL llamo a la f(x) de actualizar tiempo crono CADA 1 SEGUNDO(1000 miliseg)
        intervaloTiempo = window.setInterval(actualizarTiempoCrono, 1000);
        
        //Cambiar (poner icono de pausa) CON INNERHTML(NO SE HACE POR TEMAS SEGURIDAD) el icono de inicio en botón de inicio/pausa, poner uno de pausa de bootstrap
        botonInicioPausa.innerHTML = `<i class="bi bi-pause-fill"></i>`;
        
        /*Intercambio de clases*/
        //Cambiar, elimimando 1º, CON CLASSLIST.REMOVE() la clase iniciar del botón inicio/pausa
        botonInicioPausa.classList.remove("iniciar");
        // Añadimos CON CLASSLIST.ADD() la clase pausar del botón inicio/pausa
        botonInicioPausa.classList.add("pausar");
        
        //CLICK actualiza el estado del crónometro a andando 
        estadoCronometro = "andando";
    } else  { //Si está andando el cronómetro
        //Se para el intervalo de tiempo que actualiza cada segundo
        window.clearInterval(intervaloTiempo);
        
        //Cambiar (poner icono de inicio) CON INNERHTML(NO SE HACE POR TEMAS SEGURIDAD) 
        botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
        
        /*Intercambio de clases*/
        //Cambiar, elimimando 1º, CON CLASSLIST.REMOVE() la clase pausar del botón inicio/pausa
        botonInicioPausa.classList.remove("pausar");
        // Añadimos CON CLASSLIST.ADD() la clase iniciar del botón inicio/pausa
        botonInicioPausa.classList.add("iniciar");

        //CLICK actualiza el estado del crónometro a pausado 
        estadoCronometro = "pausado";
    }
});

botonReinicio.addEventListener("click", function () {
    //Se para el intervalo de tiempo que actualiza cada segundo
    window.clearInterval(intervaloTiempo)
    //Actualiza horas, min, seg a 0
    horas = 0;
    minutos = 0;
    segundos = 0;
    //Actualizamos con el string 00:00:00 los digitos en pantalla del crono
    digitosCrono.innerText = `00:00:00`
    //Actualizar el botón de inicio/pausa para dejarlo con el icono de play
    botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
        
    /*Intercambio de clases*/
    //Cambiar, elimimando 1º, CON CLASSLIST.REMOVE() la clase pausar del botón inicio/pausa
    botonInicioPausa.classList.remove("pausar");
    // Añadimos CON CLASSLIST.ADD() la clase iniciar del botón inicio/pausa
    botonInicioPausa.classList.add("iniciar");

    //CLICK en Reinicio actualiza el estado del crónometro a pausado 
    estadoCronometro = "pausado";
});
