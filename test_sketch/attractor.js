var Attractor = function() {
  this.pos = createVector(width/2,height/2);
  this.mass = 1;
  this.C = 1;

  this.attract = function(mover) {
    var force = p5.Vector.sub(this.pos,mover.pos);
    var d = force.mag();
    force.normalize();
    d = constrain(d,6,8);
    
    var strength = (this.C * mover.mass * this.mass) / (d * d);
    force.mult(strength);
    return force;
  }

  this.display = function() {
    fill(0);
    ellipse(this.pos.x,this.pos.y,10,10);
  }
}
