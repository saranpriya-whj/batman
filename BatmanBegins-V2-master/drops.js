class Drops {
    constructor(x, y) {

        var options ={
            restitution:0.4
        }
   
      
        this.body = Bodies.circle(x, y, 2,options);       
       this.r = 6;
        World.add(world, this.body);

    }
    update(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    
    
    }
    display() {

        var pos = this.body.position;
       

        fill("blue")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r,10);
        
    }

};
