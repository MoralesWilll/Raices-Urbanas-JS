
import styless from "./register.css";
import { navigateTo } from "../../../Router";
import login_img from "/app/assets/images/img-1.jpg";
import styles from "./register.css";


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
=======
        <form id="registration-form">
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br>

  <label for="phone">Phone Number:</label><br>
  <input type="tel" id="phone" name="phone"><br>

  <label for="password">Password:</label><br>
  <input type="password" id="password" name="password"><br>

  <input type="submit" value="Submit">
</form>
    `;
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;

        try {
            await registerUser(username, email, phone, password);
        } catch (error) {
            console.error("Registration failed:", error);
        }
    });

    async function registerUser(username, email, phone, password) {
        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, phone, password }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Error ${response.status}: ${errorMessage}`);
            }

            console.log("User registered successfully");
        } catch (error) {
            console.error("Registration failed:", error);
        }
    }

}
