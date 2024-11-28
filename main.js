const screen = document.querySelector("#screen");
const ctx = screen.getContext("2d");
const heading = document.querySelector("#heading");

let instances = [];

const testPoly = [
  { x: -100, y: -100 },
  { x: -100, y:  100 },
  { x:  100, y:  100 },
  { x:  100, y: -100 },
];

const test = new Instance([500, 500], testPoly, 3, [2, 2], "#8800ff");
instances.push(test);

document.addEventListener("keydown", (event) => {
  if (event.code = "t") {
    heading.innerHTML = "DEBUG";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    instances.forEach((element) => {
      element.update(ctx);
    });
  }
});
