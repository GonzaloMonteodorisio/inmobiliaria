const proyectosContenedor = document.getElementById('proyectos');
function traerProyectos(url, contenedor){
    fetch(url)
    .then(response => response.json())
    .then((proyectos)=> {
        console.log(proyectos)
        crearCardsProyectos(proyectos, contenedor);       
    });
}
function crearCardsProyectos(array, contenedor){
    array.forEach(element => {  
        const {titulo, imagen, alt, informacion, descripcion} = element;     
        const divPadre = document.createElement('div');
        divPadre.classList.add('proyectos', 'section');

        const h2 = document.createElement('h2');
        h2.classList.add('proyectos_section_titulo');
        h2.textContent = `${titulo}`;
        divPadre.append(h2);

        const divHijo = document.createElement('div');
        divHijo.classList.add('grid');

        const divImagen = document.createElement('div');
        divImagen.classList.add('proyectos_wrapper_right');
        const img = document.createElement('img');
        img.setAttribute('src', `${imagen}`);
        img.setAttribute('alt', `${alt}`);
        divImagen.appendChild(img);
        divHijo.appendChild(divImagen);

        const divDescripcion = document.createElement('div');
        divDescripcion.classList.add('proyectos_wrapper_left');
        const h4 = document.createElement('h4');
        h4.classList.add('proyectos_wrapper_left_title');
        h4.textContent = `${informacion}`;
        divDescripcion.appendChild(h4);
        const p = document.createElement('p');
        p.classList.add('proyectos_wrapper_left_text');
        p.textContent = `${descripcion}`;
        divDescripcion.appendChild(p);
        divHijo.appendChild(divDescripcion);

        divPadre.appendChild(divHijo);
    
        contenedor.appendChild(divPadre);
    });
}

window.addEventListener('DOMContentLoaded', ()=> {
    traerProyectos('https://raw.githubusercontent.com/GonzaloMonteodorisio/inmobiliaria-cyc-json/main/json/proyectos.json', proyectosContenedor); 
})