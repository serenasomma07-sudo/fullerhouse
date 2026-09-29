// TARJETAS DE PERSONAJES

const personajes = document.querySelectorAll(".personaje");

personajes.forEach(function(personaje) {

    personaje.addEventListener("click", function() {
        personaje.classList.toggle("girada");
    });

});


// FILTROS DE PERSONAJES

const filtros = document.querySelectorAll(".filtro");

filtros.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Sacar el activo de todos los botones
        filtros.forEach(function(filtro) {
            filtro.classList.remove("activo-filtro");
        });

        // Activar el botón seleccionado
        boton.classList.add("activo-filtro");

        // Saber qué categoría seleccionamos
        const categoria = boton.getAttribute("data-filtro");

        personajes.forEach(function(personaje) {

            const categoriaPersonaje =
                personaje.getAttribute("data-categoria");

            // Mostrar u ocultar personajes
            if (
                categoria === "todos" ||
                categoria === categoriaPersonaje
            ) {
                personaje.style.display = "block";
            } else {
                personaje.style.display = "none";
            }

            // Volver las tarjetas al frente
            personaje.classList.remove("girada");

        });

    });

});

/* =========================================
   LA CASA
========================================= */

const botonesCasa = document.querySelectorAll(".boton-casa");
const imagenCasa = document.getElementById("imagenCasa");
const tituloMomento = document.getElementById("tituloMomento");
const textoMomento = document.getElementById("textoMomento");
const flechaAnterior = document.getElementById("flechaAnterior");
const flechaSiguiente = document.getElementById("flechaSiguiente");


