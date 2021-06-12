class Ball {
    constructor(x, y , width , height) {
      var options = {
        'density':1,
        'frictionAir': 0.005
      };
      this.body = Bodies.circle(x,y,width,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
  
      push();
      translate(this.body.position.x , this.body.position.y);
      rotate(angle);
      fill('red')
      ellipse(0,0,50,50);
      pop();
    };
  };
  