import styles from "./home.css";
import photo from "./../../../assets/images/backhome.jpg";
export async function HomeScene() {
    const root = document.getElementById("root");

    root.innerHTML = `
    <header class="${styles.header}">
    <div id="${styles.imghome}"><img src=""  alt=""></div>
    <div id="${styles.welcome}">
        <h1>BIENVENIDO</h1>
        <h3>Juan Sebastian</h3>
    </div>
    <div>
        <form id="findUserForm">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <br>
      <button type="submit">Find User</button>
    </form>
    
    </div>
    </header>
    `;
}


// src="https://cdn.pixabay.com/photo/2013/09/15/06/59/medellin-182316_1280.jpg"
