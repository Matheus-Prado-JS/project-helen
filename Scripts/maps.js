/*====================================*/
/* DADOS DOS MAPAS                    */
/*====================================*/

const mapsData={

    bosque:{

        title:"Bosque",

        category:"REGIÃO INICIAL",

        atmosphere:"Natural e melancólica",

        function:"Tutorial e exploração",

        images:[

            {

                src:"Assets/bosque-map-1.png",

                alt:"Entrada do Bosque",

                title:"Entrada do Bosque",

                text:`
                    O Bosque funciona como a introdução
                    ao mundo de Noema. Apesar de sua aparência acolhedora,
                    pequenas alterações na vegetação e no comportamento das
                    criaturas indicam que algo está desaparecendo lentamente.
                `

            },

            {

                src:"Assets/bosque-map-2.png",

                alt:"Ruínas antigas dentro do bosque",

                title:"Ruínas Entre as Árvores",

                text:`
                    Construções antigas permanecem escondidas entre árvores,
                    raízes e pequenos caminhos abandonados. Esses lugares
                    apresentam os primeiros sinais de uma civilização que
                    deixou de existir, embora parte de sua história ainda
                    permaneça preservada na floresta.
                `

            },

            {

                src:"Assets/bosque-map-3.png",

                alt:"Lago escondido no Bosque",

                title:"Lago Escondido",

                text:`
                    Um lago calmo divide uma das regiões mais antigas do
                    bosque. Pequenas plataformas de pedra permitem atravessar
                    suas águas, enquanto ruínas submersas sugerem que aquele
                    lugar já foi muito maior do que parece atualmente.
                `

            }

        ]

    },

    biblioteca:{

        title:"Biblioteca do Esquecimento",

        category:"REGIÃO CENTRAL",

        atmosphere:"Silenciosa e ancestral",

        function:"Narrativa e descobertas",

        images:[

            {

                src:"Assets/biblioteca-map-1.png",

                alt:"Salão principal da Biblioteca do Esquecimento",

                title:"Salão dos Registros",

                text:`
                    A Biblioteca do Esquecimento guarda livros que representam
                    as memórias do próprio mundo. Seu salão principal deve
                    transmitir grandeza, mas também abandono, com incontáveis
                    estantes desaparecendo na escuridão acima do jogador.
                `

            },

            {

                src:"Assets/biblioteca-map-2.png",

                alt:"Corredores da Biblioteca do Esquecimento",

                title:"Corredores Incompletos",

                text:`
                    Alguns corredores parecem terminar de maneira abrupta,
                    como se partes da construção tivessem sido apagadas.
                    Estantes vazias e portas sem destino mostram fisicamente
                    as consequências causadas pelo desaparecimento dos livros.
                `

            },

            {

                src:"Assets/biblioteca-map-3.png",

                alt:"Arquivo profundo da Biblioteca do Esquecimento",

                title:"Arquivo Profundo",

                text:`
                    Nas regiões inferiores ficam armazenadas as memórias mais
                    antigas e perigosas. O ambiente torna-se mais denso,
                    estreito e escuro, contrastando com a aparente segurança
                    encontrada nas áreas superiores da biblioteca.
                `

            }

        ]

    },

    centro:{

        title:"Centro de Aster",

        category:"NÚCLEO SOCIAL",

        atmosphere:"Acolhedora e decadente",

        function:"NPCs, comércio e missões",

        images:[

            {

                src:"Assets/centro-map-1.png",

                alt:"Praça central da cidade de Aster",

                title:"Praça Central",

                text:`
                    O Centro de Aster reúne comerciantes, viajantes e
                    habitantes da cidade. Inicialmente, deve parecer um lugar
                    acolhedor e seguro, funcionando como o principal ponto de
                    descanso entre as diferentes regiões da jornada.
                `

            },

            {

                src:"Assets/centro-map-2.png",

                alt:"Ruas residenciais do Centro de Aster",

                title:"Ruas dos Moradores",

                text:`
                    As ruas residenciais ajudam a mostrar que os personagens
                    possuem vidas além da presença de Lyria. Casas fecham ao
                    anoitecer, moradores mudam de posição e pequenos detalhes
                    se transformam conforme os acontecimentos da história.
                `

            },

            {

                src:"Assets/centro-map-3.png",

                alt:"Área esquecida do Centro de Aster",

                title:"Distrito Esquecido",

                text:`
                    Nas extremidades da cidade, construções e habitantes
                    começam lentamente a desaparecer. Os demais moradores
                    raramente percebem as ausências, criando uma região
                    inquietante onde a própria cidade parece esquecer que
                    certas ruas um dia existiram.
                `

            }

        ]

    }

};

/*====================================*/
/* ELEMENTOS                          */
/*====================================*/

const mapTabs=document.querySelectorAll(".map-tab");

const mapImage=document.getElementById("map-image");

const mapTitle=document.getElementById("map-title");

const mapCategory=document.getElementById("map-category");

const mapImageTitle=document.getElementById("map-image-title");

const mapText=document.getElementById("map-text");

