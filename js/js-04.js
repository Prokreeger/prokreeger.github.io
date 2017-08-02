
console.log('connect - ok');

/* ==================  View ================ */

let redParagraph = document.querySelectorAll('.result-column > p');
let img = document.querySelectorAll('.result-column > img');
let btnRez1 = document.getElementById('rez-1');
let btnRez2 = document.getElementById('rez-2');
let btnRez3 = document.getElementById('rez-3');
let count = 0;
let likeBtn = document.querySelector('.like-counter');
let favBtn =  document.querySelector('.fav-counter');
let attempsNumber = 3;
let numParagraph = document.querySelectorAll('.result-column > p');
let randNum = Math.floor(Math.random()*10)+1;
let gameInput = document.getElementById('game');
let attempsView = document.querySelector('.alert');
let gameBtn = document.getElementById('game-btn');
attempsView.textContent = "Количество попыток: " + attempsNumber;

/* ==================  Model ================ */

// Задание 1
function redText() {
    for (var i = 0; i < redParagraph.length; i++) {
        redParagraph[i].style.backgroundColor = "#f00";
    }
}

// Задание 2
function shadowImg() {
    for (var i = 0; i < img.length; i++) {
        img[i].style.boxShadow = "2px 2px 5px #444";
    }
}

// Задание 3
function numBeforeText() {
    for (var i = 0; i < numParagraph.length; i++) {
        numParagraph[i].textContent = (i+1) + ". " + numParagraph[i].textContent;
    }
}

// Задание 4
function btnCounter(btn) {
    count = parseInt(btn.textContent, 10);
    count++;
    btn.innerHTML = count;
}

// Задание 5
function pow(a, b) {
    alert(Math.pow(a, b));
}

// Задание 6
function tagUnderline(tag) {
    let text = document.querySelectorAll(tag);
    for (var i = 0; i < text.length; i++) {
        text[i].style.textDecoration = "underline";
    }
}

// Задание 7-8
function customerAge(age) {
    //age = parseInt(age, 10);
    if (typeof age !== "undefined" && age > 16) {
        console.log("добро пожаловать");
    } else if (typeof age !== "undefined" && age <= 16) {
        console.log("вы еще молоды");
    } else {
        console.log("Введите возраст");
    }
}

// Задание 9
function arrLength(arr) {
    let length = arr.length;
    if (arr == "") {
        console.log("Ошибка аргумент не передан");
    } else {
        console.log(length);
    }
}

// Задание 10
function customerNum(num) {
    num = parseInt(num, 10);
    if (num > 10) {
        return Math.pow(num, 2);
    } else if (num < 7) {
        return ("Число меньше 7");
    } else if (num == 8 || num == 9) {
        return num - 1;
    }
    console.log(num);
}

// Задание 11
function compareNumbers(argGame) {
    attempsNumber--;
    if (argGame > randNum) {
        if (attempsNumber == 0) {
            alert("Вы исчерпали количество попыток!!!");
        } else {
            alert("Не угадали, Ваше число больше(((");
        }
    } else if (argGame < randNum) {
        if (attempsNumber == 0) {
            alert("Вы исчерпали количество попыток!!!");
        } else {
            alert("Не угадали, Ваше число меньше(((");
        }
    } else {
        alert("Вы угадали число!!!");
    }
    attempsView.textContent = attempsNumber;
    gameInput.value = "";
}
console.log(randNum);

/* ==================  Controller ================ */

btnRez1.addEventListener('click', redText);
btnRez2.addEventListener('click', shadowImg);
btnRez3.addEventListener('click', numBeforeText);
gameBtn.addEventListener('click', startGame);

function startGame () {
    let argGame = parseInt(gameInput.value, 10);
    console.log(argGame);
    if (isNaN(gameInput.value) || gameInput.value == "") {
        alert("Вы не ввели число!!!");
    } else {
        compareNumbers(argGame);
    }
}