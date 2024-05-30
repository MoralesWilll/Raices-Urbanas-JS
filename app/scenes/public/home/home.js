import styles from "./home.css";
import sell from "/app/assets/images/devices_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import lease from "/app/assets/images/real_estate_agent_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import buy from "/app/assets/images/location_away_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import lease_apt from "/app/assets/images/location_home_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import envigado from "/app/assets/images/envigado.jpg";
import laureles from "/app/assets/images/laureles.jpg";
import sabaneta from "/app/assets/images/sabaneta.jpg";
import itagui from "/app/assets/images/itagui.jpg";
import brand1 from "/app/assets/images/brand-1.png";
import brand2 from "/app/assets/images/brand-2.png";
import brand3 from "/app/assets/images/brand-3.png";
import brand4 from "/app/assets/images/brand-4.png";
import touch from "/app/assets/images/touch_app_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import { navigateTo } from "../../../Router";
import { footer } from "../../../components/footer/footer";
import { navbar } from "../../../components/navbar/navbar";
// import video from '/app/assets/images/video_hero.mp4'


export async function HomeScene() {
    const root = document.getElementById("root");
    const { html: footerHtml } = footer();
    const { html: navbarHtml } = navbar();


    root.innerHTML = `
    <body>
    <header id="home" class="${styles.header_container}"> 
        ${navbarHtml}
        <section class="${styles.container_slider_box}" 
            
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
                <button class="${styles.button_img_locations}" id="go-to-properties-b" class="${styles.locations}" style="background-image: url(${envigado})">
                    <div class="${styles.name_locations}" >
                        <h3 class="${styles.title_locations}">Laureles</h3>
                        <img  src="${touch}" alt="">
                    </div>
                </button>
                <button class="${styles.button_img_locations}" id="go-to-properties-c" class="${styles.locations}" style="background-image: url(${laureles})">
                    <div class="${styles.name_locations}">
                        <h3 class="${styles.title_locations}">Envigado</h3>
                        <img  src="${touch}" alt="">
                    </div>
                </button>
                <button class="${styles.button_img_locations}" id="go-to-properties-d" class="${styles.locations}" style="background-image: url(${sabaneta})">
                    <div class="${styles.name_locations}">
                        <h3 class="${styles.title_locations}">Sabaneta</h3>
                        <img  src="${touch}" alt="">
                    </div>
                </button>
                <button class="${styles.button_img_locations}" id="go-to-properties-e" class="${styles.locations}" style="background-image: url(${itagui})">
                    <div class="${styles.name_locations}">
                        <h3 class="${styles.title_locations}">itagüi</h3>
                        <img  src="${touch}" alt="">
                    </div>
                </button>
            </div>
        </section>

        <section class="${styles.section_sponsoring_brands}" id="sponsoring_brands">
            <div class="${styles.sponsoring_brands}">
                <img src="${brand1}" alt="">
                <img src="${brand2}" alt="">
                <img src="${brand3}" alt="">
                <img src="${brand4}" alt="">
            </div>
        </section>
        ${footerHtml}
    </main>
</styles.$body>`;

    const a = document.getElementById("go-to-login-from-home");
    a.addEventListener("click", function () {
        navigateTo("/login");
    });

    const b = document.getElementById("go-to-properties-b");
    b.addEventListener("click", function () {
        navigateTo("/availableProperties");
    });

    const c = document.getElementById("go-to-properties-c");
    c.addEventListener("click", function () {
        navigateTo("/availableProperties");
    });

    const d = document.getElementById("go-to-properties-d");
    d.addEventListener("click", function () {
        navigateTo("/availableProperties");
    });

    const e = document.getElementById("go-to-properties-e");
    e.addEventListener("click", function () {
        navigateTo("/availableProperties");
    });
}
