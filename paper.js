class Paper{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,r/2,option);
      
        World.add(myWorld,this.body);
        this.img=loadImage("paper.png");
    }
    display(){
        var paperpos=this.body.position;
        var angle = this.body.angle;
        paper.scale=1;
        push();
        translate(paperpos.x,paperpos.y);
        rotate (angle);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        image(this.img,0,0,50,50);
        pop();
        
    }
}