var pc,back;
var bird;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;
var wallh,wallv;
var wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40;
var wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50
var diamond,diamondimg,goldcoin,goldcoinimg;
var goldcoin1,goldcoin2,goldcoin3,goldcoin4,goldcoin5,goldcoin6,goldcoin7,goldcoin8,goldcoin9;
var diamond1,diamond2,diamond3,diamond4,diamond5,diamond6,diamond7,diamond8,diamond9;
var diamond1img,diamond2img,diamond3img,diamond4img,diamond5img,diamond6img,diamond7img,diamond8img,diamond9img;
var gameState ;
var END = 0

function preload(){
  pc = loadImage("PC.png");
  back = loadImage("back.png");
  wallh = loadImage("wallh.png");
  wallv = loadImage("wallv.png");
  diamondimg = loadImage("diamond1.png");
  goldcoinimg = loadImage("coin.png");
  diamond1img = loadImage("diamond1.png");
  diamond2img = loadImage("diamond2.png");
  diamond3img = loadImage("diamond3.png");
  diamond4img = loadImage("diamond4.png");
  diamond5img = loadImage("diamond5.png");
  diamond6img = loadImage("diamond6.png");
  diamond7img = loadImage("diamond7.png");
  diamond8img = loadImage("diamond8.png");
  diamond9img = loadImage("diamond9.png");
  



}




function setup() {
  createCanvas(800,600);
  bird = createSprite(228, 30, 50, 50);
  bird.addImage(pc);
  bird.scale = 0.019;

  

  wall1= createSprite(100,50,200,10);
  wall1.shapeColor = "purple";
 
  wall2= createSprite(5,280,10,450);
  wall2.shapeColor = "purple";

  wall3= createSprite(150,120,10,150);
  wall3.shapeColor = "purple";

  wall4= createSprite(30,100,50,10);
  wall4.shapeColor = "purple";

  wall5= createSprite(120,130,50,10);
  wall5.shapeColor = "purple";

  wall6= createSprite(100,110,10,40);
  wall6.shapeColor = "purple";

  wall7= createSprite(50,190,110,10);
  wall7.shapeColor = "purple";

  wall8= createSprite(200,190,110,10);
  wall8.shapeColor = "purple";

  wall9= createSprite(200,220,10,60);
  wall9.shapeColor = "purple";

  wall10= createSprite(260,165,10,60);
  wall10.shapeColor = "purple";

  wall11= createSprite(405,50,300,10);
  wall11.shapeColor = "purple";

  wall12= createSprite(260,75,10,40);
  wall12.shapeColor = "purple";

  wall13= createSprite(240,90,50,10);
  wall13.shapeColor = "purple";

  wall14= createSprite(210,115,10,60);
  wall14.shapeColor = "purple";

  wall15= createSprite(290,140,50,10);
  wall15.shapeColor = "purple";

  wall16= createSprite(260,15,10,60);
  wall16.shapeColor = "purple";

  wall17= createSprite(195,15,10,60);
  wall17.shapeColor = "purple";

  wall18= createSprite(210,115,10,60);
  wall18.shapeColor = "purple";

  wall19= createSprite(230,3,65,10);
  wall19.shapeColor = "purple";

  wall20= createSprite(550,280,10,450);
  wall20.shapeColor = "purple";

  wall21= createSprite(310,115,10,45);
  wall21.shapeColor = "purple";

  wall22= createSprite(355,95,100,10);
  wall22.shapeColor = "purple";

  wall23= createSprite(400,165,10,150);
  wall23.shapeColor = "purple";

  wall24= createSprite(400,235,100,10);
  wall24.shapeColor = "purple";

  wall25= createSprite(425,280,250,10);
  wall25.shapeColor = "purple";

  wall26= createSprite(305,235,10,100);
  wall26.shapeColor = "purple";

  wall27= createSprite(325,185,50,10);
  wall27.shapeColor = "purple";

  wall28= createSprite(355,165,10,50);
  wall28.shapeColor = "purple";

  wall29= createSprite(475,105,10,100);
  wall29.shapeColor = "purple";

  wall30= createSprite(515,190,80,10);
  wall30.shapeColor = "purple";

  wall31= createSprite(355,325,310,10);
  wall31.shapeColor = "purple";

  wall32= createSprite(255,280,10,100);
  wall32.shapeColor = "purple";

  wall33= createSprite(205,355,10,50);
  wall33.shapeColor = "purple";

  wall34= createSprite(235,375,70,10);
  wall34.shapeColor = "purple";

  wall35= createSprite(375,355,10,50);
  wall35.shapeColor = "purple";

  wall36= createSprite(425,385,10,130);
  wall36.shapeColor = "purple";

  wall37= createSprite(445,455,50,10);
  wall37.shapeColor = "purple";

  wall38= createSprite(525,415,50,10);
  wall38.shapeColor = "purple";

  wall39= createSprite(525,375,50,10);
  wall39.shapeColor = "purple";

  wall40= createSprite(435,505,240,10);
  wall40.shapeColor = "purple";

  wall41= createSprite(315,485,10,50);
  wall41.shapeColor = "purple";

  wall42= createSprite(295,465,130,10);
  wall42.shapeColor = "purple";

  diamond= createSprite(20,20);
  diamond.addImage(diamondimg);
  diamond.scale = 0.15;

  goldcoin = createSprite(110,20);
  goldcoin.addImage(goldcoinimg);
  goldcoin.scale = 0.02;

  

}

