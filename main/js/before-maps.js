let beforeMaps = [];
const beforeMapsContenedor = document.getElementById('before-maps-contenedor');
function traerBeforeMaps(){
    fetch('https://raw.githubusercontent.com/GonzaloMonteodorisio/inmobiliaria-cyc-json/main/json/before-maps.json')
    .then(response => response.json())
    .then((data)=> {
        beforeMaps = data;
        crearCardsBeforeMaps(beforeMaps, beforeMapsContenedor);
    });
}

function crearCardsBeforeMaps(array, contenedor){
    array.forEach(element => {
        const divPadre = document.createElement('div');
        divPadre.classList.add('contenedor');

        const h5 = document.createElement('h5');
        h5.classList.add('contenedor_title');
        const icono = document.createElement('i');
        icono.classList.add(`${element.class_icono_1}`, `${element.class_icono_2}`);
        h5.appendChild(icono);
        h5.append(`${element.clave}`);  
        divPadre.appendChild(h5);

        const p = document.createElement('p');
        p.classList.add('contenedor_text');
        p.textContent = `${element.descripcion}`;  
        divPadre.appendChild(p);
        
        contenedor.appendChild(divPadre);
    });
}

window.addEventListener('DOMContentLoaded', ()=> {
    traerBeforeMaps();
})