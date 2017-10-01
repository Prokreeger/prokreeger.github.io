console.log('connect - ok');

/* ==================  View ================ */

let storageBtn = document.querySelector('.check-storage-btn');
let arrBtn = document.querySelector('.get-arr-btn');
let head = document.querySelector('head');
let customCss = document.getElementById('custom-css');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-btn');
let agreeCheck = document.getElementById('agree-checkbox');
let styles = document.getElementsByName('styles');
let getAllDataBtn = document.querySelector('.get-all-data-storage-btn');

checkStyles();
/* ==================  Model ================ */

// Задание 1

function localStorage_support() {
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

function localStorage_check() {
    if (localStorage_support() === true) {
        console.log('available');
    } else {
        console.log('unavailable');
    }
}

// Задание 2

for(var i=0; i < styles.length; i++){
  styles[i].addEventListener('click', changeStyles, false);
}

function checkStyles() {
    if (localStorage.getItem("check_styles") == "style1") {
        customCss.href = 'css/js-11_1.css';
    } else if (localStorage.getItem("check_styles") == "style2") {
        customCss.href = 'css/js-11_2.css';
    }
}

function changeStyles(){
    if (this.value == "1") {
        localStorage.setItem("check_styles", "style1");
        customCss.href = 'css/js-11_1.css';
    } else if (this.value == "2") {
        localStorage.setItem("check_styles", "style2");
        customCss.href = 'css/js-11_2.css';
    }
}


// Задание 3

function getArr() {
    var foo = [1, 2, 3];
    localStorage.setItem("bar", foo);
    document.querySelector('.out3').textContent = localStorage.getItem("bar");
}

// Задание 4

if (localStorage.getItem("check") == null) showModal();

function showModal() {
    setTimeout("modal.style.display='block'", 4000);
}

function agree() {
    if (agreeCheck.checked) {
        localStorage.setItem("check", true);
        modal.style.display = "none";
    } else {
        modal.style.display = "none";
    }

}

// Задание 5

function getAllData() {
    console.log('===== Всё содержимое localStorage =====');
    for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem(localStorage.key(i)));
    }
}

/* ==================  Controller ================ */

storageBtn.addEventListener('click', localStorage_check);
arrBtn.addEventListener('click', getArr);
closeBtn.addEventListener('click', agree);
getAllDataBtn.addEventListener('click', getAllData);