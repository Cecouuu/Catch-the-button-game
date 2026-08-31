const inputSubject = document.querySelector("#subject");

const buttons = [
    {
        name: `Bug-report`,
        button: document.querySelector("#bug-report"),
    },
    {
        name: `Suggestion`,
        button: document.querySelector("#suggestion"),
    },
    {
        name: `Collaborate`,
        button: document.querySelector("#collaborate"),
    },
    {
        name: `General`,
        button: document.querySelector("#general"),
    },
]

buttons.forEach((currentBtn) => {
    currentBtn.button.addEventListener(`click`,function (){
        changingSubjectText(currentBtn.name);
    })
})
function changingSubjectText(nameOfTheSubject) {
    inputSubject.value = `${nameOfTheSubject}`;
}