const espaciosCasa = {

    living: [
        {
            imagen: "../imagenes/living1.png",
            titulo: "LIVING",
            texto: `
                <h4>Reuniones familiares</h4>
                <p>
                    Muchos de los momentos importantes terminan
                    con todos juntos en este espacio.
                </p>

                <h4>Una casa llena otra vez</h4>
                <p>
                    Con la llegada de Stephanie, Kimmy y sus hijos,
                    el living vuelve a convertirse en el centro de
                    una familia numerosa.
                </p>
            `
        },

        {
            imagen: "../imagenes/living2.png",
            titulo: "LIVING",
            texto: `
                <h4>El principal punto de encuentro</h4>
                <p>
                    Es el lugar donde la familia suele reunirse para
                    hablar, festejar o resolver problemas.
                </p>
            `
        },

        {
            imagen: "../imagenes/living3.png",
            titulo: "LIVING",
            texto: `
                <h4>La casa a través del tiempo</h4>
                <p>
                    Aunque pasan los años, el living sigue siendo uno
                    de los espacios más importantes de la casa Tanner.
                </p>
            `
        },

        {
            imagen: "../imagenes/living4.png",
            titulo: "LIVING",
            texto: `
                <h4>El centro de la familia</h4>
                <p>
                    El living acompaña a distintas generaciones y
                    continúa siendo un lugar de encuentro.
                </p>
            `
        }
    ],


    cocina: [
        {
            imagen: "../imagenes/cocina1.png",
            titulo: "COCINA",
            texto: `
                <h4>Mucho más que cocinar</h4>
                <p>
                    Es uno de los espacios más cotidianos de la casa:
                    desayunos, charlas y momentos familiares suceden
                    alrededor de la mesa.
                </p>

                <h4>El día a día de los Fuller</h4>
                <p>
                    Gran parte de la convivencia entre DJ, Stephanie
                    y Kimmy se ve reflejada acá.
                </p>
            `
        },

        {
            imagen: "../imagenes/cocina2.png",
            titulo: "COCINA",
            texto: `
                <h4>Siempre hay alguien</h4>
                <p>
                    Con tantos adultos y chicos viviendo juntos,
                    la cocina se transforma constantemente en un
                    lugar de encuentro.
                </p>
            `
        }
    ],


    habitaciones: [
        {
            imagen: "../imagenes/cuarto1.png",
            titulo: "HABITACIÓN DE JACKSON Y MAX",
            texto: `
                <h4>Hermanos y compañeros de cuarto</h4>
                <p>
                    Jackson y Max comparten habitación, aunque sus
                    personalidades son completamente diferentes.
                </p>

                <h4>Caos entre hermanos</h4>
                <p>
                    Discusiones, bromas y peleas forman parte de la
                    convivencia entre los dos.
                </p>

                <h4>Una nueva generación</h4>
                <p>
                    Su habitación representa a los nuevos chicos que
                    crecen en la misma casa donde antes crecieron
                    DJ y sus hermanas.
                </p>
            `
        },

        {
            imagen: "../imagenes/cuarto2.png",
            titulo: "HABITACIÓN DE RAMONA",
            texto: `
                <h4>Su nuevo hogar</h4>
                <p>
                    Ramona llega a vivir a la casa Tanner-Fuller junto
                    con Kimmy y tiene que acostumbrarse a compartir
                    su vida con una familia enorme.
                </p>

                <h4>Su propio espacio</h4>
                <p>
                    Dentro de una casa siempre llena de gente,
                    su habitación funciona como uno de sus espacios
                    más personales.
                </p>

                <h4>Una Gibbler en casa</h4>
                <p>
                    Si antes Kimmy era la vecina que aparecía todo
                    el tiempo, ahora su hija directamente forma
                    parte de la casa.
                </p>
            `
        },

        {
            imagen: "../imagenes/cuarto3.png",
            titulo: "HABITACIÓN DE TOMMY",
            texto: `
                <h4>El más chico de la familia</h4>
                <p>
                    Tommy Jr. es el hijo menor de DJ y crece rodeado
                    de sus hermanos, su mamá y toda su familia.
                </p>

                <h4>Un nombre especial</h4>
                <p>
                    Se llama Tommy Fuller Jr. en honor a su padre,
                    Tommy Fuller, quien murió antes del comienzo
                    de la serie.
                </p>

                <h4>Una nueva infancia en la casa</h4>
                <p>
                    Tommy crece en la misma casa en la que su mamá
                    DJ pasó gran parte de su infancia.
                </p>
            `
        }
    ],


    patio: [
        {
            imagen: "../imagenes/patio1.png",
            titulo: "PATIO",
            texto: `
                <h4>Celebraciones al aire libre</h4>
                <p>
                    El patio es escenario de reuniones, fiestas y
                    distintos momentos compartidos por toda la familia.
                </p>

                <h4>La casa continúa afuera</h4>
                <p>
                    Funciona como una extensión de los espacios de
                    reunión: cuando la familia necesita más lugar,
                    todos terminan acá.
                </p>
            `
        },

        {
            imagen: "../imagenes/patio2.png",
            titulo: "PATIO",
            texto: `
                <h4>Momentos para recordar</h4>
                <p>
                    Es uno de los escenarios utilizados para encuentros
                    y ocasiones especiales a lo largo de la serie.
                </p>
            `
        }
    ]

};


let espacioActual = "living";
let imagenActual = 0;


function mostrarEspacio() {

    const contenido = espaciosCasa[espacioActual][imagenActual];

    imagenCasa.src = contenido.imagen;

    tituloMomento.textContent = contenido.titulo;

    textoMomento.innerHTML = contenido.texto;
}



botonesCasa.forEach(function (boton) {

    boton.addEventListener("click", function () {

        espacioActual = boton.dataset.espacio;

        imagenActual = 0;


        botonesCasa.forEach(function (otroBoton) {
            otroBoton.classList.remove("activo-casa");
        });


        boton.classList.add("activo-casa");

        mostrarEspacio();

    });

});



flechaSiguiente.addEventListener("click", function () {

    imagenActual++;

    if (imagenActual >= espaciosCasa[espacioActual].length) {
        imagenActual = 0;
    }

    mostrarEspacio();

});



flechaAnterior.addEventListener("click", function () {

    imagenActual--;

    if (imagenActual < 0) {
        imagenActual = espaciosCasa[espacioActual].length - 1;
    }

    mostrarEspacio();

});

const inicioSesion = document.querySelector(".inicio");

if (inicioSesion) {
    inicioSesion.addEventListener("click", function () {

        if (window.location.pathname.includes("/subpaginas/")) {
            window.location.href = "registrate.html";
        } else {
            window.location.href = "subpaginas/registrate.html";
        }

    });
}