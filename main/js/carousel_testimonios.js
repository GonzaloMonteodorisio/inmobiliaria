// Array de testimonios
const TESTIMONIOS =[
    {nombre: 'Mariana', testimonio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet aliquam egestas quis est nibh congue venenatis duis.', img: './img/imgnosotros.jpg'},
    {nombre: 'Juan', testimonio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet aliquam egestas quis est nibh congue venenatis duis. Aenean elit magna ultricies sed.', img: './img/imgnosotros.jpg'},
    {nombre: 'Martín', testimonio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet aliquam egestas quis est nibh congue venenatis duis.', img: './img/imgnosotros.jpg'}
];
//Función para crear la card de cada testimonio
function crearCardTestimonio(testimonio, index){
    const divPadre = document.createElement('div');
    divPadre.classList.add('slider_contenedor', 'slide');
    divPadre.setAttribute('id', 'slide');
    const divHijo = document.createElement('div');
    divHijo.classList.add('slider_testimonios');
    divHijo.setAttribute('id', 'slider_testimonios');

    const parrafo = document.createElement('p');
    parrafo.innerText = `${testimonio.testimonio}`;
    divHijo.appendChild(parrafo);

    const divNieto = document.createElement('div');

    const imagen = document.createElement('img');
    imagen.setAttribute('src', `${testimonio.img}`);
    imagen.setAttribute('alt', 'persona');
    divNieto.appendChild(imagen);

    const nombre = document.createElement('h4');
    nombre.innerText = `${testimonio.nombre}`;
    divNieto.appendChild(nombre);

    divHijo.appendChild(divNieto);

    const indicadoresDiv = document.createElement('div');
    indicadoresDiv.classList.add('indicador');
    indicadoresDiv.setAttribute('id', 'indicador');
    divHijo.appendChild(indicadoresDiv);

    divPadre.appendChild(divHijo);
    console.log(divPadre)
    contenedor_testimonios.appendChild(divPadre);

    return divPadre;
}

window.addEventListener('DOMContentLoaded', ()=> {
    //Contenedor de testimonios
    const contenedor_testimonios = document.getElementById('contenedor_testimonios');
    console.log(contenedor_testimonios);
     
    let i = 0;
    
    crearCardTestimonio(TESTIMONIOS[0], 0);
    const divIndicadores = document.querySelector('#indicadores');
    console.log(divIndicadores);
    //Creamos el círculo de prev
    const divPrev = document.createElement('span');
    divPrev.classList.add('prev');
    divPrev.id = 'prev';
    divIndicadores.appendChild(divPrev);
    // Creamos cada círculo del carousel
    for (let i=0; i < TESTIMONIOS.length; i++){
        const div = document.createElement('span');
        div.classList.add('btnTestimonial');
        div.id = i;
        divIndicadores.appendChild(div);
    }
    //Creamos el círculo de next
    const divNext = document.createElement('span');
    divNext.classList.add('next');
    divNext.id = 'next';
    divIndicadores.appendChild(divNext);

    const circulos = document.querySelectorAll('.btnTestimonial');
    circulos[0].classList.add('resaltado');

    const slideshow = ()=> {

        const circulo_actual = Array.from(circulos).find(el => parseInt(el.id) === i);
        console.log(circulo_actual)
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'));
        circulo_actual.classList.add('resaltado');

        i++;

        if(i === TESTIMONIOS.length) {
            i = 0;
        }

        setTimeout(()=> {
            contenedor_testimonios.innerHTML = '';
            crearCardTestimonio(TESTIMONIOS[i], i);
        },1000);
    }
    setInterval(slideshow, 4000);

})

