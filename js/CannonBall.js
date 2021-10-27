class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    this.trajectary = [];
    World.add(world, this.body);
  }
shoot(){
  var newAngle = cannon.angle - 28;
  newAngle = newAngle*(3.14/180);
  var veloctiy = p5.Vector.fromAngle(newAngle);
  veloctiy.mult(0.5);
  Matter.Body.setStatic(this.body,false);
  Matter.Body.setVelocity(this.body,{x:veloctiy.x*(180/3.14),y:veloctiy.y*(180/3.14)});

}

  display() 
  {
    var angle = this.body.angle
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
    if(this.body.velocity.x>0 && pos.x>10){
      var position = [pos.x,pos.y];
      this.trajectary.push(position);
    }
    for(var i=0; i<this.trajectary.length; i++){
      image(this.image, this.trajectary[i][0], this.trajectary[i],[1],5,5)
    }
  }
}
