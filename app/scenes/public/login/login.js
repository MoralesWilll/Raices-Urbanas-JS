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
            <form action="" method="get">
                <input type="text" class="${style.form_notifications_login}" name="name-user-login" placeholder="Usuario">
                <input type="password" name="password_user_login" id="" class="${style.form_notifications_login}" placeholder="Contraseña">
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

    // const form = document.getElementById("loginForm");
    // form.addEventListener("submit", async (event) => {
    //     event.preventDefault(); // previene el comportamiento por default que es, recargar la pagina
    //     const email = document.getElementById("email").value;
    //     const password = document.getElementById("password").value;

    //     if (!formValidator(email, password)) {
    //         alert("Please fill in all fields");
    //         return;
    //     }
    //     const token = await findUser(email, password);
    //     if (token) {
    //         localStorage.setItem("token", token);
    //         console.log("True");
    //         navigateTo("/home");
    //     } else {
    //         alert("Invalid credentials");
    //     }
    // });
}

async function login(email, password) {
    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Error ${response.status}: ${errorMessage}`);
        }

        const data = { token: "mi token" };
        return data.token;
    } catch (error) {
        console.error("Login failed:", error);
        return null;
    }
}

async function findUser(username, password) {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return true;
        }
    }
    return false;
}
