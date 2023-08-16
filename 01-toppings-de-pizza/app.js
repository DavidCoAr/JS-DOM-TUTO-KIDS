//------SECCIÓN 1: SELECCIONAR ELEMENTOS DEL DOM:DOCUMENT.GETELEMENTBY...()/.QUERYSELECTOR()------
console.log("\n------SECCIÓN 1: SELECCIONAR ELEMENTOS DEL DOM:DOCUMENT.GETELEMENTBY...()/.QUERYSELECTOR()------");
// #region seccion 1

//-------------------------------------------------------------------
/*1-SELECCIONAR ELEMENTOS POR SU ID (el ID tiene que ser único por documento html)*/
//-------------------------------------------------------------------
console.log("\n1-SELECCIONAR ELEMENTOS POR SU ID (el ID tiene que ser único por documento html");

// #region

//Seleccionamos el elemento div por id="contenedor"
const contenedor = document.getElementById("contenedor");

console.log(contenedor);
//Acceder a la PROPIEDAD INNERHTML : acceso a la estructura HTML contenida en ese elemento
console.log(contenedor.innerHTML);
// TYPEOF: tipo de innerHTML, es decir, del  contenido en el div
console.log(typeof contenedor.innerHTML); //devuelve string


//Seleccionamos el elemento h1 por id="titulo"
const titulo = document.getElementById("titulo");

console.log(titulo);
//Tipo de datos de la variable titulo
console.log(typeof titulo); //devuelve object lo que antes era un elemento, => implica poder usar notación de punto para acceder a sus propiedades y trabajar con sus métodos
//Acceder a la PROPIEDAD INNERHTML : acceso a la estructura HTML contenida en ese elemento
console.log(titulo.innerHTML);
//Acceder a la PROPIEDAD INNERTEXT: retorna el texto contenido en el elemento h1
console.log(titulo.innerText);
// TYPEOF: tipo de innerText
console.log(typeof titulo.innerText); //devuelve string

//Acceder a la PROPIEDAD TAGNAME: retorna el nombre de la etiqueta
console.log(titulo.tagName); //devuelve h1

//Seleccionamos el elemento h1 por id que no existe en el HTML
const tituloNoExiste = document.getElementById("tituloNoExiste"); 
console.log(tituloNoExiste); //Muestra null => la ausencia de ese objeto

// #endregion


//-------------------------------------------------------------------
/*2-SELECCIONAR ELEMENTOS POR SU CLASE*/ 
//-------------------------------------------------------------------
console.log("\n2-SELECCIONAR ELEMENTOS POR SU CLASE");

// #region

//Seleccionamos elementos por la clase toppings

const toppings = document.getElementsByClassName("topping");

console.log(toppings); //retona una una ColeccionHTML QUE Funcionaría como un array

console.log(toppings.length); //De 4 de longitud
//Mostrar la posición 0 de la COLECCIÓN HTML: li#aceitunas.topping.fondo-marron
console.log(toppings[0]); // li ETIQUETA HTML, #aceitunas ID, topping.fondo-marron CLASES
//Mostrar el ID de la posición 0 de la COLECCIÓN HTML
console.log(toppings[0].id); //Id es aceitunas

//Mostrar la posición 1 de la COLECCIÓN HTML: li.topping.fondo-naranja
console.log(toppings[1]); 

//Mostrar la posición 2 de la COLECCIÓN HTML: li#albahaca.topping.fondo-marron
console.log(toppings[2]); 

// #endregion


//-------------------------------------------------------------------
/*3-SELECCIONAR ELEMENTOS POR SU ETIQUETA HTML*/ 
//-------------------------------------------------------------------
console.log("\n3-SELECCIONAR ELEMENTOS POR SU ETIQUETA HTML");

// #region

// Seleccionamos elementos por su etiqueta li
const misToppings = document.getElementsByTagName("li");
console.log(misToppings); //Muestra una colección html de 4 elementos

//Mostrar la longitud de la colección de html
console.log(misToppings.length); //4 de longitud

// #endregion


