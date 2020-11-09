class Dustbin{

    //constructor function will be automatically when any object is created using this class.
    //set all the class properties - here create physics body in constructor.
    // this refers to the object that is being created.
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }

        this.body= Bodies.rectangle(x,y,w,h,options);
        World.add(myWorld, this.body);
        //this.img=loadImage("dustbingreen.png");
        this.width = w;
        this.height = h;

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push (); //Store the new setting
        translate(pos.x,pos.y); //translate will shift the origin to pos.x,pos.y
      //  rotate (angle); // rotate the body respect to the origin.
        rectMode(CENTER);
        strokeWeight(0);
        fill("grey");
        rect(0,0,this.width,this.height);//Origin is already shifted, so draw rect at 0,0
        pop (); //revert back to the old setting
    }

}