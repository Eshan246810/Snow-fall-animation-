class Snow{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
            
        } 
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.options = options;
        this.body = snowy
        World.add(world,snowy);
        this.image = loadImage("snow4.webp");   
    }
    display(){
        var angle = this.body.angle
        var positionX = this.body.position.x
        var positionY = this.body.position.y
        var width = this.width;
        var height = this.height;
        push();
        translate(positionX,positionY);
        rotate(angle);
        imageMode(CENTRE);
        image(this.image,0,0,width,height);
        pop();
    }


}