import styles from "./home.css";
import logo from "/app/assets/images/Diseño_sin_título-removebg-preview.png";
import logo_usser from "/app/assets/images/account_circle_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import sell from "/app/assets/images/devices_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import lease from "/app/assets/images/real_estate_agent_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import buy from "/app/assets/images/location_away_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import lease_apt from "/app/assets/images/location_home_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import envigado from "/app/assets/images/envigado.jpg"
import laureles from "/app/assets/images/laureles.jpg"
import sabaneta from "/app/assets/images/sabaneta.jpg"
import itagui from "/app/assets/images/itagui.jpg"
import brand1 from "/app/assets/images/brand-1.png";
import brand2 from "/app/assets/images/brand-2.png"
import brand3 from "/app/assets/images/brand-3.png"
import brand4 from "/app/assets/images/brand-4.png"
import location_img from "/app/assets/images/location_on_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import link_contact from "/app/assets/images/account_circle_24dp_FILL0_wght400_GRAD0_opsz24-Copy.svg";
import touch from "/app/assets/images/touch_app_24dp_FILL0_wght400_GRAD0_opsz24.svg"

export async function HomeScene() {
    const root = document.getElementById("root");

    root.innerHTML = `
<body>
    <header class="${styles.header_container}"> 
        <section class="${styles.nav_container}">
            <div class="${styles.logo}">
                <img src="${logo}" alt="">
            </div>
            <div class="${styles.items_nav}">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Arrendar</a></li>
                    <li><a href="#">Sevicios</a></li>
                    <li><a href="#">Nosotros</a></li>
                </ul>
            </div>
            <div class="${styles.container_reference}">
                <div class="${styles.button_contact}">
                    <button type="submit">Contactanos</button>
                </div>
                <div class="${styles.img_user}">
                    <img id="go-to-login-from-home" src="${logo_usser}" alt="">
                </div>
            </div>
        </section>
        <section class="${styles.container_slider_box}">
        
        </section>
    </header>

    <main class="${styles.main_container}">
        <section class="${styles.section_services}">
            <div class="${styles.title_items}">
                <h2>¿Que quieres hacer hoy?</h2>
                <p>Explora nuestros servicios</p>
            </div>
            <div class="${styles.references_services}">
                <div class="${styles.anchore_services}">
                    <a href="#"><img src="${sell}" alt=""></a>
                    <p class="${styles.text_services}">Vender <br> mi imnueble</p>
                </div>
                <div class="${styles.anchore_services}">
                    <a href="#"><img src="${lease}" alt=""></a>
                    <p class="${styles.text_services}">Arrendar <br> mi imnueble</p>
                </div>
                <div class="${styles.anchore_services}">
                    <a href="#"><img src="${buy}" alt=""></a>
                    <p class="${styles.text_services}">Comprar <br> un imnueble</p>
                </div>
                <div class="${styles.anchore_services}">
                    <a href="#"><img src="${lease_apt}" alt=""></a>
                    <p class="${styles.text_services}">Arrrendar <br> un imnueble</p>
                </div>
            </div>
        </section>

        <section class=""${styles.section_locations}">
            <div class="${styles.title_items}">
                <h2>¿Dónde quieres tu espacio?</h2>
            </div>
            <div class="${styles.contain_locations}">
                <button class="${styles.locations}">
                    <div class="${styles.name_locations}">
                        <h3>Envigado</h3>
                        <img src="${touch}" alt="">
                    </div>
                </button>
                <button class="${styles.locations}">
                    <div class="${styles.name_locations}">
                        <h3>Laureles</h3>
                        <img src="${touch}" alt="">
                    </div>
                </button>
                <button class="${styles.locations}">
                    <div class="${styles.name_locations}">
                        <h3>Sabaneta</h3>
                        <img src="${touch}" alt="">
                    </div>
                </button>
                <button class="${styles.locations}">
                    <div class="${styles.name_locations}">
                        <h3>itagüi</h3>
                        <img src="${touch}" alt="">
                    </div>
                </button>
            </div>
        </section>

        <section class="${styles.section_sponsoring_brands}">
            <div class="${styles.sponsoring_brands}">
                <img src="${brand1}" alt="">
                <img src="${brand2}" alt="">
                <img src="${brand3}" alt="">
                <img src="${brand4}" alt="">
            </div>
        </section>
    </main>

    <footer>
        <section class="${styles.footer}">
            <div class="${styles.logo_footer}">
                <img src="${logo}" alt="">
            </div>
            <div class="${styles.locations_and_links}">
                <h2 class="${styles.title_footer}">Visítanos</h2>
                <div class="${styles.address}">
                    <img src="${location_img}" alt="">
                    <p>Calle 47 #33b - 34, El poblado Medellín</p>
                </div>
                <div class="${styles.address}">
                    <img src="${location_img}" alt="">
                    <p>Calle 47 #33b - 34, El poblado Medellín</p>
                </div>
                <div class="${styles.address}">
                    <img src="${location_img}" alt="">
                    <p>Calle 47 #33b - 34, El poblado Medellín</p>
                </div>
                
            </div>
            <div class="${styles.notifications_footer}">
                <h2 class="${styles.title_footer}">Redes sociales</h2>
                <div class="${styles.logo_links}">
                    <a href="#"><img src="${link_contact}" alt=""></a>
                    <a href="#"><img src="${link_contact}" alt=""></a>
                    <a href="#"><img src="${link_contact}" alt=""></a>
                    <a href="#"><img src="${link_contact}" alt=""></a>
                </div>
            </div>
        </section>
        <section class="${styles.copy}">
            <p>Copyright © 2024</p>
        </section>
    </footer>

</styles.$body>`;
}

const a = document.getElementById("go-to-login-from-home");
if (a) {
    a.addEventListener("click", () => {
        if (true) {
            navigateTo("/login");
        }
    });
} 

// src="https://cdn.pixabay.com/photo/2013/09/15/06/59/medellin-182316_1280.jpg"
