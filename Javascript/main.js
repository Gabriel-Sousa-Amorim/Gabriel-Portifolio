
let date = new Date();
let day = date.getDay();
let year = date.getFullYear();
const birthDate = new Date("13 october 2004");

document.getElementById("YearAtual").textContent = date.getFullYear();

function getBirth() {
    if (date.getMonth() < birthDate.getMonth()) {
        return date.getFullYear() - birthDate.getFullYear() - 1;
    } else {
        return date.getFullYear() - birthDate.getFullYear();
    }
}

document.querySelector("span#span-idade").textContent = getBirth();

//Função para destacar o dia da semana atual;
//Domingo == 0, Segunda == 1, Terça == 2...

let colors = {
    Red: '#ff4141',
    darkRed: '#552f2f',
    Orange: '#ff6a2f',
    darkOrange: '#55402f',
    Yellow: '#ffe341',
    darkYellow: '#55522f',
    Green: '#67ff41',
    darkGreen: '#3b552f',
    Cyan: '#41ffef',
    darkCyan: '#2f5552',
    Blue: '#4441ff',
    darkBlue: '#2f3055',
    Purple: '#9741ff',
    darkPurple: '#4f2f55',
    Pink: '#ff418a',
}

function CatchTheDay() {
    let root = document.querySelector(":root")
    switch (day) {
        //Caso Domingo
        case (0):
            root.style.setProperty('--main-color-1', colors.Red);
            root.style.setProperty('--main-color-2', colors.Cyan);
            root.style.setProperty('--main-color-3', colors.darkRed);
            break;
        //Caso Segunda
        case (1):
            root.style.setProperty('--main-color-1', colors.Orange);
            root.style.setProperty('--main-color-2', colors.Blue);
            root.style.setProperty('--main-color-3', colors.darkOrange);
            break;
        //Caso Terça
        case (2):
            root.style.setProperty('--main-color-1', colors.Yellow);
            root.style.setProperty('--main-color-2', colors.Purple);
            root.style.setProperty('--main-color-3', colors.darkYellow);
            break;
        //Caso Quarta
        case (3):
            root.style.setProperty('--main-color-1', colors.Green);
            root.style.setProperty('--main-color-2', colors.Pink);
            root.style.setProperty('--main-color-3', colors.darkGreen);
            break;
        //Caso Quinta
        case (4):
            root.style.setProperty('--main-color-1', colors.Cyan);
            root.style.setProperty('--main-color-2', colors.Red);
            root.style.setProperty('--main-color-3', colors.darkCyan);
            break;
        //Caso Sexta
        case (5):
            root.style.setProperty('--main-color-1', colors.Blue);
            root.style.setProperty('--main-color-2', colors.Orange);
            root.style.setProperty('--main-color-3', colors.darkBlue);
            break;
        //Caso Sábado
        case (6):
            root.style.setProperty('--main-color-1', colors.Purple);
            root.style.setProperty('--main-color-2', colors.Yellow);
            root.style.setProperty('--main-color-3', colors.darkPurple);
            break;
    }
};
CatchTheDay()

let i = 0
function LoadingDots() {
    let Dots = document.querySelector('span#Dots');
    let content = ['', '.', '..', '...']
    setInterval( function() {
        if (i <= 3) {
            Dots.innerHTML = content[i];
            return i = i + 1;
        } else {
            return i = 0
        }
    },600)
}
LoadingDots()

var options = {
    strings: [
        ":Hello World",
        "<span class='bi bi-code-slash'>  I'm Gabriel Sousa <br>Front-end Developer.</span>",
    ],
    typeSpeed: 100,
};
//

var typed = new Typed("#heading-title", options);