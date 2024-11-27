class Instance {
  constructor(pos, poly, mass, velo, color, ctx) {
    this.pos = pos;
    this.polyRel = poly;
    this.polyAbs = this.calcPolyAbs();
    this.massKg = mass;
    this.veloVec = velo;
    this.color = color;
    this.ctx = ctx;
  }
  
  calcPolyAbs() {
    let polyAbs = this.poly;
    polyAbs.forEach((element) => {
      element.x += this.pos[0];
      element.y += this.pos[1];
    })
    return polyAbs;
  }
  
  draw(ctx) {
    drawPoly(this.polyAbs, this.color, ctx);
  }
  
  update(ctx) {
    calcPolyAbs();
    draw(ctx);
  }
}
