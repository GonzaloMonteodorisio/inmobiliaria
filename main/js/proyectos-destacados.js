const proyectosDestacadosContenedor = document.getElementById('proyectos-destacados-contenedor');
console.log(proyectosDestacadosContenedor)
function traerProyectosDestacados(){
    fetch('https://raw.githubusercontent.com/GonzaloMonteodorisio/inmobiliaria-cyc-json/main/json/proyectos-destacados.json')
    .then(response => response.json())
    .then((data )=> {
        let proyectosDestacados = data;
        crearCardsProyectosDestacados(proyectosDestacados, proyectosDestacadosContenedor);
    });
}

function crearCardsProyectosDestacados(array, contenedor){
    array.forEach(element => {
        const {imagen, alt, precio, titulo, informacion, domicilio, enlace} = element;

        const divPadre = document.createElement('div');
        divPadre.classList.add('propiedadesCard');
    
        const divImagen = document.createElement('div');
        divImagen.classList.add('propiedadesCard_img');

        const propiedadDestacadaImagen = document.createElement('img');
        propiedadDestacadaImagen.setAttribute('src', imagen);
        propiedadDestacadaImagen.setAttribute('alt', alt);
        divImagen.appendChild(propiedadDestacadaImagen);
        
        const divCardInfo = document.createElement('div');
        divCardInfo.classList.add('cardInside');

        const p1 = document.createElement('p');
        p1.classList.add('propiedadesCard_subTitle');
        p1.textContent = `${precio}`;  
        divCardInfo.appendChild(p1);

        const h4 = document.createElement('h4');
        h4.classList.add('propiedadesCard_title');
        h4.textContent = `${titulo}`;  
        divCardInfo.appendChild(h4);

        const p2 = document.createElement('p');
        p2.classList.add('propiedadesCard_info');
        const i_p2 = document.createElement('i');
        i_p2.classList.add('bx', 'bx-home');
        p2.appendChild(i_p2);
        p2.textContent = `${informacion}`;  
        divCardInfo.appendChild(p2);

        const p3 = document.createElement('p');
        p3.classList.add('propiedadesCard_info');
        const i_p3 = document.createElement('i');
        i_p3.classList.add('bx', 'bx-location-plus');
        p3.appendChild(i_p3);
        p3.textContent = `${domicilio}`;  
        divCardInfo.appendChild(p3);

        const anchor = document.createElement('a');
        anchor.classList.add('propiedadesCard_button');
        anchor.textContent = `${enlace}`;
        divCardInfo.appendChild(anchor);
        
        divPadre.appendChild(divImagen);
        divPadre.appendChild(divCardInfo);
        contenedor.appendChild(divPadre);
    });
}

window.addEventListener('DOMContentLoaded', ()=> {
    traerProyectosDestacados();
})