//-------------------------------------------------------------------
/*4-SELECCIONAR ELEMENTOS POR SU SELECTOR CSS:1º QUE CUMPLE LA CONDICIÓN  .QUERYSELECTOR()*/ 
//-------------------------------------------------------------------
console.log("\n4-SELECCIONAR ELEMENTOS POR SU SELECTOR CSS: 1º QUE CUMPLE LA CONDICIÓN  .QUERYSELECTOR()");

// #region

//Buscar el 1º elemento que tenga la id aceitunas
const aceituna = document.querySelector("#aceitunas")

console.log(aceituna); //Muestra Aceitunas

//Buscar el 1º elemento que tenga la clase fondo-naranja
const fondoNaranja = document.querySelector(".fondo-naranja");

console.log(fondoNaranja); //Muestra Cebolla
//Mostrar con TYPEOF el tipo de elemento que nos muestra
console.log(typeof fondoNaranja); ////Devuelve Object => implica poder usar notación de punto para acceder a sus propiedades y trabajar con sus métodos

//Buscar el 1º elemento que tenga la clase topping y clase fondo-marron
const primerToppingMarron = document.querySelector(".topping.fondo-marron");
console.log(primerToppingMarron);
console.log(typeof primerToppingMarron); //Devuelve Object => implica poder usar notación de punto para acceder a sus propiedades y trabajar con sus métodos

//Buscar el 1º elemento que tenga la etiqueta ul,  etiqueta li, clase fondo-naraja
const primerToppingNaranja = document.querySelector("ul li.fondo-naranja");
console.log(primerToppingNaranja); //Muestra Cebolla

//Buscar el 1º elemento que tenga la etiqueta ul,  etiqueta li, NO TENGA clase fondo-marron
const primerToppingNoMarron = document.querySelector("ul li:not(.fondo-marron)");
console.log(primerToppingNoMarron); //Muestra Cebolla



// #endregion


//-------------------------------------------------------------------
/*5-SELECCIONAR ELEMENTOS POR SU SELECTOR CSS:TODOS LOS QUE CUMPLE LA CONDICIÓN  .QUERYSELECTORALL()*/ 
//-------------------------------------------------------------------
console.log("\n4-SELECCIONAR ELEMENTOS POR SU SELECTOR CSS: TODOS LOS QUE CUMPLE LA CONDICIÓN  .QUERYSELECTORALL()");

// #region

//Selecciona los elementos que tengan la clase topping y fondo-naranja
const toppingsNaranja = document.querySelectorAll(".topping.fondo-naranja")

console.log(toppingsNaranja); //Devuelve un NODELIST que funciona como un array
//Mostrar la longitud del NODELIST
console.log(toppingsNaranja.length); //Devuelve 2
//Mostrar la posición 0 del NODELIST
console.log(toppingsNaranja[0]);
//Mostrar la posición 1 del NODELIST
console.log(toppingsNaranja[1]);

//NODE LIST se considera un objeto
console.log(typeof toppingsNaranja); //Devuelve Object => implica poder usar notación de punto para acceder a sus propiedades y trabajar con sus métodos

// #endregion

// #endregion seccion 1


//------SECCIÓN 2: ASIGNAR ESTILO CON JS------
console.log("\n------SECCIÓN 2: ASIGNAR ESTILO CON JS-------");
// #region seccion 2

const primerToppingEstilo = document.querySelector(".topping");
console.log(primerToppingEstilo);

//Mostrar con la propiedad style todos los estilo del objeto
console.log(primerToppingEstilo.style);

//Modificar la prop backgroundColor a azul => añade un estilo en línea style = "background-color: blue;" con mayor prioridad
//primerToppingEstilo.style.backgroundColor = "blue";

//Modificar la prop color a gris => añade un estilo en línea que tiene > prioridad 
//primerToppingEstilo.style.color = "grey";

//Modificar la prop textTransform a mayúscula (uppercase) => añade un estilo en línea que tiene > prioridad 

//primerToppingEstilo.style.textTransform = "uppercase";


// #endregion seccion 2


//------SECCIÓN 3: TEXTO EN EL DOM------
console.log("\n------SECCIÓN 3: TEXTO EN EL DOM-------");
// #region seccion 3

