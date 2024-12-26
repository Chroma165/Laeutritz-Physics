const screen = document.querySelector("#screen");
const ctx = screen.getContext("2d");

let instances = [];

const testPoly = [
  { x: -100, y: -100 },
  { x: -100, y:  100 },
  { x:  100, y:  100 },
  { x:  100, y: -100 },
];

const test1 = new Instance([500, 500], testPoly, 3, [2, 2], "#8800ff", 0);
const test2 = new Instance([700, 700], testPoly, 3, [-1, -3], "#ffb880", 1);
instances.push(test1);
instances.push(test2);

window.onload = () => {
  setInterval(updateScreen, 1000/60); // 60FPS
};

function updateScreen() {
  ctx.clearRect(0, 0, screen.width, screen.height);
  instances.forEach((item) => {
    item.update(ctx);
  });
}

function getCollisons(instances, index) {
  let collisons;
  for(let i=0; i<instances.length-1; i++) {
    let poly1 = instances[index].polyAbs;
    let poly2;
    if (i < index) {
      poly2 = instances[i].polyAbs;
    } else {
      poly2 = instances[i+1].polyAbs;
    }
    collisons = getPolyIntersection(poly1, poly2);
  }
}