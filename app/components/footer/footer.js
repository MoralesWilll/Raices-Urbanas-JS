import styles from "./footer.css";
import logo from "/app/assets/images/Diseño_sin_título-removebg-preview.png";
import location_img from "/app/assets/images/location_on_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import link_contact from "/app/assets/images/account_circle_24dp_FILL0_wght400_GRAD0_opsz24-Copy.svg";
import { navigateTo } from "../../Router";

export function footer() {

    const html = `
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
    `;
    return {html};
}