import styles from "./availableProperties.css";
import imageHero from "../../../assets/images/hero.jpg";
import imageNeighborhood from "../../../assets/images/estadio.jpg";
import imageResult1 from "../../../assets/images/estadio.jpg";
import iconPinLotacion from "../../../assets/images/pin.png";
import iconArea from "../../../assets/images/area.png";
import iconBed from "../../../assets/images/bed.png";
import iconBath from "../../../assets/images/toilet.png";
import { navigateTo } from "../../../Router";
import { navbar } from "../../../components/navbar/navbar";
import { footer } from "../../../components/footer/footer";

export async function availablePropertiesScene() {
    const root = document.getElementById("root");
    const { html: footerHtml } = footer();
    const { html: navbarHtml } = navbar();

    root.innerHTML = `
        ${navbarHtml}

    <script defer>
        function updateRangeValue() {
            const rangeInput = document.getElementById('priceInput');
            const rangeValue = document.getElementById('rangeValue');
            rangeValue.textContent = rangeInput.value;
        }
    </script>
    <!--Hero-->
    <section>

        <div class="${styles.hero}" style="background-image: url(${imageHero})" >

            <div class="${styles.hero__conteinerFilter}">

                <div class="${styles.containerFilter__Title}">
                    <h2>Filtros</h2>
                </div>

                <form  action="" method="get" id="filterForm" class="${styles.filterForm}">

                    <div>
                        <label for="city-select" class="${styles.category} ${styles.categoryMains}">Ciudad</label>
                        <select class="${styles.select_category} name="city" id="city-select" class="${styles.bigForm}">
                            <option value="Medellín">Medellín</option>
                        </select>
                    </div>

                    <div class="${styles.formatOfForm}">

                        <div class="${styles.medium_1}">
                            <label for="neighborhood-select" class="${styles.category}">Barrio</label>
                            <select class="${styles.select_category} name="neighborhood" id="neighborhood-select" class="${styles.mediumForm}">
                            
                                <option value="Laureles">Laureles</option>

                                <option value="Belen">Belén</option>

                                <option value="Poblado">Poblado</option>

                            </select>
                        </div>

                        <div class="${styles.small_1}">

                            <label for="type-select" class="${styles.category}">Tipo</label>

                            <select class="${styles.select_category} name="typeOfAptoHouse" id="type-select" class="${styles.smallForm}">
                            
                                <option value="Apartamento">Apartamento</option>

                                <option value="Casa">Casa</option>

                            </select>
                        </div>

                        <div class="${styles.small_2}">

                            <label  for="bathroom-input" class="${styles.category}">Baños</label>

                            <input id="${styles.bathoom}" type="number" min="1" name="bathroom" id="bathroom-input" class="${styles.smallForm}">

                        </div>

                        <div class="${styles.medium_2}">
                        
                            <label for="rooms-input" class="${styles.category}">Habitaciones</label>

                            <input type="number" min="1" name="rooms" id="rooms-input" class="${styles.mediumForm} ${styles.mediumFormFix}">

                        </div>

                    </div>
                    
                    <div>

                        <label for="for-select" class="${styles.category}">Para</label>

                        <select class="${styles.select_category} name="for" id="for-select" class="${styles.bigForm}">
                        
                            <option value="Arrendamiento">Arrendamiento</option>

                            <option value="Venta">Venta</option>

                        </select>

                    </div>

                    <div>
                        <label for="price-input" class="${styles.category} ${styles.categoryMains}">Precio</label>
                        <p class="${styles.p_label}" id="rangeValue">2300000</p>
                        <div class="${styles.conteiner__price}">
                        <input type="range" name="price" id="priceInput" class="${styles.price_input}" min="350000" max="8000000" step="10000" value="2300000">
                        <P class="${styles.p_label}">$300.000</P>
                        <P class="${styles.p_label}">$8´000.000</P>
                        </div>
                    </div>

                </form>

            </div>
            

        </div>
    </section>
    
    <!--Results-->
    <section>

        <!--title about apto/house-->
        <h2 class="${styles.results__title}">Arrendamientos</h2>

        <!--Image of neighborhood-->
        <div class="${styles.results__neighborhoodSelect}"style="background-image: url(${imageNeighborhood})">
            <h3 id="${styles.title_arrendaminetos}">Laureles</h3>
        </div>

        <!--Results-->
        <div class="${styles.results__conteinerResult}">

            <!--Card of result-->

            <!--Result 1-->
            <div class="${styles.results__result} ${styles.result1}">

                <!--image of result-->
                <div class="${styles.result__resultImage}">

                    <img src="${imageResult1}" alt="">

                </div>

                <!--info of result-->
                <div class="${styles.result__resultInfo}">

                    <h5 class="${styles.mientras}">Arriendo de apartamento</h5>

                    <div class="${styles.locationHouse}">
                        
                        <img src="${iconPinLotacion}" alt="" class="${styles.locationHouse__image}">

                        <h4 class="${styles.title_property}">El perpetuo, Laureles</h4>
                    </div>

                    <p class="${styles.result__price}">2´300.000</p>

                    <div class="${styles.result__atributes}">

                        <div class="${styles.atribute}">

                            <img src="${iconArea}" alt="" class="${styles.atributeImage}">

                            <p class="${styles.atribute__text}"><span>100</span> metros</p>

                        </div>

                        <div class="${styles.atribute}">
                            
                            <div>

                            <img src="${iconBed}" alt="" class="${styles.atributeImage}">
                            
                            </div>

                            <p class="${styles.atribute__text}">3 <br> Cuartos</p>

                        </div>

                        <div class="${styles.atribute}">
                            <div>

                            <img src="${iconBath}" alt="" class="${styles.atributeImage}">

                            </div>

                            <p class="${styles.atribute__text}">2 <br> Baños</p>

                        </div>

                        
                        
                        
                        
                        </div>
                        
                        <div class="${styles.divButton}">

                                <button class="${styles.resultButton}">Ver propiedad</button>

                        </div>

                </div>


            </div>

            <!--Result 2-->
            <div class="${styles.results__result} ${styles.result2}">

                <!--image of result-->
                <div class="${styles.result__resultImage}">

                    <img src="${imageResult1}" alt="">

                </div>

                <!--info of result-->
                <div class="${styles.result__resultInfo}">

                    <h5 class="${styles.mientras}">Arriendo de apartamento</h5>

                    <div class="${styles.locationHouse}">
                        
                        <img src="${iconPinLotacion}" alt="" class="${styles.locationHouse__image}">

                        <h4 class="${styles.title_property}">El perpetuo, Laureles</h4>
                    </div>

                    <p class="${styles.result__price}">2´300.000</p>

                    <div class="${styles.result__atributes}">

                        <div class="${styles.atribute}">

                            <img src="${iconArea}" alt="" class="${styles.atributeImage}">

                            <p class="${styles.atribute__text}"><span>100</span> metros</p>

                        </div>

                        <div class="${styles.atribute}">
                            
                            <div>

                            <img src="${iconBed}" alt="" class="${styles.atributeImage}">
                            
                            </div>

                            <p class="${styles.atribute__text}">3 <br> Cuartos</p>

                        </div>

                        <div class="${styles.atribute}">
                            <div>

                            <img src="${iconBath}" alt="" class="${styles.atributeImage}">

                            </div>

                            <p class="${styles.atribute__text}">2 <br> Baños</p>

                        </div>

                        
                        
                        
                        
                        </div>
                        
                        <div class="${styles.divButton}">

                                <button class="${styles.resultButton}">Ver propiedad</button>

                        </div>
                </div>

            </div>

            <!--Result 3-->
            <div class="${styles.results__result} ${styles.result3}">

                <!--image of result-->
                <div class="${styles.result__resultImage}">

                    <img src="${imageResult1}" alt="">

                </div>

                <!--info of result-->
                <div class="${styles.result__resultInfo}">

                    <h5 class="${styles.mientras}">Arriendo de apartamento</h5>

                    <div class="${styles.locationHouse}">
                        
                        <img src="${iconPinLotacion}" alt="" class="${styles.locationHouse__image}">

                        <h4 class="${styles.title_property}">El perpetuo, Laureles</h4>
                    </div>

                    <p class="${styles.result__price}">2´300.000</p>

                    <div class="${styles.result__atributes}">

                        <div class="${styles.atribute}">

                            <img src="${iconArea}" alt="" class="${styles.atributeImage}">

                            <p class="${styles.atribute__text}"><span>100</span> metros</p>

                        </div>

                        <div class="${styles.atribute}">
                            
                            <div>

                            <img src="${iconBed}" alt="" class="${styles.atributeImage}">
                            
                            </div>

                            <p class="${styles.atribute__text}">3 <br> Cuartos</p>

                        </div>

                        <div class="${styles.atribute}">
                            <div>

                            <img src="${iconBath}" alt="" class="${styles.atributeImage}">

                            </div>

                            <p class="${styles.atribute__text}">2 <br> Baños</p>

                        </div>

                        
                        
                        
                        
                        </div>
                        
                        <div class="${styles.divButton}">

                                <button class="${styles.resultButton}">Ver propiedad</button>

                        </div>

                </div>


            </div>

            <!--Result 4-->
            <div class="${styles.results__result} ${styles.result4}">

                <!--image of result-->
                <div class="${styles.result__resultImage}">

                    <img src="${imageResult1}" alt="">

                </div>

                <!--info of result-->
                <div class="${styles.result__resultInfo}">

                    <h5 class="${styles.mientras}">Arriendo de apartamento</h5>

                    <div class="${styles.locationHouse}">
                        
                        <img src="${iconPinLotacion}" alt="" class="${styles.locationHouse__image}">

                        <h4 class="${styles.title_property}">El perpetuo, Laureles</h4>
                    </div>

                    <p class="${styles.result__price}">2´300.000</p>

                    <div class="${styles.result__atributes}">

                        <div class="${styles.atribute}">

                            <img src="${iconArea}" alt="" class="${styles.atributeImage}">

                            <p class="${styles.atribute__text}"><span>100</span> metros</p>

                        </div>

                        <div class="${styles.atribute}">
                            
                            <div>

                            <img src="${iconBed}" alt="" class="${styles.atributeImage}">
                            
                            </div>

                            <p class="${styles.atribute__text}">3 <br> Cuartos</p>

                        </div>

                        <div class="${styles.atribute}">
                            <div>

                            <img src="${iconBath}" alt="" class="${styles.atributeImage}">

                            </div>

                            <p class="${styles.atribute__text}">2 <br> Baños</p>

                        </div>

                        
                        
                        
                        
                        </div>
                        
                        <div class="${styles.divButton}">

                                <button class="${styles.resultButton}">Ver propiedad</button>

                        </div>

                </div>


            </div>

            <!--Result 5-->
            <div class="${styles.results__result} ${styles.result5}">

                <!--image of result-->
                <div class="${styles.result__resultImage}">

                    <img src="${imageResult1}" alt="">

                </div>

                <!--info of result-->
                <div class="${styles.result__resultInfo}">

                    <h5 class="${styles.mientras}">Arriendo de apartamento</h5>

                    <div class="${styles.locationHouse}">
                        
                        <img src="${iconPinLotacion}" alt="" class="${styles.locationHouse__image}">

                        <h4 class="${styles.title_property}">El perpetuo, Laureles</h4>
                    </div>

                    <p class="${styles.result__price}">2´300.000</p>

                    <div class="${styles.result__atributes}">

                        <div class="${styles.atribute}">

                            <img src="${iconArea}" alt="" class="${styles.atributeImage}">

                            <p class="${styles.atribute__text}"><span>100</span> metros</p>

                        </div>

                        <div class="${styles.atribute}">
                            
                            <div>

                            <img src="${iconBed}" alt="" class="${styles.atributeImage}">
                            
                            </div>

                            <p class="${styles.atribute__text}">3 <br> Cuartos</p>

                        </div>

                        <div class="${styles.atribute}">
                            <div>

                            <img src="${iconBath}" alt="" class="${styles.atributeImage}">

                            </div>

                            <p class="${styles.atribute__text}">2 <br> Baños</p>

                        </div>

                        
                        
                        
                        
                        </div>
                        
                        <div class="${styles.divButton}">

                                <button class="${styles.resultButton}">Ver propiedad</button>

                        </div>

                </div>

            </div>

            <!--Result 6-->
            <div class="${styles.results__result} ${styles.result6}">

                <!--image of result-->
                <div class="${styles.result__resultImage}">

                    <img src="${imageResult1}" alt="">

                </div>

                <!--info of result-->
                <div class="${styles.result__resultInfo}">

                    <h5 class="${styles.mientras}">Arriendo de apartamento</h5>

                    <div class="${styles.locationHouse}">
                        
                        <img src="${iconPinLotacion}" alt="" class="${styles.locationHouse__image}">

                        <h4 class="${styles.title_property}">El perpetuo, Laureles</h4>
                    </div>

                    <p class="${styles.result__price}">2´300.000</p>

                    <div class="${styles.result__atributes}">

                        <div class="${styles.atribute}">

                            <img src="${iconArea}" alt="" class="${styles.atributeImage}">

                            <p class="${styles.atribute__text}"><span>100</span> metros</p>

                        </div>

                        <div class="${styles.atribute}">
                            
                            <div>

                            <img src="${iconBed}" alt="" class="${styles.atributeImage}">
                            
                            </div>

                            <p class="${styles.atribute__text}">3 <br> Cuartos</p>

                        </div>

                        <div class="${styles.atribute}">
                            <div>

                            <img src="${iconBath}" alt="" class="${styles.atributeImage}">

                            </div>

                            <p class="${styles.atribute__text}">2 <br> Baños</p>

                        </div>

                        
                        
                        
                        
                        </div>
                        
                        <div class="${styles.divButton}">

                                <button class="${styles.resultButton}">Ver propiedad</button>

                        </div>

                </div>


            </div>

            <!--Result 7-->
            <div class="${styles.results__result} ${styles.result7}">

                <!--image of result-->
                <div class="${styles.result__resultImage}">

                    <img src="${imageResult1}" alt="">

                </div>

                <!--info of result-->
                <div class="${styles.result__resultInfo}">

                    <h5 class="${styles.mientras}">Arriendo de apartamento</h5>

                    <div class="${styles.locationHouse}">
                        
                        <img src="${iconPinLotacion}" alt="" class="${styles.locationHouse__image}">

                        <h4 class="${styles.title_property}">El perpetuo, Laureles</h4>
                    </div>

                    <p class="${styles.result__price}">2´300.000</p>

                    <div class="${styles.result__atributes}">

                        <div class="${styles.atribute}">

                            <img src="${iconArea}" alt="" class="${styles.atributeImage}">

                            <p class="${styles.atribute__text}"><span>100</span> metros</p>

                        </div>

                        <div class="${styles.atribute}">
                            
                            <div>

                            <img src="${iconBed}" alt="" class="${styles.atributeImage}">
                            
                            </div>

                            <p class="${styles.atribute__text}">3 <br> Cuartos</p>

                        </div>

                        <div class="${styles.atribute}">
                            <div>

                            <img src="${iconBath}" alt="" class="${styles.atributeImage}">

                            </div>

                            <p class="${styles.atribute__text}">2 <br> Baños</p>

                        </div>

                        
                        
                        
                        
                        </div>
                        
                        <div class="${styles.divButton}">

                                <button class="${styles.resultButton}">Ver propiedad</button>

                        </div>

                </div>


            </div>

            <!--Result 8-->
            <div class="${styles.results__result} ${styles.result8}">

                <!--image of result-->
                <div class="${styles.result__resultImage}">

                    <img src="${imageResult1}" alt="">

                </div>

                <!--info of result-->
                <div class="${styles.result__resultInfo}">

                    <h5 class="${styles.mientras}">Arriendo de apartamento</h5>

                    <div class="${styles.locationHouse}">
                        
                        <img src="${iconPinLotacion}" alt="" class="${styles.locationHouse__image}">

                        <h4 class="${styles.title_property}">El perpetuo, Laureles</h4>
                    </div>

                    <p class="${styles.result__price}">2´300.000</p>

                    <div class="${styles.result__atributes}">

                        <div class="${styles.atribute}">

                            <img src="${iconArea}" alt="" class="${styles.atributeImage}">

                            <p class="${styles.atribute__text}"><span>100</span> metros</p>

                        </div>

                        <div class="${styles.atribute}">
                            
                            <div>

                            <img src="${iconBed}" alt="" class="${styles.atributeImage}">
                            
                            </div>

                            <p class="${styles.atribute__text}">3 <br> Cuartos</p>

                        </div>

                        <div class="${styles.atribute}">
                            <div>

                            <img src="${iconBath}" alt="" class="${styles.atributeImage}">

                            </div>

                            <p class="${styles.atribute__text}">2 <br> Baños</p>

                        </div>

                        
                        
                        
                        
                        </div>
                        
                        <div class="${styles.divButton}">

                                <button class="${styles.resultButton}">Ver propiedad</button>

                        </div>

                </div>


            </div>

            <!--Result 9-->
            <div class="${styles.results__result} ${styles.result9}">

                <!--image of result-->
                <div class="${styles.result__resultImage}">

                    <img src="${imageResult1}" alt="">

                </div>

                <!--info of result-->
                <div class="${styles.result__resultInfo}">

                    <h5 class="${styles.mientras}">Arriendo de apartamento</h5>

                    <div class="${styles.locationHouse}">
                        
                        <img src="${iconPinLotacion}" alt="" class="${styles.locationHouse__image}">

                        <h4 class="${styles.title_property}">El perpetuo, Laureles</h4>
                    </div>

                    <p class="${styles.result__price}">2´300.000</p>

                    <div class="${styles.result__atributes}">

                        <div class="${styles.atribute}">

                            <img src="${iconArea}" alt="" class="${styles.atributeImage}">

                            <p class="${styles.atribute__text}"><span>100</span> metros</p>

                        </div>

                        <div class="${styles.atribute}">
                            
                            <div>

                            <img src="${iconBed}" alt="" class="${styles.atributeImage}">
                            
                            </div>

                            <p class="${styles.atribute__text}">3 <br> Cuartos</p>

                        </div>

                        <div class="${styles.atribute}">
                            <div>

                            <img src="${iconBath}" alt="" class="${styles.atributeImage}">

                            </div>

                            <p class="${styles.atribute__text}">2 <br> Baños</p>

                        </div>

                        
                        
                        
                        
                        </div>
                        
                        <div class="${styles.divButton}">

                                <button class="${styles.resultButton}">Ver propiedad</button>

                        </div>

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

    const buttons = document.getElementsByClassName(
        "availableProperties__resultButton___SuBqR"
    );

    for (const button of buttons) {
        button.addEventListener("click", function () {
            navigateTo("/propertyView");
        });
    }
}
