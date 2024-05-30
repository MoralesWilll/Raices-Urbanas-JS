import styles from "./footer.css";
import logo from "/app/assets/images/Diseño_sin_título-removebg-preview.png";
import location_img from "/app/assets/images/location_on_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import phone from "/app/assets/images/call_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import email from "/app/assets/images/mail_24dp_FILL0_wght400_GRAD0_opsz24.svg"
import share from "/app/assets/images/share_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import agent from "/app/assets/images/support_agent_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import { navigateTo } from "../../Router";

export function footer() {

    const html = `
        <footer id="footer">
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
                <h2 class="${styles.title_footer}">Canales de contacto</h2>
                <div class="${styles.logo_links}">
                    <a href="#"><img src="${email}" alt=""></a>
                    <a href="#"><img src="${phone}" alt=""></a>
                    <a href="#"><img src="${agent}" alt=""></a>
                    <a href="#"><img src="${share}" alt=""></a>
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