function* randomGenerator(min, max) {
    while (true) {
        yield Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

let minLimit = Number(prompt("Введіть мінімальне число для генератора:"));
let maxLimit = Number(prompt("Введіть максимальне число для генератора:"));
const randGen = randomGenerator(minLimit, maxLimit);

const nextBtn = document.getElementById("next");
const outDiv = document.getElementById("out");

nextBtn.addEventListener("click", () => {
    let val = randGen.next().value;
    outDiv.textContent = val;
});