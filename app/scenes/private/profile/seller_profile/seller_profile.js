import styles from './seller_profile.css';
import { header_profile } from './../../../../components/comp_profile/header_profile/index.js'
import { addEditScene } from '../../../private/add-edit/index.js';
import { navigateTo } from '../../../../Router.js';
import img_dashboard from './../../../../assets/images/img_user_profile/dashboard.png'

import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './carousel/EmblaArrowButtons.js'

export async function seller_profile() {
    const root = document.getElementById('root');
    const { html: headerProfileHtml, logic: headerProfileLogic } = header_profile()
    const { html: addEditHtml, logic: addEditLogic} = addEditScene()
    root.innerHTML = `
    ${headerProfileHtml}
    <nav class="${styles.nav}">
        <button class="${styles.button_nav}"><strong>Notificaciones</strong></button>
    
        <button class="${styles.button_nav}" id="add_home"><strong>Agregar vivienda</strong></button>
    
        <button class="${styles.button_nav}" id="back_home"><strong>Volver</strong></button>
    </nav>



    <section class="${styles.carousel} embla">
        <div id="${styles.add_property}"><h2>Viviendas agregadas:</h2></div>

        <div class="${styles.carousel_properties} embla__viewport">
            <div class="${styles.properties} embla__container" id="property_add">
                
            </div>
        </div>
        <div class="embla__controls ${styles.embla__controls}">
            <div class="embla__buttons ${styles.embla__buttons}">
            <button
                class="${styles.embla__button} embla__button embla__button--prev"
                type="button"
                disabled=""
            >
                <svg class="embla__button__svg ${styles.embla__button__svg}" viewBox="0 0 532 532">
                <path
                    fill="currentColor"
                    d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                ></path>
                </svg></button
            ><button
                class="${styles.embla__button} embla__button embla__button--next"
                type="button"
                disabled=""
            >
                <svg class="embla__button__svg ${styles.embla__button__svg}" viewBox="0 0 532 532">
                <path
                    fill="currentColor"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                ></path>
                </svg>
            </button>
            </div>
        </div>
        
    </section>

    <section class="${styles.dashboard}">
        <div id="${styles.fondo_dashboard}">
            <h1>Estadisticas de la propiedad</h1>
            <img src="${img_dashboard}" alt="">
        </div>
    </section>
    <dialog id="addEdit">
        ${addEditHtml}
    </dialog>
    `;
    const button_backhome = document.getElementById('back_home')
    button_backhome.addEventListener('click', ()=> {
        navigateTo('/register');
    });
    const modal = document.querySelector('#addEdit')
    const button_addhome = document.getElementById('add_home')
    button_addhome.addEventListener('click', ()=> {
        modal.showModal();
    });

    headerProfileLogic();
    addEditLogic();
    
    //agregar property

    const property_add = document.getElementById('property_add');

    fetch(`http://localhost:3000/properties?userid=${localStorage.getItem('id')}`, {
    method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('NO responde');
        }
        return response.json(); 
    })
    .then(propertys => {
        console.log(propertys);
        propertys.forEach(property => {
            const prop = document.createElement('DIV');
            prop.innerHTML += `
                <div id="${styles.property}" class="embla__slide">
                    <div id="${styles.img_property}"><img src="${property.images}" alt=""></div>
                    <div id="${styles.description_property}"><p>${property.address}</p><p>${property.price}$</p></div>
                    <div id="${styles.button_edit}"><button>Editar</button></div>
                </div>
                `;
            property_add.appendChild(prop);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

    /////////////Carousel///////////////

    const OPTIONS = { slidesToScroll: 'auto' }

    const emblaNode = document.querySelector('.embla')
    const viewportNode = emblaNode.querySelector('.embla__viewport')
    const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
    const nextBtnNode = emblaNode.querySelector('.embla__button--next')
    const dotsNode = emblaNode.querySelector('.embla__dots')

    const emblaApi = EmblaCarousel(viewportNode, OPTIONS)

    const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevBtnNode,
    nextBtnNode
    )

    emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
    


            
}