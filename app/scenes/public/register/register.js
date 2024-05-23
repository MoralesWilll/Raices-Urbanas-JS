import styles from "./register.css";

export async function RegisterPage() {
    const root = document.getElementById("root");

    root.innerHTML = `
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
