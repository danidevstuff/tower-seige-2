class Ground {
    constructor(x, y, w, h) {
       
        this.w = w;
        this.h = h;

        this.body = Bodies.rectangle(x, y, w, h, { isStatic: true });
        World.add(world , this.body);
    };
    display() {

        push();
        translate(this.body.position.x,this.body.position.y)
        fill('red');
        rect(0, 0, this.w/2, this.h);
        pop();
    }
}