window.addEventListener('DOMContentLoaded', ()=> {
    // Elegimos contenedor del grupo de cards de la sección "Por qué elegirnos?"
    const elegirnosCardsGroup = document.getElementById('elegirnos-cards-group');
    console.log(elegirnosCardsGroup);
    traerElegirnos(elegirnosCardsGroup)
})

function traerElegirnos(elegirnosCardsGroup){
    fetch('https://raw.githubusercontent.com/GonzaloMonteodorisio/inmobiliaria-cyc-json/main/json/elegirnos.json')
    .then(response => response.json())
    .then((data )=> {
        let elegirnos = data;
        console.log(elegirnos)
        crearCardsElegirnos(elegirnos, elegirnosCardsGroup);
    });
}

// Crear cards "Por qué elegirnos?"
function crearCardsElegirnos(array, contenedor){
    array.forEach(element => {
        const divPadre = document.createElement('div');
        divPadre.classList.add('cardsText', 'grid');
    
        const divHijo = document.createElement('div');
        divHijo.classList.add('cardsText_card');
    
        const h4 = document.createElement('h4');
        h4.classList.add('textCenter');
        h4.textContent = `${element.motivo}`;  
        divHijo.appendChild(h4);
        
        const p = document.createElement('p');
        p.textContent = `${element.descripcion}`;  
        divHijo.appendChild(p);
        
        divPadre.appendChild(divHijo);
        contenedor.appendChild(divPadre);
    });
}


