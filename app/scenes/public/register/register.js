import styless from "./register.css";
import { navigateTo } from "../../../Router";
import login_img from "/app/assets/images/img-1.jpg";

export async function RegisterPage() {
    const root = document.getElementById("root");

    root.innerHTML = `
        <body>
    <main class="${styless.login_user}">
        <div class="${styless.form_login}">
            <div class="${styless.text_login}">
                <h2>Regístrate</h2>
                <p>para iniciar sesión</p>
            </div>
            <form action="" method="get">
                <input type="text" class="${styless.form_notifications_login}" name="name-user-login" placeholder="Usuario">

                <input type="email" name="email-user"  class="${styless.form_notifications_login}" placeholder="Email">

                <input type="tel" name="phone-user" class="${styless.form_notifications_login}" placeholder="Teléfono">

                <input type="password" name="password-user-login" id="" class="${styless.form_notifications_login}"
                    placeholder="Contraseña">

                <div class="${styless.link_registration}">
                    <p>¿Ya tienes cuenta? <span class="${styless.link}" id="go-to-login">Inicia sesión</span></p>
                </div>
                
                <button type="submit" class="${styless.button_form_login}">Ingresar</button>
            </form>
        </div>
        <div class="${styless.img_login}">
            <img src="${login_img}" alt="">
        </div>
    </main>
</body>
    `;

    // const goToLoginSpan = document.getElementById("go-to-login");
    // goToLoginSpan.addEventListener("click", () => {
    //     if (true) {
    //         navigateTo("/login");
    //     }
    // });

    const b = document.getElementById("go-to-login");
    b.addEventListener("click", () => {
        if (true) {
            navigateTo("/login");
        }
    });
}
