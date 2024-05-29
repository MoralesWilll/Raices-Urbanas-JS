import styles from "./propertyView.css";
import property_AA_3401_1 from "../../../assets/images/property-AA-73401-1.jpg"; // 1 from
import property_AA_3401_2 from "../../../assets/images/property-AA-73401-2.jpg"; // 2 from
import property_AA_3401_3 from "../../../assets/images/property-AA-73401-3.jpg"; // 3 from
import property_AA_3401_4 from "../../../assets/images/property-AA-73401-4.jpg"; // 4 from
import property_AA_3401_5 from "../../../assets/images/property-AA-73401-5.jpg"; // 5 from
import property_AA_3401_6 from "../../../assets/images/bano.png"; // 6 from
import property_AA_3401_7 from "../../../assets/images/cama.png"; // 7 from
import property_AA_3401_8 from "../../../assets/images/estacionamiento.png"; // 8 from
import property_AA_3401_9 from "../../../assets/images/la-medida.png"; // 9 from 
import { navigateTo } from "../../../Router";
import { navbar } from "../../../components/navbar/navbar";
import { footer } from "../../../components/footer/footer";

export async function PropertyView() {
    const root = document.getElementById("root");
    const { html: footerHtml } = footer();
    const { html: navbarHtml } = navbar();


    root.innerHTML = `
    ${navbarHtml}
    <section>
        <div class="${styles.images}">
            <img src="${property_AA_3401_1}" class="${styles.main}" />
            <img src="${property_AA_3401_2}" class="${styles.img1}" />
            <img src="${property_AA_3401_3}" class="${styles.img2}" />
            <img src="${property_AA_3401_4}" class="${styles.img3}" />
            <img src="${property_AA_3401_5}" class="${styles.img4}" />
            <p class="${styles.textImg}">Arriendo de apartamento</p>
        </div>

    </section>
    <!-- house description -->
    <section class="${styles.seccionHouseDescription}">
        <!-- property description -->
        <div class="${styles.propertyDescription}">
            <div class="${styles.houseCharacteristics}">
                <h2 class="${styles.titleDescription}">El perpetuo, Laureles</h2>
                <p class="${styles.priceHouses}">$ 2,300,000</p>
            </div>
            <div class="${styles.houseCaracteristicsPropiety}">
                <div class="${styles.houseCaracteristics2}">
                    <div class="${styles.betImg}">
                        <img src="${property_AA_3401_9}" class="${styles.iconDescription}" />
                        <div>
                            <p class="${styles.houseDescriptionMeters}">100</p>
                            <p class="${styles.houseDescriptionMeters}">metros</p>
                        </div>
                    </div>
                    <div class="${styles.betImg}">
                        <img src="${property_AA_3401_7}" class="${styles.iconDescription}" />
                        <div>
                            <p class="${styles.houseDescriptionRooms}">3</p>
                            <p class="${styles.houseDescriptionRooms}">habitaciones</p>
                        </div>
                    </div>
                </div>
                <div class="${styles.houseCaracteristics2}">
                    <div class="${styles.betImg}">
                        <img src="${property_AA_3401_6}" class="${styles.iconDescription}" />
                        <div>
                            <p class="${styles.houseDescriptionBathroom}">2</p>
                            <p class="${styles.houseDescriptionBathroom}">baños</p>
                        </div>
                    </div>
                    <div class="${styles.betImg}">
                        <img src="${property_AA_3401_8}" class="${styles.iconDescription}" />
                        <div>
                            <p class="${styles.houseDescriptionParking}">1</p>
                            <p class="${styles.houseDescriptionParking}">estacionamiento</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- buttons -->
        <div class="${styles.buttonContainer}">
            <button id="cita" class="${styles.button}">
                <path
                    d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z">
                </path>
                </svg><span>Agendar citas</span>
            </button>
            <button id="chat" class="${styles.button}">
                <path
                    d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z">
                </path>
                </svg><span class="${styles.span}">Contactar vendedor</span>
            </button>
        </div>
    </section>
    <!-- next description -->
    <section>
        <div class="${styles.desciption}">
            <h2 class="${styles.titleDescription}">Descripcion</h2>
            <p class="${styles.textDescription}">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iure in debitis
                quod mollitia. Architecto error
                odio, ullam maxime iste amet earum pariatur et fugiat aliquid vel, repellendus vitae ut?Lorem ipsum
                dolor
                sit amet consectetur adipisicing elit. Accusantium ipsum quisquam aliquam aut ratione voluptatibus a,
                libero
                expedita cum eveniet dolorum, at ut ipsam atque nesciunt, earum accusamus non enim!Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Consectetur, quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe assumenda rerum rem tempora</p>
        </div>
    </section>
    <section>
        <div class="${styles.seccionCharacteristics}">
            <h2 class="${styles.titleDescription}">Caracteristicas</h2>
            <div class="${styles.seccionDescription}">
                <div class="${styles.desciptionPropiety}">
                    <p class="${styles.seccionDescriptionTitle}">propiedades exclusivas</p>
                </div>
                <div class="${styles.desciptionPropiety}">
                    <p class="${styles.seccionDescriptionTitle}">propiedades exclusivas</p>
                </div>
                <div class="${styles.desciptionPropiety}">
                    <p class="${styles.seccionDescriptionTitle}">propiedades exclusivas</p>
                </div>
            </div>
            <div class="${styles.seccionDescription}">
                <div class="${styles.desciptionPropiety}">
                    <p class="${styles.seccionDescriptionTitle}">propiedades exclusivas</p>
                </div>
                <div class="${styles.desciptionPropiety}">
                    <p class="${styles.seccionDescriptionTitle}">propiedades exclusivas</p>
                </div>
                <div class="${styles.desciptionPropiety}">
                    <p class="${styles.seccionDescriptionTitle}">propiedades exclusivas</p>
                </div>
            </div>
        </div>
    </section>
        ${footerHtml}

    `;

    const a = document.getElementById("go-to-login-from-home");
    a.addEventListener("click", function () {
        navigateTo("/login");
    });

    const buttonChat = document.getElementById("chat");
    buttonChat.addEventListener("click", () => {
        if (true) {
            if(localStorage.getItem('times-contacted')){
                let cont = parseInt(localStorage.getItem('times-contacted'));
                cont += 1;
                localStorage.setItem('times-contacted',cont);
            }
            else if(!localStorage.getItem('times-contacted')){
                localStorage.setItem('times-contacted', 1);
            }
            navigateTo("/messages");
        }
    });

    const button = document.getElementById("cita");
    button.addEventListener("click", () => {
        if (true) {
            if(localStorage.getItem('appoiments-scheduled')){
                let cont = parseInt(localStorage.getItem('appoiments-scheduled'));
                cont = cont + 1;
                localStorage.setItem('appoiments-scheduled',cont);
            }
            else if(!localStorage.getItem('appoiments-scheduled')){
                localStorage.setItem('appoiments-scheduled', 1);
            }
            navigateTo("/appointment");
        }
    });
}
