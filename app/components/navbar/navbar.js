import styles from "./navbar.css";
import logo from "/app/assets/images/Diseño_sin_título-removebg-preview.png";
import location_img from "/app/assets/images/location_on_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import link_contact from "/app/assets/images/account_circle_24dp_FILL0_wght400_GRAD0_opsz24-Copy.svg";
import logo_usser from "/app/assets/images/account_circle_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import { navigateTo } from "../../Router";

export function navbar() {

    const html = `
        <section class="${styles.nav_container}">
            <div class="${styles.logo}">
                <img src="${logo}" alt="">
            </div>
            <div class="${styles.items_nav}">
                <ul>
                    <li><a href="/home">Inicio</a></li>
                    <li><a href="/availableProperties">Arrendar</a></li>
                    <li><a href="/home#sponsoring_brands">Sevicios</a></li>
                    <li><a href="/home#footer">Nosotros</a></li>
                </ul>
            </div>
            <div class="${styles.container_reference}">
                
                <div class="${styles.img_user}">
                    <img id="go-to-login-from-home" src="${logo_usser}" alt="">
                </div>
            </div>
        </section>
    `;
    return {html};
}