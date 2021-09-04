let propiedades = [];
const propiedadesContenedor = document.getElementById('propiedades-contenedor');
function traerPropiedades(){
    fetch('https://raw.githubusercontent.com/GonzaloMonteodorisio/inmobiliaria-cyc-json/main/json/propiedades.json')
    .then(response => response.json())
    .then((data )=> {
        propiedades = data;
        crearCardsPropiedades(propiedades, propiedadesContenedor);
    });
}

function crearCardsPropiedades(array, contenedor){
    array.forEach(element => {
        const divPadre = document.createElement('div');
        divPadre.classList.add('propiedadesCard');
    
        const divImagen = document.createElement('div');
        divImagen.classList.add('propiedadesCard_img');

        const propiedadImagen = document.createElement('img');
        propiedadImagen.setAttribute('src', './img/canitashome2.jpeg');
        propiedadImagen.setAttribute('alt', 'casa con jardín');
        divImagen.appendChild(propiedadImagen);
        
        const divCardInfo = document.createElement('div');
        divCardInfo.classList.add('cardInside');

        const p1 = document.createElement('p');
        p1.classList.add('propiedadesCard_subTitle');
        p1.textContent = `${element.precio}`;  
        divCardInfo.appendChild(p1);

        const h4 = document.createElement('h4');
        h4.classList.add('propiedadesCard_title');
        h4.textContent = `${element.titulo}`;  
        divCardInfo.appendChild(h4);

        const p2 = document.createElement('p');
        p2.classList.add('propiedadesCard_info');
        const i_p2 = document.createElement('i');
        i_p2.classList.add('bx', 'bx-home');
        p2.appendChild(i_p2);
        p2.textContent = `${element.informacion}`;  
        divCardInfo.appendChild(p2);

        const p3 = document.createElement('p');
        p3.classList.add('propiedadesCard_info');
        const i_p3 = document.createElement('i');
        i_p3.classList.add('bx', 'bx-location-plus');
        p3.appendChild(i_p3);
        p3.textContent = `${element.domicilio}`;  
        divCardInfo.appendChild(p3);

        const anchor = document.createElement('a');
        anchor.classList.add('propiedadesCard_button');
        anchor.textContent = `${element.enlace}`;
        divCardInfo.appendChild(anchor);
        
        divPadre.appendChild(divImagen);
        divPadre.appendChild(divCardInfo);
        contenedor.appendChild(divPadre);
    });
}

window.addEventListener('DOMContentLoaded', ()=> {
    traerPropiedades();
})

/* <div class="propiedadesCard">
    <div class="propiedadesCard_img">
        <img src="img/canitashome2.jpeg" alt="casa con jardín">
    </div>
    <div class="cardInside">
        <p class="propiedadesCard_subTitle">Venta - U$S50.000</p>
        <h4 class="propiedadesCard_title" >Cañitas</h4>
        <p class="propiedadesCard_info"><i class='bx bx-home'></i>2,3 y 4 ambientes</p>
        <p class="propiedadesCard_info"><i class='bx bx-location-plus'></i>Italia 2131, San Miguel</p>
        <a class="propiedadesCard_button" href="">Más Información</a>
    </div>
</div> */