const mapAtmosphere=document.getElementById("map-atmosphere");

const mapFunction=document.getElementById("map-function");

const previousButton=document.getElementById("previous-map-image");

const nextButton=document.getElementById("next-map-image");

const carouselDots=document.getElementById("carousel-dots");

const currentImageNumber=document.getElementById(
    "current-image-number"
);

const totalImageNumber=document.getElementById(
    "total-image-number"
);

const mapDescription=document.querySelector(
    ".map-description"
);

/*====================================*/
/* ESTADO ATUAL                       */
/*====================================*/

let currentMap="bosque";

let currentImageIndex=0;

let imageChangeTimer;

/*====================================*/
/* FORMATAÇÃO DO CONTADOR             */
/*====================================*/

function formatNumber(number){

    return String(number).padStart(2,"0");

}

/*====================================*/
/* CRIAR INDICADORES                  */
/*====================================*/

function createDots(){

    carouselDots.innerHTML="";

    const map=mapsData[currentMap];

    map.images.forEach((image,index)=>{

        const dot=document.createElement("button");

        dot.type="button";

        dot.className="carousel-dot";

        dot.setAttribute(
            "aria-label",
            `Mostrar imagem ${index+1} de ${map.images.length}`
        );

        if(index===currentImageIndex){

            dot.classList.add("active");

        }

        dot.addEventListener("click",()=>{

            if(index===currentImageIndex){

                return;

            }

            currentImageIndex=index;

            updateCarousel();

        });

        carouselDots.appendChild(dot);

    });

}

/*====================================*/
/* ATUALIZAR INDICADORES              */
/*====================================*/

function updateDots(){

    const dots=carouselDots.querySelectorAll(
        ".carousel-dot"
    );

    dots.forEach((dot,index)=>{

        dot.classList.toggle(
            "active",
            index===currentImageIndex
        );

    });

}

/*====================================*/
/* ATUALIZAR CARROSSEL                */
/*====================================*/

function updateCarousel(){

    const map=mapsData[currentMap];

    const image=map.images[currentImageIndex];

    clearTimeout(imageChangeTimer);

    mapImage.classList.add("changing");

    mapDescription.classList.add("changing");

    imageChangeTimer=setTimeout(()=>{

        mapImage.src=image.src;

        mapImage.alt=image.alt;

        mapImageTitle.textContent=image.title;

        mapText.textContent=image.text.trim();

        currentImageNumber.textContent=formatNumber(
            currentImageIndex+1
        );

        totalImageNumber.textContent=formatNumber(
            map.images.length
        );

        updateDots();

        mapImage.classList.remove("changing");

        mapDescription.classList.remove("changing");

    },250);

}

/*====================================*/
/* TROCAR MAPA                        */
/*====================================*/

function selectMap(mapName){

    if(!mapsData[mapName]){

        console.warn(
            `O mapa "${mapName}" não foi encontrado.`
        );

        return;

    }

    currentMap=mapName;

    currentImageIndex=0;

    const map=mapsData[currentMap];

    mapTabs.forEach(tab=>{

        const isActive=tab.dataset.map===currentMap;

        tab.classList.toggle(
            "active",
            isActive
        );

        tab.setAttribute(
            "aria-selected",
            isActive
        );

    });

    mapTitle.textContent=map.title;

    mapCategory.textContent=map.category;

    mapAtmosphere.textContent=map.atmosphere;

    mapFunction.textContent=map.function;

    createDots();

    updateCarousel();

}

/*====================================*/
/* IMAGEM ANTERIOR                    */
/*====================================*/

function showPreviousImage(){

    const images=mapsData[currentMap].images;

    currentImageIndex=
        (currentImageIndex-1+images.length)
        %
        images.length;

    updateCarousel();

}

/*====================================*/
/* PRÓXIMA IMAGEM                     */
/*====================================*/

function showNextImage(){

    const images=mapsData[currentMap].images;

    currentImageIndex=
        (currentImageIndex+1)
        %
        images.length;

    updateCarousel();

}

/*====================================*/
/* EVENTOS                            */
/*====================================*/

mapTabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        selectMap(tab.dataset.map);

    });

});

previousButton.addEventListener(
    "click",
    showPreviousImage
);

nextButton.addEventListener(
    "click",
    showNextImage
);

/*====================================*/
/* NAVEGAÇÃO PELO TECLADO             */
/*====================================*/

document.addEventListener("keydown",event=>{

    const mapsSection=document.querySelector(
        ".maps-section"
    );

    if(!mapsSection){

        return;

    }

    const sectionPosition=
        mapsSection.getBoundingClientRect();

    const sectionIsVisible=
        sectionPosition.top<window.innerHeight
        &&
        sectionPosition.bottom>0;

    if(!sectionIsVisible){

        return;

    }

    if(event.key==="ArrowLeft"){

        showPreviousImage();

    }

    if(event.key==="ArrowRight"){

        showNextImage();

    }

});

/*====================================*/
/* INICIALIZAÇÃO                      */
/*====================================*/

selectMap(currentMap);