const screen = document.querySelector("#screen");
const ctx = screen.getContext("2d");
const debugOut = document.querySelector("#debug");

let instances = [];

const testPoly = [
  { x: -100, y: -100 },
  { x: -100, y:  100 },
  { x:  100, y:  100 },
  { x:  100, y: -100 },
];

const test = new Instance([500, 500], testPoly, 3, [2, 2], "#8800ff");
instances.push(test);

window.onload = updateScreen;

function updateScreen() {
  debugOut.innerHTML = "tick";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  instances.forEach((item) => {
    item.update(ctx);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "KeyT") {
    debugOut.innerHTML = "click";
    updateScreen();
  }
});
