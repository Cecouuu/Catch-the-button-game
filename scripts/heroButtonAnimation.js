const playBtn = document.querySelector("#playBtn");
let blur = 0;
let spread = 0;

running = setInterval(function (){
    increaseShadow();
    decreaseShadow();
}, 1000)
function increaseShadow (){
    timer = setInterval(function (){
        if (blur >= 0 && blur < 20){
            playBtn.style.boxShadow = `0 0 ${blur}px ${spread}px var(--accent-green)`;
            blur++;
            spread++;
            console.log(blur);
        }
        clearInterval(timer);
    },100)
}

function decreaseShadow (){
    timer = setInterval(function (){
        if (blur <= 20 &&  blur > 0){
            playBtn.style.boxShadow = `0 0 ${blur}px ${spread}px var(--accent-green)`;
            blur--;
            spread--;
            console.log(blur);
        }
        clearInterval(timer);
    },100)
}
