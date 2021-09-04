const contactoTestimoniosContenedor = document.getElementById('contenedor-cards-testimonios');

function traerContactoTestimonios(){
    fetch('https://raw.githubusercontent.com/GonzaloMonteodorisio/inmobiliaria-cyc-json/main/json/contacto-testimonios.json')
    .then(response => response.json())
    .then((data )=> {
        let contactoTestimonios = data;
        crearCardsContactoTestimonios(contactoTestimonios, contactoTestimoniosContenedor);
    });
}

function crearCardsContactoTestimonios(array, contenedor){
    array.forEach(element => {
        const {testimonio, imagen, alt, nombre} = element;

        const divPadre = document.createElement('div');
        divPadre.classList.add('cardsText_card', 'equipoCards', 'testimoniosCard');

        const parrafo = document.createElement('p');
        parrafo.classList.add('textCenter', 'equipoCards_titulo');
        parrafo.innerText = `${testimonio}`;
        divPadre.appendChild(parrafo);

        const img = document.createElement('img');
        img.setAttribute('src', `${imagen}`);
        img.setAttribute('alt', `${alt}`);
        divPadre.appendChild(img);

        const h3 = document.createElement('h3');
        h3.innerText = `${nombre}`;
        divPadre.appendChild(h3);

        contenedor.appendChild(divPadre);
    });
}

window.addEventListener('DOMContentLoaded', ()=> {
    traerContactoTestimonios();
})