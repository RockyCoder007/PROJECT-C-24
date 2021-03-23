class Ball{
  constructor(x,y){

    var options = {
      'restitution':0.8,
      'isStatic':false,
      'friction':0.5,
      'density':2.2
  }
      this.body = Bodies.circle(x,y,50,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    
  }
  display(){


    var angle = this.body.angle;
    fill('yellow')
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(0,0, 50,50);
    pop();
  }
}
