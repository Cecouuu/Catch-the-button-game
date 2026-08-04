const playBtn = document.querySelector("#playBtn");
let blur = 0;
let spread = 0;
let growing = false;
let pause = true;

running = setInterval(() => {
    playBtn.style.boxShadow = `0 0 ${blur}px ${spread}px var(--accent-green)`;
        setTimeout( () =>{
            if (pause){
                if (growing){
                    console.log(`It is increasing!`);
                    increaseShadow();
                    pause = false;
                }
                else{
                    console.log(`It is decreasing!`);
                    decreaseShadow();
                    pause = false;
                }
            }
            else {
                pause = true;
            }
        }, 500)
}, 100);
function increaseShadow (){
    blur+=3;
    spread = blur / 4;
    if (spread >= 8) {
        growing = false;
        pause = true;
    }
}
function decreaseShadow (){
    blur-=3;
    spread = blur / 4;
    if (spread <= 0){
        growing = true;
        pause = true;
    }
}
