import { navigateTo } from "../../../Router";
import { formValidator } from "../../../helpers";
import style from "./login.css";
import login_img from "/app/assets/images/img-1.jpg";

export async function LoginPage() {
    const root = document.getElementById("root");

    root.innerHTML = `
    <body>
    <main class="${style.login_user}">
        <div class="${style.form_login}">
            <div class="${style.text_login}">
                <h2>Inicia sesión</h2>
                <p>para continuar</p>
            </div>
            <form action="" method="get" id="login-form">
                <input type="text"  id="email" class="${style.form_notifications_login}" name="username" placeholder="Usuario">
                <input type="password" id="password" name="password" class="${style.form_notifications_login}" placeholder="Contraseña">
                <div class="${style.link_registration}">
                    <p>¿No tienes cuenta? <span class="${style.link}" id="go-to-register">Registrate</span></p>
                </div>
                <button type="submit" class="${style.button_form_login}">Ingresar</button>
            </form>
            </div>
            <div class="${style.img_login}">
                <img src="${login_img}" alt="">
            </div>
        </main>
    </body>
    `;
    const a = document.getElementById("go-to-register");
    if (a) {
        a.addEventListener("click", () => {
            if (true) {
                navigateTo("/register");
            }
        });
    } else {
        console.error("Could not find element with ID 'go-to-register'");
    }

    const form = document.getElementById("login-form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!formValidator(email, password)) {
            alert("Please fill in all fields");
            return;
        }
        const token = await findUser(email, password);
        if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem("id", uId);
            localStorage.setItem("profile", profile);
            navigateTo("/home");
        } else {
            alert("Invalid credentials");
        }
    });
}
var uId = "";
var profile = 0;
async function findUser(username, password) {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            const data = { token: "mi token" };
            uId = users[i].id;
            profile = users[i].roleId;
            return data.token;
        }
    }
    return null;
}
