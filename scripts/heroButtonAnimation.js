const playBtn = document.querySelector("#playBtn");
let blur = 0;
let spread = 0;
let growing = false;
let pause = 1;

running = setInterval(() => {
    playBtn.style.boxShadow = `0 0 ${blur}px ${spread}px var(--accent-green)`;
    if (growing){
        if (pause !== 0){
            pauseTime = setInterval(() => {
                pause--;
            },1000)
        }
        else {
            increaseShadow();
        }
    }
    else{
        decreaseShadow();
    }
}, 80);
function increaseShadow (){
    blur+=3;
    spread+=0.75;
    if (spread >= 8) {
        growing = false;
    }
}
function decreaseShadow (){
    blur-=3;
    spread-=0.75;
    if (spread <= 0){
        growing = true;
        pause = true;
    }
}
