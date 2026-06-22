let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let winner = document.querySelector(".showWinner");
let totalClick = 0;
let winnerFound = false;

// setting variables for X=1 and O=0
let currentValue = 1;

// winning condition
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

//checking draw
const checkDraw = () => {
  if (totalClick == 9 && !winnerFound) {
    winner.innerText = "It's a Draw";
    newGameBtn.classList.remove("hide");
    resetBtn.classList.add("hide");
  }
};

// core logic of the game
const checkWinnig = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]];
    let pos2 = boxes[pattern[1]];
    let pos3 = boxes[pattern[2]];

    if (
      pos1.innerText !== "" &&
      pos2.innerText !== "" &&
      pos3.innerText !== ""
    ) {
      if (
        pos1.innerText === pos2.innerText &&
        pos2.innerText === pos3.innerText
      ) {
        for (let box of boxes) {
          box.disabled = true;
        }
        winner.innerText = `${pos1.innerText} wins! 🤩`;
        winner.classList.add("winner");
        winnerFound = true;
        totalClick = 0;
        newGameBtn.classList.remove("hide");
        resetBtn.classList.add("hide");
        return;
      }
    }
  }
};

for (let box of boxes) {
  box.addEventListener("click", () => {
    totalClick++;
    if (currentValue == 1) {
      box.innerText = "X";
      box.classList.add("xColor");
      currentValue = 0;
    } else {
      box.innerText = "O";
      box.classList.add("oColor");
      currentValue = 1;
    }
    box.disabled = true;
    checkWinnig();
    checkDraw();
  });
}

resetBtn.addEventListener("click", () => {
  winner.classList.remove("winner");
  winner.innerText = "Continue the game";
  winnerFound = false;
  totalClick = 0;
  boxes.forEach((box) => {
    box.innerText = " ";
    box.disabled = false;
    box.classList.remove("xColor", "oColor");
  });
});

newGameBtn.addEventListener("click", () => {
  winner.classList.remove("winner");
  winner.innerText = "Continue the game";
  winnerFound = false;
  totalClick = 0;
  boxes.forEach((box) => {
    box.innerText = " ";
    box.disabled = false;
    box.classList.remove("xColor", "oColor");
  });
  newGameBtn.classList.add("hide");
  resetBtn.classList.remove("hide");
});