//-------------------------------------------------------------------
/*1-ACCEDER AL TEXTO*/
//-------------------------------------------------------------------
console.log("\n1-ACCEDER AL TEXTO");

// #region

//Accedemos al elemento ul por su id "lista-toppings"

const listaDeToppings = document.getElementById("lista-toppings");

console.log(listaDeToppings);

//Acceder al texto contenido en ul
console.log(listaDeToppings.innerText);

//Acceder al texto mostrando los espacios de indentación
console.log(listaDeToppings.textContent);

//Retorna la estructura html contenida en ul
console.log(listaDeToppings.innerHTML);


// #endregion


//-------------------------------------------------------------------
/*2-MODIFICAR EL TEXTO*/
//-------------------------------------------------------------------
console.log("\n2-MODIFICAR EL TEXTO*");

// #region

//Acceder al elemento h1 por el id "titulo"

const tituloH1 = document.getElementById("titulo");

//Mostrar el texto contenido en h1
console.log(tituloH1.innerText);

//Modificar el texto
//tituloH1.innerText = "Mis Topping favoritos";

// #endregion

// #endregion seccion 3


//------SECCIÓN 4: MODIFICAR ATRIBUTOS DE UN ELEMENTO------
console.log("\n------SECCIÓN 4: MODIFICAR ATRIBUTOS DE UN ELEMENTO-------");
// #region seccion 4

const enlace = document.getElementsByTagName("a");

console.log(enlace); //Devuelve un HTML COLECCTION que funciona como un array
//Mostrar la posición 0 del HTML COLECCTION
console.log(enlace[0]);

//Verificar el atributo href de la posición 0 con getAttribute
console.log(enlace[0].getAttribute("href")); // Muestra https://www.freecodecamp.org/espanol/

//Actualizar el atributo href de la posición 0 con setAttribute
enlace[0].setAttribute("href", "https://fonts.google.com/"); 

//Verificar el atributo href de la posición 0 con getAttribute
console.log(enlace[0].getAttribute("href"));

//Eliminar el atributo href de la posición 0 con removeAttribute
console.log(enlace[0].removeAttribute("href")); 

// Agregar de nuevo el atributo href de la posición 0 con setAttribute
enlace[0].setAttribute("href", "https://www.freecodecamp.org/espanol/"); 

// #endregion seccion 4


//------SECCIÓN 5: MODIFICAR CLASES DE UN ELEMENTO------
console.log("\n------SECCIÓN 5: MODIFICAR CLASES DE UN ELEMENTO-------");
// #region seccion 5

//-------------------------------------------------------------------
/*1-MOSTRAR LAS CLASES*/
//-------------------------------------------------------------------
console.log("\n1-MOSTRAR LAS CLASES");

// #region 

//Mostrar el primer elemento que tenga la clase .topping
const primerToppingClase = document.querySelector(".topping");
console.log(primerToppingClase);

//Mostrar lista con todas sus clases con   CLASSLIST
console.log(primerToppingClase.classList); // Muestra un DOMTOKENLIST que funciona como un array

//Mostrar posición 0 de DOMTOKENLIST
console.log(primerToppingClase.classList[0])

// #endregion 

//-------------------------------------------------------------------
/*2-AGREGAR CLASES*/
//-------------------------------------------------------------------
console.log("\n2-AGREGAR CLASES");

// #region

//Mostrar el primer elemento que tenga la clase .topping
const primerToppingNuevaClase = document.querySelector(".topping");
console.log(primerToppingNuevaClase);

//Mostrar lista con todas sus clases con   CLASSLIST
console.log(primerToppingNuevaClase.classList); // Muestra un DOMTOKENLIST que funciona como un array

//Añadir una clase con CLASSLIST.ADD()
primerToppingNuevaClase.classList.add("mi-clase-agregada-por-js")

console.log(primerToppingNuevaClase.classList); // Muestra un DOMTOKENLIST que funciona como un array

// #endregion

//-------------------------------------------------------------------
/*3-VERIFICAR SI CLASE EXISTE EN UNA CLASSLIST*/
//-------------------------------------------------------------------
console.log("\n3-VERIFICAR SI CLASE EXISTE EN UNA CLASSLIST");

// #region

