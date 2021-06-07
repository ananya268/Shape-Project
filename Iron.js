class Iron{
    constructor(x, y){
        var options = {
            restitution: 0.8, 
            friction: 3, 
            density: 30
        }
        this.body = Bodies.rectangle(60, 40, 53, 29, options); 
        this.width = 10; 
        this.height = 10; 

        World.add(world, this.body); 
    }

    display(){
        var pos = this.body.position; 
        var angle = this.body.angle; 

        pos.x = 20; 
        pos.y = 20; 

        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
        fill("red");
        rectMode(CENTER); 
        rect(20, 20, this.width, this.height); 
        pop(); 
    }
}