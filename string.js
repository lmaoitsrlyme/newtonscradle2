class Strings {
  
  constructor(bodyA, pointB)
     {
    //
    //this.offsetY = offsetY;
    var options = {
      bodyA: bodyA,
      pointB: pointB,

      //pointB:{x:this.offsetX, y:0},
      
      
    }
   // this.offsetX = offsetX;
    //this.pointB = pointB;
    //this.x = bodyA.x;
    //this.x = bodyA.y - 250;
    this.strings = Constraint.create(options);
    World.add(world, this.strings);
  }

  display() {
    
      var pointA = this.strings.bodyA.position;
      var pointB = this.strings.pointB;
     
     // strokeWeight(4);
     // stroke("white")
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      
  }
}