function draw() {
  background(back); 
  
  if(keyDown(LEFT_ARROW)){
    bird.x -=2
  }
  if(keyDown(RIGHT_ARROW)){
    bird.x +=2
  }
  if(keyDown(DOWN_ARROW)){
    bird.y +=2
  }
  if(keyDown(UP_ARROW)){
    bird.y -=2
  }

  if(bird.isTouching(wall1) || bird.isTouching(wall2) || 
  bird.isTouching(wall3)  || bird.isTouching(wall4)  || 
  bird.isTouching(wall6)  || bird.isTouching(wall5)  || bird.isTouching(wall7)  
  || bird.isTouching(wall10)  || bird.isTouching(wall9)  || bird.isTouching(wall8)  || 
  bird.isTouching(wall12)  || bird.isTouching(wall11)  || bird.isTouching(wall13)  || bird.isTouching(wall14)  
  || bird.isTouching(wall18)  || bird.isTouching(wall30)  || bird.isTouching(wall42)  || bird.isTouching(wall15) 
  || bird.isTouching(wall19)  || bird.isTouching(wall31)  || bird.isTouching(wall2)  || bird.isTouching(wall2) 
  || bird.isTouching(wall20)  || bird.isTouching(wall32)  || bird.isTouching(wall2)  || bird.isTouching(wall2) 
  || bird.isTouching(wall21)  || bird.isTouching(wall33)  || bird.isTouching(wall2)  || bird.isTouching(wall2) 
  || bird.isTouching(wall22)  || bird.isTouching(wall34)  || bird.isTouching(wall2)  || bird.isTouching(wall2) 
  || bird.isTouching(wall23)  || bird.isTouching(wall35)  || bird.isTouching(wall2)  || bird.isTouching(wall2)
  || bird.isTouching(wall24)  || bird.isTouching(wall36)  || bird.isTouching(wall2)  || bird.isTouching(wall2) 
  || bird.isTouching(wall25)  || bird.isTouching(wall37)  || bird.isTouching(wall2)  || bird.isTouching(wall2) 
  || bird.isTouching(wall26)  || bird.isTouching(wall38)  || bird.isTouching(wall2)  || bird.isTouching(wall2) 
  || bird.isTouching(wall27)  || bird.isTouching(wall39)  || bird.isTouching(wall2)  || bird.isTouching(wall2) 
  || bird.isTouching(wall28)  || bird.isTouching(wall40)  || bird.isTouching(wall2)  || bird.isTouching(wall2) 
  || bird.isTouching(wall29)  || bird.isTouching(wall41)  || bird.isTouching(wall2)  || bird.isTouching(wall2)  ){

   gameState = END;
  }
  if(gameState === END){
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    wall13.destroy();
    wall14.destroy();
    wall15.destroy();
    wall16.destroy();
    wall17.destroy();
    wall18.destroy();
    wall19.destroy();
    bird.destroy();
    wall20.destroy();
    wall21.destroy();
    wall22.destroy();
    wall23.destroy();
    wall24.destroy();
    wall25.destroy();
    wall26.destroy();
    wall27.destroy();
    wall28.destroy();
    wall29.destroy();
    wall30.destroy();
    wall31.destroy();
    wall32.destroy();
    wall33.destroy();
    wall34.destroy();
    wall35.destroy();
    wall36.destroy();
    wall37.destroy();
    wall38.destroy();
    wall39.destroy();
    wall40.destroy();
    wall41.destroy();
    wall42.destroy();
    diamond.destroy();
    goldcoin.destroy();
    
    fill("gold")
    textSize(50);
    text("You Lose",200,300);
  
  
  
  }
 
  bird.bounceOff(wall1);
  bird.bounceOff(wall2);
  bird.bounceOff(wall3);
  bird.bounceOff(wall4);
  bird.bounceOff(wall5);
  bird.bounceOff(wall6);
  bird.bounceOff(wall7);
  bird.bounceOff(wall8);
  bird.bounceOff(wall9);
  bird.bounceOff(wall10);
  bird.bounceOff(wall11);
  bird.bounceOff(wall12);
  bird.bounceOff(wall13);
  bird.bounceOff(wall14);
  bird.bounceOff(wall15);
  bird.bounceOff(wall16);
  bird.bounceOff(wall17);
  bird.bounceOff(wall18);
  bird.bounceOff(wall19);
  bird.bounceOff(wall20);
  bird.bounceOff(wall21);
  bird.bounceOff(wall22);
  bird.bounceOff(wall23);
  bird.bounceOff(wall24);
  bird.bounceOff(wall25);
  bird.bounceOff(wall26);
  bird.bounceOff(wall27);
  bird.bounceOff(wall28);
  bird.bounceOff(wall29);
  bird.bounceOff(wall30);
  bird.bounceOff(wall31);
  bird.bounceOff(wall32);
  bird.bounceOff(wall33);
  bird.bounceOff(wall34);
  bird.bounceOff(wall35);
  bird.bounceOff(wall36);
  bird.bounceOff(wall37);
  bird.bounceOff(wall38);
  bird.bounceOff(wall39);
  bird.bounceOff(wall40);
  bird.bounceOff(wall41);
  bird.bounceOff(wall42);














  textSize(30);
  fill("purple");
  text("Mystery Twist",315,30);
  textSize(15);
  fill("gold")
  text("Instructions : ",560,40);
  text("Try figuring out how you can reach ",560,70);
  text("the end of the maze.",560,90);
  text("Your goal is nothing but to revenge ",560,120);
  text("the pigs for eating your eggs.",560,140);
  text("You can control the Angry bird(You)",560,170);
  text("by pressing the arrow keys.",560,190);
  text("The score is displayed on the",560,220);
  text("top left corner which includes how",560,240);
  text(" many diamonds and gold coins ",555,260);
  text("you have collected.",560,280);
  text("The end of the maze is the end point",560,310);
  text("where you have the eggs ,that you ",560,330);
  text("and your birds have laid it and",560,350);
  text("if you collect it, you are the winner.",560,370);
  text("Be aware of the Pigs and if you ",560,400);
  text("touch them, you lose.",560,420);
  text("Do not touch the maze walls,",560,450);
  text("and if you do, you lose",560,470);
  text("All the best.",560,500);
  text("Show your anger to the pigs,",560,530);
  text("as this is right time to do it.",560,550);
  text("Happy Diwali 🪔🪔🪔🪔🪔🪔🪔",560,580);
  drawSprites();
  
}
if(gameState === END){
  wall1.destroy();
  wall2.destroy();
  wall3.destroy();
  wall4.destroy();
  wall5.destroy();
  wall6.destroy();
  wall7.destroy();
  wall8.destroy();
  wall9.destroy();
  wall10.destroy();
  wall11.destroy();
  wall12.destroy();
  wall13.destroy();
  wall14.destroy();
  wall15.destroy();
  wall16.destroy();
  wall17.destroy();
  wall18.destroy();
  wall19.destroy();
  bird.destroy();
  wall20.destroy();
  wall21.destroy();
  wall22.destroy();
  wall23.destroy();
  wall24.destroy();
  wall25.destroy();
  wall26.destroy();
  wall27.destroy();
  wall28.destroy();
  wall29.destroy();
  wall30.destroy();
  wall31.destroy();
  wall32.destroy();
  wall33.destroy();
  wall34.destroy();
  wall35.destroy();
  wall36.destroy();
  wall37.destroy();
  wall38.destroy();
  wall39.destroy();
  wall40.destroy();
  wall41.destroy();
  wall42.destroy();
  diamond.destroy();
  goldcoin.destroy();
  
  textSize(50);
  text("You Lose",350,300);



}