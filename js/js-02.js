// 1
let a1 = document.getElementById('example__1');
let b1 = new Date();
let btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', age);
function age() {
    if ((a1.value).length == 2) {
        let c1 = parseInt(("20" + a1.value), 10);
        let d1 = b1.getFullYear() - c1;
        if (isNaN(c1)) {
            alert("Вы не ввели год рождения!!!");
        } else if (d1 >= 0 ) {
            alert("Вам " + d1);
        } else {
            alert("Вы ещё не родились))))");
        }
    } else {
        let c1 = parseInt(a1.value, 10);
        let d1 = b1.getFullYear() - c1;
        if (isNaN(c1)) {
            alert("Вы не ввели год рождения!!!");
        } else if (d1 >= 0 ) {
            alert("Вам " + d1);
        } else {
            alert("Вы ещё не родились))))");
        }
    }
}

// 2
let a2 = document.getElementById('example__2-1');
let b2 = document.getElementById('example__2-2');
let btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', maxNumber);
function maxNumber() {
    let c2 = parseFloat(a2.value);
    let d2 = parseFloat(b2.value);
    if (c2 > d2) {
        alert("Число " + c2 + " больше числа " + d2);
    } else if (c2 < d2) {
        alert("Число " + c2 + " меньше числа " + d2);
    } else if (isNaN(c2) || isNaN(d2)) {
        alert("Вы не ввели числа!!!");
    } else {
        alert("Числа равны");
    }
}

// 3
let a3 = document.getElementById('example__3-1');
let btn3 = document.getElementById('btn-3');
btn3.addEventListener('click', searchFlat);
function searchFlat() {
    let b3 = parseInt(a3.value, 10);
    if (b3 >= 1 && b3 <= 20) {
        alert("Квартира с №" + b3 + " находится в 1-м подъезде");
    } else if (b3 >= 21 && b3 <= 64) {
        alert("Квартира с №" + b3 + " находится во 2-м подъезде");
    } else if (b3 >= 65 && b3 <= 85) {
        alert("Квартира с №" + b3 + " находится в 3-м подъезде");
    } else if (isNaN(b3)) {
        alert("Вы не ввели номер квартиры!!!");
    } else {
        alert("Квартиры с №" + b3 + " нет в этом доме");
    }
}

// 4
let a4 = document.getElementById('example__4-1');
let b4 = document.getElementById('example__4-2');
let btn4 = document.getElementById('btn-4');
btn4.addEventListener('click', authorization);
let obj = {
    ivan: '333',
    ssss: '666',
    gibs: '0000'
}
function authorization() {
    mess = (obj[a4.value] === b4.value) ? 'Добро пожаловать' : 'ошибка';
    alert(mess);
}

// 5
let a5 = document.getElementById('example__5-1');
let b5 = document.getElementById('example__5-2');
let c5 = document.getElementById('example__5-3');
let btn5 = document.getElementById('btn-5');
btn5.addEventListener('click', max3Number);
function max3Number() {
    let d5 = parseFloat(a5.value);
    let e5 = parseFloat(b5.value);
    let f5 = parseFloat(c5.value);
    let g5 = Math.max(d5,e5,f5);
    if (isNaN(d5) || isNaN(e5) || isNaN(f5)) {
        alert("Вы не ввели числа!!!");
    } else {
        alert("Максимальное число " + g5);
    }
}

// 6
let a6 = document.querySelector('.for-1');
for (var i = 0; i < 101; i = i + 2) {
    a6.innerHTML += i + " ";
}

// 7
let a7 = document.querySelector('.for-2');
for (var i = 200; i >= 0; i--) {
    a7.innerHTML += i + " ";
}

// 8
let a8 = document.querySelector('.for-3');
let sum = 0;
for (var i = 0; i <= 100; i++) {
    sum += i;
}
a8.innerHTML = sum;

// 9
let a9 = document.querySelector('.for-4');
let b9 = document.getElementById('for__4-1');
let c9 = document.getElementById('for__4-2');
let btn9 = document.getElementById('btn-9');
btn9.addEventListener('click', stepen);
function stepen() {
    let num = 1;
    let d9 = parseInt(b9.value, 10);
    let e9 = parseInt(c9.value, 10);
    for (var i = 1; i <= e9; i++) {
        num *= d9;
    }
    a9.innerHTML = num;
    b9.value = "";
    c9.value = "";
}

// 10
let a10 = document.querySelector('.for-5');
let b10 = 0;
for (var i = 1; i <= 9; i++) {
    b10 = i * 7;
    a10.innerHTML += i + " * 7 = " + b10 + "<br>";
}

// 11
let a11 = document.querySelector('.for-6');
let b11 = 1;
for (var i = 1; i <= 50; i++) {
    b11 *= i;
}
a11.innerHTML = b11;

// 12
let a12 = document.querySelector('.for-7');
for (var i = 1000; i <= 2000; i++) {
    a12.innerHTML += "&amp;#" + i + "; ";
}
