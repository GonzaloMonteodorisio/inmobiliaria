const proyectosCaracteristicasContenedor1 = document.getElementById('iconos-contenedor-1');
const proyectosCaracteristicasContenedor2 = document.getElementById('iconos-contenedor-2');
function traerProyectosCaracteristicas(url, contenedor){
    fetch(url)
    .then(response => response.json())
    .then((proyectosCaracteristicas)=> {
        crearCardsProyectosCaracteristicas(proyectosCaracteristicas, contenedor);       
    });
}

function crearCardsProyectosCaracteristicas(array, contenedor){
    array.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('iconosItem');
    
        const span = document.createElement('span');
        const icono = document.createElement('i');
        icono.classList.add(`${element.class_icono_1}`, `${element.class_icono_2}`, `${element.class_icono_3}`);
        span.appendChild(icono);
        const p = document.createElement('p');
        p.textContent = `${element.titulo}`;
        div.appendChild(span);
        div.appendChild(p);

        contenedor.appendChild(div);
    });
}

window.addEventListener('DOMContentLoaded', ()=> {
    traerProyectosCaracteristicas('https://raw.githubusercontent.com/GonzaloMonteodorisio/inmobiliaria-cyc-json/main/json/proyectos-caracteristicas-1.json', proyectosCaracteristicasContenedor1);
    traerProyectosCaracteristicas('https://raw.githubusercontent.com/GonzaloMonteodorisio/inmobiliaria-cyc-json/main/json/proyectos-caracteristicas-2.json', proyectosCaracteristicasContenedor2);  
})
