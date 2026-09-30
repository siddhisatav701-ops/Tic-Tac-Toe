const boxes = Array.from(document.querySelectorAll(".box"));
const resetBtn = document.querySelector("#resetbtn");
const newBtn = document.querySelector("#newbtn");
const msgContainer = document.querySelector(".msg-container");
const mes = document.querySelector("#mes");
const mesDraw = document.querySelector(".msg-draw");
const newBtn2 = document.querySelector("#newbtn2");

let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

const resetGame = () => {
  turnO = true;
  count = 0;
  foundWinner =  false;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msgContainer.classList.add("hide");
  mesDraw.classList.add("hide");
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const draw = () =>{
  mesDraw.classList.remove("hide");
}

const checkWinner = () => {
  for (const pattern of winPatterns) {
    const pos1Val = boxes[pattern[0]].innerText;
    const pos2Val = boxes[pattern[1]].innerText;
    const pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
      foundWinner = true;
      mes.innerText = `Congratulations, Winner is ${pos1Val}`;
      msgContainer.classList.remove("hide");

      disableBoxes();
      return;
    }
    if(count == 9 && foundWinner == false){
      draw();
    }
  }
};
let foundWinner =false;
let count =0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return;
    count = count+1;
    if (turnO) {
      box.innerText = "O";
      box.classList.add("o");
      box.classList.remove("x");
      turnO = false;
    } else {
      box.innerText = "X";
      box.classList.add("x");
      box.classList.remove("o");
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
newBtn2.addEventListener("click", resetGame);