class Instance {
  constructor(pos, poly, mass, velo, color, ctx) {
    this.pos = pos;
    this.polyRel = poly;
    this.calcPolyAbs();
    this.massKg = mass;
    this.veloVec = velo;
    this.color = color;
    this.ctx = ctx;
  }
  
  calcPolyAbs() {
    this.polyAbs = this.polyRel.map((point) => ({
      x: point.x + this.pos[0],
      y: point.y + this.pos[1],
    }));
  }
  
  draw(ctx) {
    drawPoly(this.polyAbs, this.color, ctx);
  }
  
  update(ctx) {
    this.calcPolyAbs();
    this.draw(ctx);
  }
}
