const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ball,ground,ground2,ground3;
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(width/2,height-20,width,10);
    ground2=new Ground(width/2,-200,width,10);
    box1=new Dustbin(width-250,height-20-5-10,200,20);
	box2=new Dustbin(width-250-box1.width/2+10,height-20-10-5-10-50,20,100);
	box3=new Dustbin(width-250+box1.width/2-10,height-20-10-5-10-50,20,100);
    ball=new Ball(200,200);
    ground3=new Ground(width-250+box1.width/2-10,1,1,height*2);


}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    ball.display();
    if(keyCode===UP_ARROW){
    Body.applyForce(ball.body,ball.body.position,{x:3,y:-16})
    }
    
}