const homeBtn = document.querySelector("#homeBtn");
const gameBtn = document.querySelector("#gameBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const contactBtn = document.querySelector("#contactBtn");
const homePageSection = document.querySelector("#homePageSection");
const gamePageSection = document.querySelector("#gamePageSection");
const aboutPageSection = document.querySelector("#aboutPageSection");
const contactPageSection = document.querySelector("#contactPageSection");

const navBarButtons = [
    {
        btn: homeBtn,
        section: homePageSection,
    },
    {
        btn: gameBtn,
        section: gamePageSection,
    },
    {
        btn: aboutBtn,
        section: aboutPageSection,
    },
    {
        btn: contactBtn,
        section: contactPageSection,
    },
]

navBarButtons.forEach(function (button){
    button.addEventListener("click",function (){
        btnSelection(button.btn, button.section);
    });
})

function btnSelection(buttonOnNavigationBar,sectionPage,){
    for(let i = 0; i < navBarButtons.length; i++){
        buttonOnNavigationBar.style.backgroundColor = "transparent";
    }
    buttonOnNavigationBar.style.color = "red";
    buttonOnNavigationBar.style.backgroundColor = "#00B7B5";
    buttonOnNavigationBar.style.backgroundBlur = "20px";
    buttonOnNavigationBar.style.border = "1px solid #00B7B5";
}