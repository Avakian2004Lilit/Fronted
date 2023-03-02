

let input = document.querySelector("input");
const btnElem = document.querySelector(".elem");
const btnItem = document.querySelector(".item");
const p = document.querySelector("p");

btnElem.onclick = () => {
    input.value = input.value - 1;
    localStorage.setItem("number, input.value");
};

btnItem.onclick = () => {
    input.value = +input.value + 1;
    localStorage.setItem("number, input.value");
};

input.value = localStorage.getItem("number");
