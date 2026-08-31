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
    button.btn.addEventListener(`click`,() => {
        btnSelection(button.btn, button.section);
    });
})

function btnSelection(buttonOnNavBar,sectionPage,){
    for(let i = 0; i < navBarButtons.length; i++){
        // classList.add is adding a specific class from CSS to the HTML element.
        // when is used classList it is selecting the classes that has or not the chosen element.
        // if there is no element it will work  as well, and with add you can add classes to the element or remote it or toggle that adds and removes when is clicked!
        navBarButtons[i].btn.classList.add("nav-list-button")
        navBarButtons[i].btn.classList.remove("active");
        navBarButtons[i].section.style.display = "none";
    }
    sectionPage.style.display = "flex";
    buttonOnNavBar.classList.add("active");
}

const footerNavBarButtons = [
    {
        btn: document.querySelector("#homeFooter"),
        section: homePageSection,
    },
    {
        btn: document.querySelector("#gameFooter"),
        section: gamePageSection,
    },
    {
        btn: document.querySelector("#aboutFooter"),
        section: aboutPageSection,
    },
    {
        btn: document.querySelector("#contactFooter"),
        section: contactPageSection,
    },
]

footerNavBarButtons.forEach(function (button){
    button.btn.addEventListener(`click`,() => {
        footerBtnSelection(button.btn, button.section);
    });
})

function footerBtnSelection(buttonOnNavBar,sectionPage,){
    for(let i = 0; i < navBarButtons.length; i++){
        // classList.add is adding a specific class from CSS to the HTML element.
        // when is used classList it is selecting the classes that has or not the chosen element.
        // if there is no element it will work  as well, and with add you can add classes to the element or remote it or toggle that adds and removes when is clicked!

        // navBarButtons[i].btn.classList.add("nav-list-button")
        // navBarButtons[i].btn.classList.remove("active");
        navBarButtons[i].section.style.display = "none";
    }
    sectionPage.style.display = "flex";
}