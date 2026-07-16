const particles=document.querySelector(".particles");

const amount=70;

for(let i=0;i<amount;i++){

    const dot=document.createElement("span");

    const size=Math.random()*4+1;

    dot.style.position="absolute";

    dot.style.width=size+"px";

    dot.style.height=size+"px";

    dot.style.borderRadius="50%";

    dot.style.background="rgba(230,220,170,.8)";

    dot.style.left=Math.random()*100+"%";

    dot.style.top=Math.random()*100+"%";

    dot.style.opacity=Math.random();

    dot.style.animation=`
        float
        ${8+Math.random()*12}s
        linear
        infinite`;

    dot.style.animationDelay=
    Math.random()*10+"s";

    particles.appendChild(dot);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(0px);

opacity:0;

}

10%{

opacity:.8;

}

50%{

opacity:.3;

}

100%{

transform:translateY(-120px);

opacity:0;

}

}

`;

document.head.appendChild(style);