import styles from './addEdit.css';
import close from './../../../assets/images/close_add.svg'
import add_img from './../../../assets/images/add_img.svg'
import axios from 'axios'
import { navigateTo } from '../../../Router';
export function addEditScene() {

    const html = `
    <div class="${styles.body}">
        <header class="${styles.header}">
            <h1>Formulario de viviendas</h1>
            <img src="${close}" id="close" alt="">
        </header>
        <section class="${styles.updateimg}">
            <div id="drop-area" class="${styles.drop_area}" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);" ondragenter="dragEnterHandler(event);" ondragleave="dragLeaveHandler(event);">
                <p>haz clic para seleccionar los archivos.</p>
                <img src="${add_img}" alt="">
                <input type="file" id="fileInput" class="${styles.fileInput}" multiple>
            </div>
        </section>
        <section class="${styles.section_form}">
            <form action="/send" name="form" method="post" target="_blank" accept-charset="UTF-8">
                <fieldset>
                    <legend>Datos generales: </legend>
                    <!--ask for address-->
                    <input type="text" name="address" id="${styles.address}" placeholder="Dirección:" required><br>
                    <br>

                    <!--Ask name location-->
                    <input type="text" name="name_location" id="${styles.name_location}" placeholder="Nombre de la unidad o barrio" required><br>
                    <br>
                    <div class="${styles.closed_questions}">
                            <!--PropertyObjective-->
                        <label for="objetive">Objetivo: </label><br>
                        <select name="PropertyObjective" id="${styles.PropertyObjective}" required>
                            <option value="1">Arrendamiento</option>
                            <option value="2">Venta</option>
                        </select><br><br>

                        <!--property_type-->
                        <label for="type">Tipo: </label><br>
                        <select name="property_type" id="${styles.property_type}" required>
                            <option value="1">Apartamento</option>
                            <option value="2">Casa</option>
                        </select><br><br>

                        <!--zone-->
                        <label for="type">Zona: </label><br>
                        <select name="zone" id="${styles.zone}" required>
                            <option value="1">Laureles</option>
                            <option value="2">Belen</option>
                            <option value="3">Poblado</option>
                            <option value="4">Envigado</option>
                            <option value="5">Sabaneta</option>
                        </select><br><br>
                    </div>

                    <!--price-->
                    <input type="number" id="${styles.price}" name="price" min="0" placeholder="Precio:" required><br>
                    <br>
                </fieldset>
                <fieldset>
                    <legend>Datos especificos: </legend>
                    <div class="${styles.number_questions1}">
                        <!--NumberRooms-->
                        <input type="number" id="${styles.numberRooms}" name="numberRooms" min="1" placeholder="Numero de alcobas:" required><br>
                        <br>

                        <!--NumberBathrooms-->
                        <input type="number" id="${styles.numberBathrooms}" name="numberBathrooms" min="1" placeholder="Numero de baños:" required><br>
                        <br>
                    </div>
                
                    <div class="${styles.number_questions1}">
                        <!--PropertySize-->
                        <input type="number" id="${styles.propertySize}" name="propertySize" min="1" placeholder="Tamaño de la propiedad:" required><br>
                        <br>

                        <div>
                            <!--stratum-->
                            <label for="type">Estrato: </label><br>
                            <select name="stratum" id="${styles.stratum}" required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select><br><br>   
                        </div>
                        
                    </div>
                    
                </fieldset>
                <fieldset>
                    <legend>Descripción:</legend>
                    <!--Description-->
                    <input type="text" name="description" id="${styles.description}" placeholder="Dirección:" required><br>
                    <br>
                    <!--enviar-->
                    <input type="submit" value="Enviar">
                    <!--reset-->
                    <input type="reset" value="Borrar">
                </fieldset>
                    

            </form>
        </section>
    </div>
    `;
    const logic = () => {
        const cloudinary_url = 'https://api.cloudinary.com/v1_1/dnwpj75xg/image/upload';
        const cloudinary_code ='rsulligy';

        document.getElementById('drop-area').addEventListener('click', function() {
            document.getElementById('fileInput').click();
        }); 
        let image_up;
        document.getElementById('fileInput').addEventListener('change', async (e) => {
            const files = e.target.files[0];

        // Aqui se crea el codigo para subir las imagenes a cloudinary
            const formData = new FormData();
            formData.append('file', files);
            formData.append('upload_preset', cloudinary_code);

            const res = await axios.post(cloudinary_url,formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            image_up = res.data.secure_url;
        });


        // Aqui se llaman los datos del forms
        document.querySelector('form')
            .addEventListener('submit' , e => {
                e.preventDefault()
                const data = Object.fromEntries(
                    new FormData(e.target)
                )
                if(image_up){
                    const userid = localStorage.getItem('id');
                    const finalData = {userid,...data, images: [image_up]}
                    const resp = fetch('http://localhost:3000/properties', {
                    method: 'POST',
                    body: JSON.stringify(finalData)
                    });
                    console.log(resp);
                    navigateTo('/')   
                }
                else{
                    alert("Por lo menos agrega una imagen");
                }
                // console.log(JSON.stringify(data));
            });
        
        const button_backhome = document.getElementById('close')
        button_backhome.addEventListener('click', ()=> {
            navigateTo('/');
        });
    }    
    
    return { html, logic }
}
