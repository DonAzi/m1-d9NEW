let cardsNode = document.getElementById("boardId");
for (let cells = 1; cells < 76; cells++) {
  let theDiv = document.createElement("div");
  cardsNode.appendChild(theDiv);
  theDiv.classList.add("stylish");

  theDiv.innerHTML = cells;
}

let theButtons = document
  .getElementById("buttonsId")
  .addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * 76);

    let theCells = document.querySelectorAll(".stylish");
    theCells[randomNum].classList.add("activeColor");
    console.log(randomNum);
  });
