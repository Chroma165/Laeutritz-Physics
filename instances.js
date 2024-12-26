class Instance {
  constructor(pos, poly, mass, velo, color, index) {
    this.pos = pos;
    this.polyRel = poly;
    this.#calcPolyAbs();
    this.massKg = mass;
    this.velo = velo;
    this.color = color;
    this.index = index;
  }
  
  #calcPolyAbs() {
    this.polyAbs = this.polyRel.map((point) => ({
      x: point.x + this.pos[0],
      y: point.y + this.pos[1],
    }));
  }
  
  #draw(ctx) {
    drawPoly(this.polyAbs, this.color, ctx);
  }

  #move() {
    this.collisions = checkCollisons(this.index);
    this.pos[0] += this.velo[0];
    this.pos[1] += this.velo[1];
  }
  
  update(ctx) {
    this.#move();
    this.#calcPolyAbs();
    this.#draw(ctx);
  }
}
