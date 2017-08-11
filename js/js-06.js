
console.log('connect - ok');

/* ==================  View ================ */

let block = document.querySelector('.block');
let task1result = document.querySelector('.task-1-result');
let folderImg = document.querySelector('.folder-img');
let task3result = document.querySelector('.task-3-result');
let imgBlock = document.querySelector('.image-block');
let block_50x50 = document.querySelector('.block-50x50');
let marginCount = 0;
let triggerBlock = document.querySelector('.trigger-block');
let trigger = document.querySelector('.trigger');
let triggerCount = 1;

function showResult(result, taskNum) {
    taskNum.classList.add("alert", "alert-info", "margin-t-20");
    taskNum.innerHTML = result;
}
addBlocks();

/* ==================  Model ================ */

// Задание 1
function getCoordinates(event) {
    let rez = event.offsetX + " x " + event.offsetY;
    showResult(rez, task1result);
}

// Задание 2
function openFolder() {
    folderImg.style.backgroundPosition = "right top";
}

// Задание 3
function addBlocks() {
    let rez = "";
    for (var i = 0; i < 300; i++) {
        rez += '<div class="small-block"></div>';
    }
    showResult(rez, task3result);
}
task3result.onmouseover = function(event) {
    let target = event.target || event.srcElement;
    if (target.className == "small-block") {
        target.style.borderRadius = "30px";
    }
};

// Задание 4
document.body.onclick = function(event) {
    let target = event.target || event.srcElement;
    if (target.className == "image") {
        imgBlock.style.backgroundImage = "url(" + target.src + ")";
        imgBlock.style.backgroundSize = "contain";
        imgBlock.style.backgroundRepeat = "no-repeat";
    }
};

// Задание 5
function marginTop100() {
    marginCount = marginCount + 100;
    block_50x50.style.marginTop = marginCount + "px";
}

// Задание 6
function triggerChange() {
    if (triggerCount == 1) {
        triggerBlock.style.textAlign = "center";
        console.log(triggerCount);
        triggerCount++;
    } else if (triggerCount == 2) {
        triggerBlock.style.textAlign = "right";
        console.log(triggerCount);
        triggerCount = 0;
    } else {
        triggerBlock.style.textAlign = "left";
        console.log(triggerCount);
        triggerCount++;
    }
}

/* ==================  Controller ================ */

block.addEventListener('mousemove', getCoordinates);
folderImg.addEventListener('dblclick', openFolder);
block_50x50.addEventListener('click', marginTop100);
trigger.addEventListener('click', triggerChange);