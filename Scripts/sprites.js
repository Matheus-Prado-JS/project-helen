/*==================================*/
/* DADOS                            */
/*==================================*/

const spriteData=[

{

    name:"Lyria",

    state:"Parada",

    fps:2,

    size:"128 x 128",

    description:
    "Primeiro sprite da protagonista. Representa sua pose padrão antes da implementação das animações.",

    frames:[

        "Assets/lyria-sprite-1.png"

    ]

},

{

    name:"Lebre",

    state:"Caminhando",

    fps:5,

    size:"128 x 128",

    description:
    "Primeiro teste de movimentação da Lebre presente no Bosque.",

    frames:[

        "Assets/lebre-sprite-1.png",
        "Assets/lebre-sprite-2.png",
        "Assets/lebre-sprite-3.png",
        "Assets/lebre-sprite-2.png"

    ]

},

{

    name:"Golem",

    state:"Caminhando",

    fps:3,

    size:"128 x 128",

    description:
    "Prévia da caminhada do Golem de Pedra.",

    frames:[

        "Assets/golem-sprite-1.png",
        "Assets/golem-sprite-2.png",
        "Assets/golem-sprite-3.png",
        "Assets/golem-sprite-2.png"

    ]

}

];

/*==================================*/
/* GALERIA                          */
/*==================================*/

const gallery=document.getElementById("sprite-gallery");

spriteData.forEach(sprite=>{

    const card=document.createElement("article");

    card.className="sprite-card";

    card.innerHTML=`

    <div class="sprite-preview">

        <span class="sprite-size">

            ${sprite.size}

        </span>

        <img src="${sprite.frames[0]}">

    </div>

    <div class="sprite-info">

        <h3>${sprite.name}</h3>

        <span class="sprite-state">

            ${sprite.state}

        </span>

        <p class="sprite-description">

            ${sprite.description}

        </p>

        <div class="sprite-data">

            <div>

                <span>Frames</span>

                <strong>${sprite.frames.length}</strong>

            </div>

            <div>

                <span>FPS</span>

                <strong>${sprite.fps}</strong>

            </div>

        </div>

    </div>

    `;

    gallery.appendChild(card);

});

/*==================================*/
/* ANIMAÇÕES                        */
/*==================================*/

document
.querySelectorAll(".sprite-card")
.forEach((card,index)=>{

    const sprite=spriteData[index];

    const image=card.querySelector("img");

    let frame=0;

    setInterval(()=>{

        frame++;

        if(frame>=sprite.frames.length){

            frame=0;

        }

        image.src=sprite.frames[frame];

    },1000/sprite.fps);

});