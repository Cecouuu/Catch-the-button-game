const homeBtn = document.querySelector("#homeBtn");
const gameBtn = document.querySelector("#gameBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const contactBtn = document.querySelector("#contactBtn");

const navBarButtons = [
    {
        btn: homeBtn,
    },
    {
        btn: gameBtn,
    },
    {
        btn: aboutBtn,
    },
    {
        btn: contactBtn,
    },
]

navBarButtons.forEach(function (button){
    button.addEventListener("click",function (){
        btnSelection();
    });
})

function btnSelection(button){
    for(let i = 0; i < navBarButtons.length; i++){
        button.style.backgroundColor = "transparent";
    }
    button.style.backgroundColor = "#00B7B5";
    button.style.backgroundBlur = "20px";
    button.style.border = "1px solid #00B7B5";
}