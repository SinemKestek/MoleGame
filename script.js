const holes = [...document.querySelectorAll(".hole")];
const scoreEl = document.querySelector(".score span");
const startBtn = document.querySelector(".start");
const playMenu = document.querySelector(".play-menu");
const resetBtn = document.querySelector(".reset");
let score = 0;

startBtn.addEventListener("click", () => {
  playMenu.classList.add("play-block");

  run();
});

function run() {
  const i = Math.floor(Math.random() * holes.length);
  //   console.log(i);
  const hole = holes[i];
  let timer = null;
  const img = document.createElement("img");
  img.classList.add("mole");
  img.src = "./assets/mole.png";

  img.addEventListener("click", () => {
    // alert(0);
    scoreColor();
    score += 10;
    scoreEl.textContent = score;
    img.src = "./assets/mole-whacked.png";
    clearTimeout(timer);
    timer = setTimeout(() => {
      hole.removeChild(img);
      run();
    }, 1500);
  });

  hole.appendChild(img);
  timer = setTimeout(() => {
    hole.removeChild(img);
    run();
  }, 600);
}
// run();

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
window.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});
window.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});
resetBtn.addEventListener("click", resetScore);
function resetScore() {
  score = 00;
  scoreEl.innerText = 0;
  scoreEl.style.color = "white";
}

function scoreColor() {
  if (score > 0) {
    setTimeout(() => {
      scoreEl.style.color = "red";
    });
  }
}
