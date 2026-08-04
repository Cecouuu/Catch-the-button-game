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
    button.btn.addEventListener(`click`,function (){
        btnSelection(button.btn, button.section);
    });
})

function btnSelection(buttonOnNavBar,sectionPage,){
    for(let i = 0; i < navBarButtons.length; i++){
        navBarButtons[i].btn.classList.add(".nav-list-button")
        navBarButtons[i].btn.classList.remove("active");
        navBarButtons[i].section.style.display = "none";
    }
    sectionPage.style.display = "flex";
    buttonOnNavBar.classList.add("active");
}