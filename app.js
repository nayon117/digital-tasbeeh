const subhanAllahDisplay = document.getElementById("subhanAllah-display");
const subhanAllahIncrementBtn = document.getElementById("subhanAllahIncrementBtn");
const subhanAllahDecrementBtn = document.getElementById("subhanAllahDecrementBtn");

const alhamdulilahDisplay = document.getElementById("alhamdulilah-display");
const alhamdulilahIncrementBtn = document.getElementById("alhamdulilahIncrementBtn");
const alhamdulilahDecrementBtn = document.getElementById("alhamdulilahDecrementBtn");


const allahAkbarDisplay = document.getElementById("allahAkbar-display");
const allahAkbarIncrementBtn = document.getElementById("allahAkbarIncrementBtn");
const allahAkbarDecrementBtn = document.getElementById("allahAkbarDecrementBtn");

const resetBtn = document.getElementById("reset-btn");

let subhanAllahInitialValue = 0;
let alhamdulilahInitialValue = 0;
let allahAkbarInitialValue = 0;

subhanAllahIncrementBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 33) {
        return alert("subhanAllah complete. please fill up another one");
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.textContent = subhanAllahInitialValue;
})

subhanAllahDecrementBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) {
        return alert("you can't added negative value")
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.textContent = subhanAllahInitialValue;
})

alhamdulilahIncrementBtn.addEventListener('click', function () {
    if (alhamdulilahInitialValue === 33) {
        return alert("Alhamdulilah complete. please fill up another one")
    }
    alhamdulilahInitialValue += 1;
    alhamdulilahDisplay.textContent = alhamdulilahInitialValue;
})
alhamdulilahDecrementBtn.addEventListener('click', function () {
    if (alhamdulilahInitialValue === 0) {
        return alert("you can't added negative value")
    }
    alhamdulilahInitialValue -= 1;
    alhamdulilahDisplay.textContent = alhamdulilahInitialValue;
})

allahAkbarIncrementBtn.addEventListener('click', function () {
    if (allahAkbarInitialValue === 34) {
        return alert("Allah Akbar Tasbeeh completed")
    }
    allahAkbarInitialValue += 1;
    allahAkbarDisplay.textContent = allahAkbarInitialValue;
})
allahAkbarDecrementBtn.addEventListener('click', function () {
    if (allahAkbarInitialValue === 0) {
        return alert("you can't add negative value")
    }
    allahAkbarInitialValue -= 1;
    allahAkbarDisplay.textContent = allahAkbarInitialValue;
})

resetBtn.addEventListener('click', function () {
    subhanAllahDisplay.textContent = 0;
    alhamdulilahDisplay.textContent = 0;
    allahAkbarDisplay.textContent = 0;
    subhanAllahInitialValue = 0;
    alhamdulilahInitialValue == 0;
    allahAkbarInitialValue = 0;
})