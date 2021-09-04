const footer = document.getElementById('footer');
function traerFooter(url, contenedor){
    fetch(url)
    .then(response => response.json())
    .then((footer)=> {
        console.log(footer)
        crearCardsFooter(footer, contenedor);       
    });
}
function crearCardsFooter(array, contenedor){
    array.forEach(element => {  
        const {titulo_newsletter, texto_newsletter, email_placeholder, xmlns, path_d, titulo_nosotros, texto_nosotros, titulo_links, href, a_inicio, a_proyectos, a_inversiones, a_nosotros, a_preguntas_frecuentes, a_contacto, h2_contacto, class_email_1, class_email_2, email, class_telefono_1, class_telefono_2, telefono, class_direccion_1, class_direccion_2, direccion, titulo_redes, class_facebook_1, class_facebook_2, class_facebook_3, class_instagram_1, class_instagram_2, class_instagram_3, class_youtube_1, class_youtube_2, class_youtube_3} = element; 

        contenedor.innerHTML = `
        <div class="footer_first">
            <div class="newsletter row">
                <div class="text">
                    <h4 class="text_title">${titulo_newsletter}</h4>
                    <p class="text_para">${texto_newsletter}</p>
                </div>       
                <div class="search row">
                    <input type="email" placeholder="${email_placeholder}">
                    <button class="email" type="submit">
                        <svg width="30" height="25" viewBox="0 0 22 20" fill="none" xmlns="${xmlns}">
                            <path d="${path_d}" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>    
        </div>
        <div class="footer_second">
            <div class="footer_list row">
                <div class="footer_list_row">              
                    <div>
                        <h2 class="footer_item_title">${titulo_nosotros}</h2>
                        <p class="footer_item_text">${texto_nosotros}</p>
                    </div>
                </div>
                <div class="footer_list_row">
                    <div>
                        <h2 class="footer_item_title">${titulo_links}</h2>
                        <ul class="footer_link">
                            <li class="footer_links">
                                <a href="${href}">${a_inicio}</a>
                            </li>
                            <li class="footer_links">
                                <a href="${href}">${a_proyectos}</a>
                            </li>
                            <li class="footer_links">
                                <a href="${href}">${a_inversiones}</a>
                            </li>
                            <li class="footer_links">
                                <a href="${href}">${a_nosotros}</a>
                            </li>
                            <li class="footer_links">
                                <a href="${href}">${a_preguntas_frecuentes}</a>
                            </li>
                            <li class="footer_links">
                                <a href="${href}">${a_contacto}</a>
                            </li>
                        </ul>               
                    </div>
                </div>
                <div class="footer_list_row">
                    <div class="footer_list_row_contacto">
                        <h2 class="footer_item_title">${h2_contacto}</h2>               
                        <div class="footer_link">
                            <p>
                                <i class="${class_email_1} ${class_email_2}"></i>
                                ${email}
                            </p>
                            <p>
                                <i class="${class_telefono_1} ${class_telefono_2}"></i>
                                ${telefono}
                            </p>
                            <p>
                                <i class="${class_direccion_1} ${class_direccion_2}"></i>
                                ${direccion}
                            </p>                    
                        </div>
                        <h2 class="footer_item_subTitle">${titulo_redes}</h2>
                        <a href="${href}">
                            <i class="${class_facebook_1} ${class_facebook_2} ${class_facebook_3}"></i>
                        </a>
                        <a href="${href}">
                            <i class="${class_instagram_1} ${class_instagram_2} ${class_instagram_3}"></i>
                        </a>
                        <a href="${href}">
                            <i class="${class_youtube_1} ${class_youtube_2} ${class_youtube_3}"></i>
                        </a>
                </div>
                </div>
            </div>
        </div>    
        `;

        // const divFooter1 = document.createElement('div');
        // divFooter1.classList.add('footer_first');

        // const divNewsletter = document.createElement('div');
        // divNewsletter.classList.add('newsletter', 'row');

        // const divTextNewsletter = document.createElement('div');
        // divTextNewsletter.classList.add('text');
        // const h4 = document.createElement('div');
        // h4.classList.add('text_title');
        // h4.textContent = `${titulo_newsletter}`;
        // divTextNewsletter.appendChild(h4);
        // const p_newsletter = document.createElement('p');
        // p_newsletter.classList.add('text_para');
        // p_newsletter.textContent = `${texto_newsletter}`;
        // divTextNewsletter.appendChild(p_newsletter);
        // divNewsletter.appendChild(divTextNewsletter);

        // const divEnviarEmail = document.createElement('div');
        // divEnviarEmail.classList.add('search', 'row');

        // const inputEmail = document.createElement('input');
        // inputEmail.setAttribute('type', 'email');
        // inputEmail.setAttribute('placeholder', email_placeholder);
        // divEnviarEmail.appendChild(inputEmail);
        // const buttonEmail = document.createElement('button');
        // buttonEmail.classList.add('email');
        // buttonEmail.setAttribute('type', 'submit');
        // const flecha = document.createElement('svg');
        // flecha.setAttribute('width', '30');
        // flecha.setAttribute('height', '25');
        // flecha.setAttribute('viewBox', '0 0 22 20');
        // flecha.setAttribute('fill', 'none');
        // flecha.setAttribute('xmlns', xmlns);
        // const path = document.createElement('path');
        // path.setAttribute('d', path_d);
        // path.setAttribute('stroke', 'white');
        // path.setAttribute('stroke-width', '2');
        // path.setAttribute('stroke-linecap', 'round');
        // path.setAttribute('stroke-linejoin', 'round');
        // flecha.appendChild(path);
        // buttonEmail.appendChild(flecha);
        // divEnviarEmail.appendChild(buttonEmail);
        // divFooter1.appendChild(divTextNewsletter);
        // divFooter1.appendChild(divEnviarEmail);

        // const divFooter2 = document.createElement('div');
        // divFooter2.classList.add('footer_second');

        // const footerLista1 = document.createElement('div');
        // footerLista1.classList.add('footer_list', 'row');
        // const footerLista1Fila = document.createElement('div');
        // footerLista1Fila.classList.add('footer_list_row');
        // const divFila1 = document.createElement('div');
        // const h2_1 = document.createElement('h2');
        // h2_1.classList.add('footer_item_title');
        // h2_1.textContent = `${titulo_nosotros}`;
        // divFila1.appendChild(h2_1);
        // const p_1 = document.createElement('p');
        // p_1.textContent = `${texto_nosotros}`;
        // divFila1.appendChild(p_1);
        // footerLista1Fila.appendChild(divFila1);

        // const footerLista2 = document.createElement('div');
        // footerLista2.classList.add('footer_list_row');
        // const footerLista2Fila = document.createElement('div');
        // const h2_2 = document.createElement('h2');
        // h2_2.classList.add('footer_item_title');
        // h2_2.textContent = `${titulo_links}`;
        // footerLista2Fila.appendChild(h2_2);

        // const ul_links = document.createElement('ul');
        // ul_links.classList.add('footer_link');
        // const li_1 = document.createElement('li');
        // li_1.classList.add('footer_links');
        // const a_1 = document.createElement('a');
        // a_1.setAttribute('href', href);
        // a_1.textContent = a_inicio;
        // li_1.appendChild(a_1);
        // ul_links.appendChild(li_1);

        // const li_2 = document.createElement('li');
        // li_2.classList.add('footer_links');
        // const a_2 = document.createElement('a');
        // a_2.setAttribute('href', href);
        // a_2.textContent = a_proyectos;
        // li_2.appendChild(a_2);
        // ul_links.appendChild(li_2);

        // const li_3 = document.createElement('li');
        // li_3.classList.add('footer_links');
        // const a_3 = document.createElement('a');
        // a_3.setAttribute('href', href);
        // a_3.textContent = a_inversiones;
        // li_3.appendChild(a_3);
        // ul_links.appendChild(li_3);

        // const li_4 = document.createElement('li');
        // li_4.classList.add('footer_links');
        // const a_4 = document.createElement('a');
        // a_4.setAttribute('href', href);
        // a_4.textContent = a_nosotros;
        // li_4.appendChild(a_4);
        // ul_links.appendChild(li_4);

        // const li_5 = document.createElement('li');
        // li_5.classList.add('footer_links');
        // const a_5 = document.createElement('a');
        // a_5.setAttribute('href', href);
        // a_5.textContent = a_preguntas_frecuentes;
        // li_5.appendChild(a_5);
        // ul_links.appendChild(li_5);

        // const li_6 = document.createElement('li');
        // li_6.classList.add('footer_links');
        // const a_6 = document.createElement('a');
        // a_6.setAttribute('href', href);
        // a_6.textContent = a_contacto;
        // li_6.appendChild(a_6);
        // ul_links.appendChild(li_6);

        // footerLista2Fila.appendChild(ul_links);
        // footerLista2.appendChild(footerLista2Fila);
        // divFooter2.appendChild(footerLista2);

        // const footerLista3 = document.createElement('div');
        // footerLista3.classList.add('footer_list_row');
        // const footerLista3Contacto = document.createElement('div');
        // footerLista3Contacto.classList.add('footer_list_row_contacto');
        // const h2_3 = document.createElement('h2');
        // h2_3.classList.add('footer_item_title');
        // footerLista3Contacto.appendChild(h2_3);
        // const footerLinks = document.createElement('div');
        // footerLinks.classList.add('footer_link');

        // const p_email = document.createElement('p');
        // const i_email = document.createElement('i');
        // i_email.classList.add(class_email_1, class_email_2);
        // p_email.appendChild(i_email);
        // p_email.append(`${email}`);
        // footerLinks.appendChild(p_email);

        // const p_telefono = document.createElement('p');
        // const i_telefono = document.createElement('i');
        // i_telefono.classList.add(class_telefono_1, class_telefono_2);
        // p_telefono.appendChild(i_telefono);
        // p_telefono.append(`${telefono}`);
        // footerLinks.appendChild(p_telefono);

        // const p_direccion = document.createElement('p');
        // const i_direccion = document.createElement('i');
        // i_direccion.classList.add(class_direccion_1, class_direccion_2);
        // p_direccion.appendChild(i_direccion);
        // p_direccion.append(`${direccion}`);
        // footerLinks.appendChild(p_direccion); 
        
        // footerLista3Contacto.appendChild(footerLinks);

        // const h2_4 = document.createElement('h2');
        // h2_4.classList.add('footer_item_subTitle');
        // h2_4.textContent = `${titulo_redes}`;
        // footerLista3Contacto.appendChild(h2_4);

        // const a_facebook = document.createElement('a');
        // a_facebook.setAttribute('href', href);
        // const i_facebook = document.createElement('i');
        // i_facebook.classList.add(class_facebook_1, class_facebook_2, class_facebook_3);
        // a_facebook.appendChild(i_facebook);
        // footerLista3Contacto.appendChild(a_facebook);

        // const a_instagram = document.createElement('a');
        // a_instagram.setAttribute('href', href);
        // const i_instagram = document.createElement('i');
        // i_instagram.classList.add(class_instagram_1, class_instagram_2, class_instagram_3);
        // a_instagram.appendChild(i_instagram);
        // footerLista3Contacto.appendChild(a_instagram);

        // const a_youtube = document.createElement('a');
        // a_youtube.setAttribute('href', href);
        // const i_youtube = document.createElement('i');
        // i_youtube.classList.add(class_youtube_1, class_youtube_2, class_youtube_3);
        // a_youtube.appendChild(i_youtube);
        // footerLista3Contacto.appendChild(a_youtube);

        // footerLista3.appendChild(footerLista3Contacto);
        // footerLista1.appendChild(footerLista3);
        // divFooter2.appendChild(footerLista1);

        // contenedor.appendChild(divFooter1);
        // contenedor.appendChild(divFooter2);
    });
}

window.addEventListener('DOMContentLoaded', ()=> {
    traerFooter('https://raw.githubusercontent.com/GonzaloMonteodorisio/inmobiliaria-cyc-json/main/json/footer.json', footer); 
})