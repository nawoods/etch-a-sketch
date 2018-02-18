function changeResolution(numberOfSquares) {
    const boxWidth = Math.floor(sketchpadWidth / numberOfSquares);
    boxContainer.innerHTML = "";
    
    for (let i = 0; i < numberOfSquares; i++) {
        const boxRow = document.createElement("div");
        boxRow.classList += " box-row";
        boxRow.style.height = boxWidth + "px";
        
        for (let j = 0; j < numberOfSquares; j++) {
            const box = document.createElement("div");
            box.classList += " box";
            box.style.width = boxWidth + "px";
            box.style.height = boxWidth + "px";
            box.addEventListener("mouseover", toggleBoxColor);
            boxRow.appendChild(box);
        }
        boxContainer.appendChild(boxRow);
}
    
}
function toggleBoxColor() {
    this.classList.toggle("active-box");
}

function submitNumber() {
    const numberOfSquares = numberInput.value;
    if (isNaN(numberOfSquares)) return;
    changeResolution(numberOfSquares);
}

const sketchpadWidth = 420;

const boxContainer = document.querySelector(".box-container");
const numberInput = document.querySelector(".number-input");
const numberSubmit = document.querySelector(".number-submit");

boxContainer.style.width = sketchpadWidth + "px";
boxContainer.style.height = sketchpadWidth + "px";


numberSubmit.addEventListener("click", submitNumber);

changeResolution(4);