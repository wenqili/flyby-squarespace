var Mover = function(m, x, y){
  this.mass = m;
  this.pos = createVector(x, y);
  this.acc = createVector(0,0);
  this.vel = createVector(0,0);

  this.applyForce = function(force){
    var f = p5.Vector.div(force,this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.display = function(cNoise) {
    fill(30,50,40);
    stroke(30,50,40,100);
    strokeWeight(0.5);
    ellipse(this.pos.x,this.pos.y,40*this.mass*this.mass,40*this.mass*this.mass);
    line(width/2,height/2,this.pos.x,this.pos.y);
  }
}
