import styles from './notification.css';
import img from "/app/assets/images/colombia-2722716_1920.jpg";
import home from "/app/assets/images/home_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import mail from "/app/assets/images/mail_24dp_FILL0_wght400_GRAD0_opsz24.svg";
export async function notificationScene() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
        <body>
    <main class="${styles.login_user}">
        <div class="${styles.img_login}">
            <img src="${img}" alt="}">
        </div>
        <div class="${styles.form_login}">
            <div class="${styles.text_login}">
                <h2>Notificaciones</h2>
                <div class="${styles.notifications_admin}">
                    <img src="${home}" alt="}">
                    <p><b>Visita a la propiedad (Castropol / Medellín)</b>
                        <br>Cliente: Mariana Pérez Serna
                        <br>Número de teléfono: 1234-56780
                        <br>12 de Mayo del 2024
                        <br>Hora: 09:00</p>
                </div>

                <div class="${styles.notifications_admin}">
                    <img src="${mail}" alt="}">
                    <p><b>Mensaje</b>
                        <br>Cliente: Mariana Pérez Serna
                        <br>Lorem Ipsum is simply dummy 
                        <br>text of the printing and typesetting industry
                    </p>
                </div>
                <div class="${styles.notifications_admin}">
                    <img src="${home}" alt="}">
                    <p><b>Visita a la propiedad (Castropol / Medellín)</b>
                        <br>Cliente: Mariana Pérez Serna
                        <br>Número de teléfono: 1234-56780
                        <br>12 de Mayo del 2024
                        <br>Hora: 09:00
                    </p>
                </div>

                <div class="${styles.notifications_admin}">
                    <img src="/mail_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="}">
                    <p><b>Mensaje</b>
                        <br>Cliente: Mariana Pérez Serna
                        <br>Lorem Ipsum is simply dummy
                        <br>text of the printing and typesetting industry
                    </p>
                </div>
            </div>
            
        </div>
        <div class="${styles.img_close}">
            <button><img src="/cancel_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="}"></button>
        </div>
    </main>
</body>
    `;
    
    //Aqui se pone la logica de esta pagina, botones que redirigen u cualquier otra cosa


}