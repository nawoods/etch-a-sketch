const boxContainer = document.querySelector(".box-container");

for (let i = 0; i < 4; i++) {
    const boxRow = document.createElement("div");
    boxRow.classList += " box-row";
    
    for (let j = 0; j < 4; j++) {
        const box = document.createElement("div");
        box.classList += " box";
        boxRow.appendChild(box);
    }
    boxContainer.appendChild(boxRow);
}