//Mostrar el primer elemento que tenga la clase .topping
const primerToppingVerificarClase = document.querySelector(".topping");
console.log(primerToppingVerificarClase);

console.log(primerToppingVerificarClase.classList.contains("fondo-marron"));

//Mostrar lista con todas sus clases con   CLASSLIST
console.log(primerToppingVerificarClase.classList); // Muestra un DOMTOKENLIST que funciona como un array

// #endregion

//-------------------------------------------------------------------
/*4-ELIMINAR UNA CLASE*/
//-------------------------------------------------------------------
console.log("\n3-VERIFICAR SI CLASE EXISTE EN UNA CLASSLIST");

// #region

//Mostrar el primer elemento que tenga la clase .topping
const primerToppingBorrarClase = document.querySelector(".topping");
console.log(primerToppingBorrarClase);

//Mostrar lista con todas sus clases con   CLASSLIST
console.log(primerToppingBorrarClase.classList); // Muestra un DOMTOKENLIST que funciona como un array

//Añadir una clase con CLASSLIST.REMOVE()
primerToppingBorrarClase.classList.remove("mi-clase-agregada-por-js")

console.log(primerToppingBorrarClase.classList); // Muestra un DOMTOKENLIST que funciona como un array

// #endregion

// #endregion seccion 5


//------SECCIÓN 6: CREAR-AGREGAR-REMOVER ELEMENTO------
console.log("\n------SECCIÓN 6: CREAR-AGREGAR-REMOVER ELEMENTO-------");
// #region seccion 6

//Agregar al ul de  id="lista-toppings" un li nuevo(topping nuevo)

//01-DONDE AGREGAR NODO
const listaToppingAgregar = document.getElementById("lista-toppings");

//02-QUÉ NODO AGREGAR
//creamos un elemento nuevo tipo li (sería un nuevo topping)
const toppingNuevo = document.createElement("li");

//03-DAR CLASES/ESTILO-CONTENIDO AL NODO
toppingNuevo.classList.add("topping", "fondo-marron");
toppingNuevo.innerText = "Queso extra";

//04-AGREGARLO CON .APPEND(),
listaToppingAgregar.append(toppingNuevo);

//REMOVER un elemento con .REMOVE()
toppingNuevo.remove();

//AGREGARLO CON .APPENDCHILD() PARA ELEMENTOS HTML, 1 solo elemento
listaToppingAgregar.appendChild(toppingNuevo);
//listaToppingAgregar.append("Append puede añadir STRINGS...","Y varios elementos, no solo 1");

// #endregion seccion 6


//------SECCIÓN 7: JERARQUÍA DEL DOM:RECORRER EL DOM POR PADRES, HIJOS, HERMANOS------
console.log("\n------SECCIÓN 7: JERARQUÍA DEL DOM:RECORRER EL DOM POR PADRES, HIJOS, HERMANOS-------");
// #region seccion 7

//Recorrer el dom desde la lista ul con id lista-toppings
const listaToppingJerarquia = document.getElementById("lista-toppings");

console.log(listaToppingJerarquia);

//TRABAJAR CON PADRES
// Ver elemento padre de listaToppingJearquia
console.log(listaToppingJerarquia.parentElement); //Muestra div con id contenedor

// Ver nodo padre (equivalente a elemento padre, aunque más amplio) de listaToppingJearquia
console.log(listaToppingJerarquia.parentNode); 


// Ver elemento padre del elemento padre de  listaToppingJearquia
console.log(listaToppingJerarquia.parentElement.parentElement); //Muestra body


//TRABAJAR CON HIJOS
// Ver elemento hijo de  listaToppingJearquia
console.log(listaToppingJerarquia.children); //Muestra un HTML COLLECTION

// Ver 1º  hijo de  listaToppingJearquia con FIRSTCHILD, mostrará #text porque al trabajar con nodos, se encuentra 1º con un espacio por la indexación
console.log(listaToppingJerarquia.firstChild);


// MEJOR Ver 1º elemento hijo de  listaToppingJearquia con CHILDREN
console.log(listaToppingJerarquia.children[0]);

// MEJOR Ver 1º elemento hijo de  listaToppingJearquia con FIRSTELEMENTCHILD
console.log(listaToppingJerarquia.firstElementChild);

