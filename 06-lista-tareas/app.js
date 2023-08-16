//SELECCIONAR ELEMENTOS DEL DOM CON LOS QUE VAMOS A INTERACTUAR

const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");

//F(X) MANEJAR EVENTOS
function agregarTarea () {
    //Verificar si hay una cadena caracteres NO VACÍA en el input
    if (input.value) {
        /* Creación CONTENEDOR DIV de la tarea */
        //Creamos UN DIV para el contenedor de una tarea nueva con DOCUMENT.CREATEELEMENT()
        let tareaNueva = document.createElement ("div");
        //Añadimos con CLASSLIST.ADD() LA CLASE tarea al div
        tareaNueva.classList.add("tarea");

        /* Creación P con el Texto ingresado por usuario*/
        //Creamos UN P para el texto de la tarea nueva con DOCUMENT.CREATEELEMENT()
        let textoTarea = document.createElement("p");
        // Cambiamos el texto de P con INNERTEXT, asociándolo con OBJETO.VALUE al VALOR DEL INPUT
        textoTarea.innerText = input.value
        //Añadimos el P textoTarea CON APPENCHILD al DIV tareaNueva
        tareaNueva.appendChild(textoTarea);

        /* Creación CONTENEDOR DIV de los iconos de tarea cumplida y borrar tarea */
        //Creamos UN DIV para el contenedor de los iconos con DOCUMENT.CREATEELEMENT()
        let iconos = document.createElement("div");
        //Añadimos con CLASSLIST.ADD() LA CLASE iconos al div
        iconos.classList.add("iconos");
        //Añadimos el DIV iconos CON APPENCHILD al DIV tareaNueva
        tareaNueva.appendChild(iconos);

        /*Creación iconos de tarea hecha y borrar tarea*/
        //Crear ELEMENTO I con DOCUMENT.CREATEELEMENT()
        let iconoCompletada = document.createElement("i");
        //Agregar CON CLASSLIST.ADD() CLASES del icono bootstrap y icono-completar
            //CON INNERHTML se podía haber añaddo el icono bootsiconoCompletada.innerHTML = `<i class="bi bi-check-circle-fill"></i>`;
        iconoCompletada.classList.add ("bi", "bi-check-circle-fill", "icono-completar");
        //ADDEVENTILISTENER cuando click sobre el icono de tarea completada
        iconoCompletada.addEventListener("click", completarTarea)
        

        //Crear ELEMENTO I con DOCUMENT.CREATEELEMENT()
        let iconoBorrarTarea = document.createElement("i");
        //Agregar CON CLASSLIST.ADD() CLASES del icono bootstrap y icono-eliminar
        iconoBorrarTarea.classList.add ("bi", "bi-trash3-fill", "icono-eliminar");
        //Agregar 2 ELEMENTOS I CON APPEND al DIV ICONOS
        iconos.append(iconoCompletada,iconoBorrarTarea);
        //ADDEVENTILISTENER cuando click sobre el icono de tarea completada
        iconoBorrarTarea.addEventListener("click", eliminarTarea)


        /*AGREGAR DIV TAREANUEVA AL DIV LISTADODETAREAS */
        listaDeTareas.appendChild(tareaNueva);
    } else {
        alert ("Ingrese una tarea, por favor... o sufrirá las consecuencias");
    }
}

function completarTarea (event) {
    //Quiero acceder al contenedor de la tarea (nodo padre del nodo padre (contenedor iconos) del icono) para poder hacer modifaciones (como no sé dónde será el evento, uso event.target-target es donde hicimos click-)
    let tarea = event.target.parentNode.parentNode;
    //TOGGLE (para evitar hacer condicionales) añade clase completada si no la tiene, y la borra si ya la tenía
    tarea.classList.toggle("completada");
}

function eliminarTarea (event) {
     //Quiero acceder al contenedor de la tarea (nodo padre del nodo padre (contenedor iconos) del icono) para poder hacer modifaciones (como no sé dónde será el evento, uso event.target-target es donde hicimos click-)
     let tarea = event.target.parentNode.parentNode;
     //ELIMINAR ELEMENTO DIV de la tarea CON REMOVE()
     tarea.remove();
}

//ADDEVENTLISTENER de agregar tarea al hacer click en el botón de crear tarea
boton.addEventListener("click", agregarTarea);

//ADDEVENTLISTENER de agregar tarea al pulsar ENTER EN TECLADO
boton.addEventListener("keydown", (event) => {
    //Si no pongo este condicional (key es la tecla que se pulsa), con cualquier tecla se dispararía la F(x)
    if (event.key === "Enter") {
        agregarTarea()
    }
});


