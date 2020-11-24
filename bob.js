class Bob {
  constructor(x, y ) {
    var options = {
      restitution: 1,
      friction: 0.1,
      density:0.8,
     
      };
    
      
      
    this.body = Bodies.circle(x, y, 50, options);
    this.x = x;
    this.y = y;
    this.radius = 50;
    World.add(world, this.body);
  }

  display() {
    
    var pos = this.body.position;
    push();
    
    fill(244, 169, 187);
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.radius , this.radius );
    pop();
  }
}
