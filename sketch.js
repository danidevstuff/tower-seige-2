const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

let ground,platform,box1

function setup(){
    var canvas= createCanvas(displayWidth,754);
    engine = Engine.create();
    world = engine.world;

   ground = new Ground(0,734,displayWidth,20);

   platform = new Ground(500 , 400 , 470,20);

   box1=new Box(510,370);
   box2=new Box(560,370);
   box3=new Box(610,370);
   box4=new Box(660,370);
   box5=new Box(710,370);
   box6=new Box(760,370);
   box7=new Box(810,370);
   box8=new Box(860,370);
   box9=new Box(910,370);

   box10=new Box(530,270);
   box11=new Box(580,270);
   box12=new Box(630,270);
   box13=new Box(680,270);
   box14=new Box(730,270);
   box15=new Box(780,270);
   box16=new Box(830,270);
   box17=new Box(880,270);

   box18=new Box(550,170);
   box19=new Box(600,170);
   box20=new Box(650,170);
   box21=new Box(700,170);
   box22=new Box(750,170);
   box23=new Box(800,170);
   box24=new Box(850,170);

   ball=new Ball(400,370,20,20);
   rope=new Rope(ball.body,{x:400,y:370});
    
};

function draw(){
    background('black');
    Engine.update(engine);

   ground.display();
   platform.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();

   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();

   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box24.display();

   ball.display();
   rope.display();

   
  
};

function mouseDragged() {
   
        Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(ball.body , {x:400,y:370});
        rope.attach(ball.body);
    };
};