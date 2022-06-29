//made the cannon ball
class CannonBall {
  constructor(x, y) 
  {
    var options = {
      //setting the isStatic to true 
      isStatic: true
    };
    //radius of the ball
    this.r = 30;
    //made the body for the ball
    this.body = Bodies.circle(x, y, this.r, options);
    //loaded the image of the ball
    this.image = loadImage("./assets/cannonball.png");
    //made the trajectory lines
    this.trajectory = [];
    //added the ball to world
    World.add(world, this.body);
  }
  //shoot function for shooting the cannon balls
  shoot() {
    //declared a new angle
    var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }
  //made the display function for display the this.body and trajectory
  display(){
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
    //getting the positions of the ball and pushing them in the trajectory array
    if (this.body.velocity.x>0 && pos.x>10) {
      var position = [pos.x, pos.y]
      this.trajectory.push(position);
    }
    //adding image to the trajectory
    for(var i = 0; i<this.trajectory.length; i++){
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
  }
}
