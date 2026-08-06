const playBtn = document.querySelector("#playBtn");
let blur = 0;
let spread = 0;
let boxShadowCount = 0;
let growing = false;

running = setInterval(() => {
    playBtn.style.boxShadow = `0 0 ${blur}px ${spread}px rgb(0 255 241 / 0.25)`;
        if (growing){
            console.log(`It is increasing!`);
            increaseShadow();
        }
        else{
            console.log(`It is decreasing!`);
            decreaseShadow();
        }
}, 105);
function increaseShadow (){
    if (boxShadowCount >= 7) {
        setTimeout(() => {
            growing = false;
        },125);
        return;
    }
    boxShadowCount++;
    blur+=2.25;
    spread = blur / 1.5;
}
function decreaseShadow (){
    if (boxShadowCount <= 0){
        setTimeout (() => {
            growing = true;
        },450)
        return;
    }
    boxShadowCount--;
    blur-=2.25;
    spread = blur / 1.5;
}