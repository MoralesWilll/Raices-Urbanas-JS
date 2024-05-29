import styles from './profile.css';
import { header_profile } from '../../../components/header_profile/index.js'
import { addEditScene } from '../add-edit/index.js';
import { navigateTo } from '../../../Router.js';
import * as echarts from 'echarts';
import 'bootstrap'

import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './carousel/EmblaArrowButtons.js'

export function ProfileScene(profile){
    if (localStorage.getItem('profile') == 1){
        profile = seller_profile();
    }
    else if (localStorage.getItem('profile') == 2){
        profile = buyer_profile();
    }
    else{
        alert("No se encontro el perfil");
    }
};

export function seller_profile() {
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
        <h1 class="${styles.h1}"">Estadisticas:</h1>
        <div id="${styles.fondo_dashboard}">
            <div class="${styles.container1}">
                <div class="${styles.cont11}"><div>Total de visitas:<p>${(parseInt(localStorage.getItem('appoiments-scheduled')))+(parseInt(localStorage.getItem('times-contacted')))}</div></p></div>
                <div class="${styles.cont12}">
                    <div class="${styles.chart2}" id="chart2"></div>
                </div>
             </div>
            <div class="${styles.container2}">
                <div class="${styles.chart1}" id="chart1"></div>
            </div>
        </div>
    </section>
    <dialog id="addEdit">
        ${addEditHtml}
    </dialog>
    `;

    const button_backhome = document.getElementById('back_home')
    button_backhome.addEventListener('click', ()=> {
        navigateTo('/home');
    });
    const modal = document.querySelector('#addEdit')
    const button_addhome = document.getElementById('add_home')
    button_addhome.addEventListener('click', ()=> {
        modal.showModal();
    });

    headerProfileLogic();
    addEditLogic();
    
    //Add property

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

        propertys.forEach(property => {
            const prop = document.createElement('DIV');
            prop.innerHTML += `
                <div id="${styles.property}" class="embla__slide">
                    <div id="${styles.img_property}"><img src="${property.images}" alt=""></div>
                    <div id="${styles.description_property}"><p>${property.address}</p><p>${property.price}$</p></div>
                    <div id="${styles.button_edit}" class="delete_butt"><button data-property-id="${property.id}">Borrar</button></div>
                </div>
                `;
            property_add.appendChild(prop);
            
        });


        // DELETE PROPERTY
        const deleteButtons = document.querySelectorAll(`.delete_butt button`);
        
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                
                const propertyId = button.getAttribute('data-property-id');
                
                
                fetch(`http://localhost:3000/properties/${propertyId}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to delete property');
                    }
                   
                    button.parentNode.parentNode.remove(); 
                    console.log('Property deleted successfully');
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            });
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

    //////////dashboard/////////////

    const getOptionchart1 = () => {
        return {
             tooltip: {
               trigger: 'item'
             },
             series: [
               {
                 name: 'Estadisticas de propiedad',
                 type: 'pie',
                 radius: '50%',
                 data: [
                   { value: localStorage.getItem('appoiments-scheduled'), name: `Contacto: ${localStorage.getItem('appoiments-scheduled')}`},
                   { value: localStorage.getItem('times-contacted'), name: `Cita: ${localStorage.getItem('times-contacted')}`}
                 ],
                 label: {
                     // Configuración del estilo de la etiqueta
                     fontSize: 15, // Tamaño de la letra en píxeles
                     fontWeight: 'bold', // Peso de la letra (opcional)
                     fontStyle: 'italic', // Estilo de la letra (opcional)
                     color: 'white' // Color de la letra (opcional)
                   },
                 emphasis: {
                   itemStyle: {
                     shadowBlur: 10,
                     shadowOffsetX: 0,
                     shadowColor: 'rgb(255, 255, 255)'
                   }
                 },
                 itemStyle: {
                     // Puedes establecer el color de los fragmentos internos aquí
                     color: function(params) {
                       // Puedes proporcionar un arreglo de colores para cada fragmento
                       var colorList = ['#ff5101', '#808080'];
                       return colorList[params.dataIndex];
                     }
                   }
               }
             ]
           };
     }
    const getOptionchart2 = () => {
       return {
            xAxis: {
              data: ['Citas','Contactos', 'Visitas']
            },
            yAxis: {},
            dataGroupId: '',
            animationDurationUpdate: 500,
            series: {
              type: 'bar',
              id: 'sales',
              data: [
                {
                  value: localStorage.getItem('appoiments-scheduled'),
                  groupId: 'Citas'
                },
                {
                  value: localStorage.getItem('times-contacted'),
                  groupId: 'Contactos'
                },
                {
                    value: parseInt(localStorage.getItem('times-contacted')) + parseInt(localStorage.getItem('appoiments-scheduled')),
                    groupId: 'Contactos'
                }
              ],
              universalTransition: {
                enabled: true,
                divideShape: 'clone'
              },
              itemStyle: {
                // Puedes establecer el color de las barras aquí
                color: function(params) {
                  // Puedes proporcionar un arreglo de colores para cada barra
                  var colorList = ['#ff5101', '#ff5101', '#ff5101'];
                  return colorList[params.dataIndex];
                }
              }
            }
          };

    } 
     const initchart = ()=>{
         const chart1 = echarts.init(document.getElementById('chart1'));
         const chart2 = echarts.init(document.getElementById('chart2'));
 
         chart1.setOption(getOptionchart1());
         chart2.setOption(getOptionchart2());
     };
 
     initchart();
            
}

export function buyer_profile(){
    const root = document.getElementById('root');
    const { html: headerProfileHtml, logic: headerProfileLogic } = header_profile()

    root.innerHTML = `
    ${headerProfileHtml}
    <nav class="${styles.nav}">
        <button class="${styles.button_nav}"><strong>Notificaciones</strong></button>
    
        <button class="${styles.button_nav}" id="back_home"><strong>Volver</strong></button>
    </nav>
    <section class="${styles.section_buyer}">
        <div id="${styles.buyer}">
            <div id="${styles.buyer_int}"><p>ID:</p></div>
            <div id="${styles.buyer_int2}"><p id="buyer_id"></p></div>
        </div>
        <div id="${styles.buyer}">
            <div id="${styles.buyer_int}"><p>Nombre de usuario:</p></div>
            <div id="${styles.buyer_int2}"><p id="buyer_name"></p></div>
        </div>
        <div id="${styles.buyer}">
            <div id="${styles.buyer_int}"><p>Telefono:</p></div>
            <div id="${styles.buyer_int2}"><p id="buyer_phone"></p></div>
        </div>
        <div id="${styles.buyer}">
            <div id="${styles.buyer_int}"><p>Email:</p></div>
            <div id="${styles.buyer_int2}"><p id="buyer_email"></p></div>
        </div>
    </section>
    `;
    const button_backhome = document.getElementById('back_home')
    button_backhome.addEventListener('click', ()=> {
        navigateTo('/home');
    });

    fetch(`http://localhost:3000/users/${localStorage.getItem("id")}`, {
        
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('NO responde');
            }
            return response.json(); 
        })
        .then(data => {
            
            document.getElementById('buyer_id').textContent = data.id
            document.getElementById('buyer_name').textContent = data.username
            document.getElementById('buyer_phone').textContent = data.phone
            document.getElementById('buyer_email').textContent = data.email
            
            
        })
        .catch(error => {
            console.error('Error:', error);
        });

    headerProfileLogic();
    
}