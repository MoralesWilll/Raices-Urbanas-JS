import styles from "./messages.css";
import property_AA_3401_10 from "../../../assets/images/imgFace.jpg";
import { navigateTo } from "../../../Router";

export async function messagesScene() {
  const root = document.getElementById("root");

  root.innerHTML = `
    <div class="${styles.chatCenter}">  
        <div class="${styles.chatContainer}">
            <div class="${styles.headerBar}">
                <div class="${styles.imgChat}">
                    <img src="${property_AA_3401_10}" class="${styles.profilePicture}">
                </div>
                <div class="${styles.buttonClose}">
                    <button id="close-button" class="${styles.closeButton}">X</button>
                </div>
            </div>
            <div class="${styles.agentMessages}">
                <div class="${styles.agentMessage}">
                    <div class="${styles.nameText}">
                        <h4 class="${styles.username} ">Mariana Pérez</h4>
                    </div>
                    <p>¡Hola, Dilan!</p>
                    <p class="${styles.textChat}">Estoy interesado en la casa</p>
                </div>
            </div>
            <div class="${styles.userMessages}">
                <div class="${styles.userMessage}">
                    <h4 class="${styles.username}">Dilan Numa</h4>
                    <p>¡Hola!</p>
                    <p>dime como te puedo ayudar?</p>
                </div>
            </div>
            <div class="${styles.agentMessages}">
                <div class="${styles.agentMessage}">
                    <div class="${styles.nameText}">
                        <h4 class="${styles.username} ">Mariana Pérez</h4>
                    </div>
                    <p>Quiero más fotos de la propiedad</p>
                </div>
            </div>
            <form class="${styles.messageForm}">
                <input type="text" class="${styles.messageInput}" placeholder="Escribe tu mensaje...">
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
    `;

  const a = document.getElementById("close-button");
  a.addEventListener("click", function () {
    navigateTo("/propertyView");
  });
}
