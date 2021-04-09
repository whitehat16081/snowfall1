class Snow{
    constructor(x, y) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.r = 30;
        this.image=loadImage("download.png")
        
        World.add(world, this.body);
      }
      updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,1000), y:random(0,400)})
        }
    }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
   
        imageMode(CENTER);
        image(this.image,0, 0, this.r, this.r);
        pop();
      }
  }