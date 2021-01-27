class rubber {
    constructor(x,y){
    var options = {
        'restitution':0.3,
        'friction':5,
        'density':1
    }
    this.body = Bodies.circle(x,y,50,options);
    this.radius = 50;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x,pos.y,this.radius);
    }
    };