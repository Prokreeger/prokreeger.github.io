
console.log('connect - ok');

/* ==================  View ================ */
var mas = ["some numbers", "Привет мир!!!", 333];
let paragraph = document.getElementById('new');
let inputGetIndex = document.getElementById('input-index');
let inputGetValue = document.getElementById('input-value');
let inputPushValue = document.getElementById('input-push-value');
let btnShowMas = document.getElementById('button-show-mas');
let btnPopMas = document.getElementById('button-pop');
let btnShiftMas = document.getElementById('button-shift');
let btnPushMas = document.getElementById('button-push');

function showResult(text) {
    paragraph.innerHTML = text;
}
showMas();

/* ==================  Model ================ */

function showMas() {
    let text = "";
    for (var i=0; i<mas.length; i++) {
        text += mas[i] + "<br>";
    }
    showResult(text);
    resetInputValue();
}

function addNewMasElement() {
    mas[inputGetIndex.value] = inputGetValue.value;
    showMas();
}

function errorInput() {
  let text = "Введеное значение некорректное или пустое!!!";
  showResult(text);
}

function popMas() {
    mas.pop();
    showMas();
}

function shiftMas() {
    mas.shift();
    showMas();
}

function pushMas() {
    mas.push(inputPushValue.value);
    showMas();
}

function resetInputValue() {
    inputGetIndex.value = "";
    inputGetValue.value = "";
    inputPushValue.value = "";
}

/* ==================  Controller ================ */

btnShowMas.addEventListener('click', setNewMas);
btnPopMas.addEventListener('click', popMas);
btnShiftMas.addEventListener('click', shiftMas);
btnPushMas.addEventListener('click', setMasAfterPush);

function setNewMas () {
    if (isNaN(inputGetIndex.value) || (inputGetIndex.value == "") || (inputGetValue.value == "")) {
        errorInput();
    } else {
        addNewMasElement();
    }
}

function setMasAfterPush () {
    if (inputPushValue.value == "") {
        errorInput();
    } else {
        pushMas();
    }
}