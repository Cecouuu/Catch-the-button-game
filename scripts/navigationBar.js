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

const hamburgerMenuButton = document.querySelector(".hamburgerMenuButton");
const hamburgerMenu = document.querySelector("#hamburgerMenu");
hamburgerMenuButton.addEventListener("click",() =>{
    for(let i = 0; i < 1; i++){
        hamburgerMenu.classList.remove("hamburgerMenuActivate")
    }
    hamburgerMenu.classList.add("hamburgerMenuActivate");
})

const hamburgerNavBarButtons = [
    {
        btn: document.querySelector("#hamburgerHomeBtn"),
        section: homePageSection,
    },
    {
        btn: document.querySelector("#hamburgerGameBtn"),
        section: gamePageSection,
    },
    {
        btn: document.querySelector("#hamburgerAboutBtn"),
        section: aboutPageSection,
    },
    {
        btn: document.querySelector("#hamburgerContactBtn"),
        section: contactPageSection,
    },
]

hamburgerNavBarButtons.forEach(function (button){
    button.btn.addEventListener(`click`,() => {
        btnSelection2(button.btn, button.section);
    });
})

function btnSelection2(buttonOnNavBar,sectionPage,){
    for(let i = 0; i < hamburgerNavBarButtons.length; i++){
        // classList.add is adding a specific class from CSS to the HTML element.
        // when is used classList it is selecting the classes that has or not the chosen element.
        // if there is no element it will work  as well, and with add you can add classes to the element or remote it or toggle that adds and removes when is clicked!

        hamburgerNavBarButtons[i].btn.classList.remove("hamburgerNavButtonsActive");
        hamburgerNavBarButtons[i].section.style.display = "none";
    }
    sectionPage.style.display = "flex";
    buttonOnNavBar.classList.add("hamburgerNavButtonsActive");
}

const hamburgerCloseBtn = document.querySelector("#hamburgerCloseBtn");
hamburgerCloseBtn.addEventListener(`click`, function (){
    hamburgerMenu.classList.remove("hamburgerMenuActivate");
})

const heroPlayBtn = document.querySelector("#heroPlayBtn");
const featuresPlayBtn = document.querySelector("#featuresPlayBtn");
const navarPlayBtn = document.querySelector("#navBarPlayBtn");

const homePagePlayButtons = [
    {
        btn: heroPlayBtn,
    },
    {
        btn: featuresPlayBtn,
    },
    {
        btn: navarPlayBtn,
    }
]
homePagePlayButtons.forEach(function (playButtons){
    playButtons.btn.addEventListener(`click`, function (){
        for(let i = 0; i < navBarButtons.length; i++){
            navBarButtons[i].btn.classList.add("nav-list-button")
            navBarButtons[i].btn.classList.remove("active");
            navBarButtons[i].section.style.display = "none";

            hamburgerNavBarButtons[i].btn.classList.remove("hamburgerNavButtonsActive");
        }
        gamePageSection.style.display = "flex";
        hamburgerNavBarButtons[1].btn.classList.add("hamburgerNavButtonsActive");
        navBarButtons[1].btn.classList.add("active")
    })
})

const heroHowToPLay = document.querySelector("#heroHowToPLay");

heroHowToPLay.addEventListener(`click`, () =>{
    for(let y = 0; y < navBarButtons.length; y++){
        navBarButtons[y].btn.classList.add("nav-list-button")
        navBarButtons[y].btn.classList.remove("active");
        navBarButtons[y].section.style.display = "none";

        hamburgerNavBarButtons[y].btn.classList.remove("hamburgerNavButtonsActive");
    }
    aboutPageSection.style.display = "flex";
    hamburgerNavBarButtons[2].btn.classList.add("hamburgerNavButtonsActive");
    navBarButtons[2].btn.classList.add("active")
})