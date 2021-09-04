let equipo = [];
const equipoContenedor = document.getElementById('contenedor-equipo');
function traerEquipo(){
    fetch('https://raw.githubusercontent.com/GonzaloMonteodorisio/inmobiliaria-cyc-json/main/json/equipo.json')
    .then(response => response.json())
    .then((data)=> {
        equipo = data;
        crearCardsEquipo(equipo, equipoContenedor);
    });
}
/* <div class="cardsText_card equipoCards">
    <img src="img/imgnosotros.jpg" alt="" />
    <h4 class="textCenter equipoCards_titulo">Cintia</h4>
    <p>Administración</p>
</div> */
function crearCardsEquipo(array, contenedor){
    array.forEach(element => {
        const {imagen, alt, integrante, area} = element;

        const div = document.createElement('div');
        div.classList.add('cardsText_card', 'equipoCards');

        const img = document.createElement('img');
        img.setAttribute('src', imagen);
        img.setAttribute('alt', alt);
        div.appendChild(img);

        const h4 = document.createElement('h4');
        h4.classList.add('textCenter', 'equipoCards_titulo');
        h4.textContent = integrante;
        div.appendChild(h4);

        const p = document.createElement('p');
        p.textContent = area;
        div.appendChild(p);

        contenedor.appendChild(div);
    });
}

window.addEventListener('DOMContentLoaded', ()=> {
    traerEquipo();
})