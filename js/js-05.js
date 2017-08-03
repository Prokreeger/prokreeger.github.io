
console.log('connect - ok');

/* ==================  View ================ */

let LengthInpt = document.getElementById('str-length-inpt');
let LengthBtn = document.getElementById('get-length-btn');
let task1result = document.querySelector('.task-1-result');
let imgArr = [
    "img/h4/bhutan.jpg",
    "img/h4/india.jpg",
    "img/h4/nepal.jpg",
    "img/h4/tibet.jpg"
];
let createImgBtn = document.getElementById('create-images-btn');
let task2result = document.querySelector('.task-2-result');
let siteInpt = document.getElementById('site-inpt');
let siteBtn = document.getElementById('get-site-btn');
let task3result = document.querySelector('.task-3-result');
let newSiteInpt = document.getElementById('4site-inpt');
let newSiteBtn = document.getElementById('get-4site-btn');
let task4result = document.querySelector('.task-4-result');
let fname = document.getElementById('first-name');
let lname= document.getElementById('last-name');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let sendFormBtn = document.getElementById('send-form');
let task5result = document.querySelector('.task-5-result');
let symbolInpt = document.getElementById('symbol-inpt');
let symbolBtn = document.getElementById('get-symbol-btn');
let task6result = document.querySelector('.task-6-result');

function showResult(result, taskNum) {
    taskNum.classList.add("alert", "alert-info", "margin-t-20");
    taskNum.innerHTML = result;
}

/* ==================  Model ================ */

// Задание 1
function getStrLength() {
    let rez = LengthInpt.value.length;
    showResult(rez, task1result);
    resetInputValue(LengthInpt);
}

// Задание 2
function createImages() {
    task2result.classList.add("margin-t-20");
    for (var i=0; i<imgArr.length; i++) {
        task2result.innerHTML += "<img src='"+ imgArr[i] +"'>";
    }
}

// Задание 3
function getSite() {
    let rez = siteInpt.value;
    if (rez.substr(0,8) == "https://") {
        rez = rez.substring(8);
        showResult(rez, task3result);
    } else if (rez.substr(0,7) == "http://") {
        rez = rez.substring(7);
        showResult(rez, task3result);
    } else if (rez == "") {
        rez = "Вы ничего не ввели";
        showResult(rez, task3result);
    } else {
        rez = "Вы ввели не сайт";
        showResult(rez, task3result);
    }
    resetInputValue(siteInpt);
}

// Задание 4
function getNewSite() {
    let rez = newSiteInpt.value;
    if (rez.substr(0,12) == "https://www.") {
        rez = rez.substring(12);
        showResult(rez, task4result);
    } else if (rez.substr(0,11) == "http://www.") {
        rez = rez.substring(11);
        showResult(rez, task4result);
    } else if (rez.substr(0,8) == "https://") {
        rez = rez.substring(8);
        showResult(rez, task4result);
    } else if (rez.substr(0,7) == "http://") {
        rez = rez.substring(7);
        showResult(rez, task4result);
    } else if (rez == "") {
        rez = "Вы ничего не ввели";
        showResult(rez, task4result);
    } else {
        showResult(rez, task4result);
    }
    resetInputValue(newSiteInpt);
}

// Задание 5
function sendForm() {
    let rez = true;
    delSpaces(fname.value);
    delSpaces(lname.value);
    showResult(rez, task5result);
}

function delSpaces(str) {
    str = str.replace(/\s/g, '');
    return str;
}

function countEntrySymbol() {
    var count = 0;
    var pos = email.value.indexOf('@');
    while (pos !== -1) {
      count++;
      pos = email.value.indexOf('@', pos + 1);
    }
    return count;
}

// Задание 6
function getSymbolCode() {
    if (symbolInpt.value == "") {
        rez = "Вы не ввели символ";
    } else {
        rez = symbolInpt.value.charCodeAt(0);
    }
    showResult(rez, task6result);
    resetInputValue(symbolInpt);
}

// Reset function
function resetInputValue(resetValue) {
    resetValue.value = "";
}

/* ==================  Controller ================ */

LengthBtn.addEventListener('click', getStrLength);
createImgBtn.addEventListener('click', createImages);
siteBtn.addEventListener('click', getSite);
newSiteBtn.addEventListener('click', getNewSite);
sendFormBtn.addEventListener('click', validateForm);
symbolBtn.addEventListener('click', getSymbolCode);

function validateForm () {
    let isMail = countEntrySymbol();
    if (fname.value == "" || lname.value == "" || email.value == "" || pass.value == "") {
        alert("Вы заполнили не все поля!!!");
    } else if (pass.value.length < 5) {
        alert("Пароль должен состоять из 5 и более символов!!!");
    } else if (isMail !== 1 || ~email.value.indexOf(" ")) {
      alert( 'Некорректный email!!!' );
  } else {
      sendForm();
  }
}