// MEJOR Ver ÚLTIMO elemento hijo de  listaToppingJearquia con LASTELEMENTCHILD
console.log(listaToppingJerarquia.lastElementChild);


//TRABAJAR CON HERMANOS
//Mostrar el elemento hermano anterior de listaToppingJerarquia
console.log(listaToppingJerarquia.previousElementSibling);

//Mostrar el elemento hermano posterior de listaToppingJerarquia
console.log(listaToppingJerarquia.nextElementSibling);

//Existen las versiones para trabajar con nodos .NEXTSIBLING, PREVIOUSSIBLING (mostrará los espacios de la indexación), pero mejor usar las que trabajan con elementos


// #endregion seccion 7


//------SECCIÓN 8: EVENTOS DEL DOM------
console.log("\n------SECCIÓN 8: EVENTOS DEL DOM-------");
// #region seccion 8

//ANTIGUA PRÁCTICA
// Aplicamos un atributo onclick  en li con id albahaca, que al pulsar activa  una F(x) mostrarClickPorConsola()
function mostrarClickPorConsola () { //EVENT HANDLER LA F(X)
    console.log("Acabo de hacer click donde albahaca");
} //Pulsa donde Albahaca (TRIGGER), se ejecuta la F(x)

// onclick="mostrarClickPorConsola()" SERÍA EVENT LISTENER

//Idem pero en el li con id champiñones pudiendo pasar como parámetro un string ("Has hecho click donde champiñones")
function mostrarClickPorConsolaConParam (topping) { //EVENT HANDLER LA F(X)
    console.log(topping);
} 


//NUEVA PRÁCTICA: ADDEVENTLISTENER()
//Obtener referencia del elemento donde haremos click: el li con id aceitunas
const aceitunaClick = document.getElementById("aceitunas");

//F(X) que manejará el evento
function mostrarClickPorConsolaConParamAddEventListener (evento) { //EVENT HANDLER LA F(X)
    console.log(evento); //Devuelve el objeto del evento
    console.log(evento.target); //Devuelve prop target del evento
    console.log(evento.target.innerText); //Devuelve el texto contenido en el target del evento
} 

//Si tenemos claro donde será el evento, se puede omitir event
function mostrarClickPorConsolaConParamAddEventListener2 () { //EVENT HANDLER LA F(X)
    console.log(aceitunaClick); //Devuelve el objeto del evento
    console.log(aceitunaClick.innerText); //Devuelve el texto contenido en el target del evento
} 

//  ADDEVENTLISTENER con el nombre del evento (click) que dispara, nombre de la F(X) que va a manejar ese evento
aceitunaClick.addEventListener("click",mostrarClickPorConsolaConParamAddEventListener );
//Puedes poner directamente la F(x) donde el 2º argumento
/* aceitunaClick.addEventListener("click", (evento) => {
    console.log(evento.target.innerText);
});*/
//Opción sin usar event como parámetro de la f(x) porque sabemos dónde será el evento
aceitunaClick.addEventListener("click",mostrarClickPorConsolaConParamAddEventListener2 );


//VARIANTE REUSANDO ADDEVENTLISTENER() CON TODOS LOS TOPPINGS

const toppingsTodos = document.getElementsByClassName("topping");
console.log (toppingsTodos); //Recuerda que es un HTML COLLECTION que funciona como un array

//F(X) que manejará el evento
function mostrarClickPorConsolaConParamAddEventListenerTodos (evento) { //EVENT HANDLER LA F(X)
    console.log(evento); //Devuelve el objeto del evento
    console.log(evento.target); //Devuelve prop target del evento
    console.log(evento.target.innerText); //Devuelve el texto contenido en el target del evento
} 

//  ADDEVENTLISTENER con el nombre del evento (click) que dispara, nombre de la F(X) que va a manejar ese evento
for (const toppingUno of toppingsTodos ) { //Ciclo for of para recorrer el HTML COLLECTION, y en cada posición aplicar el EVENTLISTENER
    toppingUno.addEventListener("click",mostrarClickPorConsolaConParamAddEventListenerTodos);
}

// #endregion seccion 8

