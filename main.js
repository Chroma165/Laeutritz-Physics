const screen = document.querySelector("#screen");
const heading = document.querySelector("#heading");
const ctx = screen.getContext("2d");

const testPoly = [
  { x: -100, y: -100 },
  { x: -100, y:  100 },
  { x:  100, y: -100 },
  { x:  100, y:  100 },
];

const test = new Instance([500, 500], testPoly, 3, [2, 2], "#8800ff");

test.draw(ctx);

heading.innerHTML = "yeet";