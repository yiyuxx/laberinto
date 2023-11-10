var player, lowerWall, upperWall, leftWallup, rightWallup, leftWalldown, rightWalldown;

var horizontalLeft1, horizontalLeft2, horizontalLeft3, horizontalLeft4, horizontalLeft5,
horizontalLeft6, horizontalLeft7, horizontalLeft8, horizontalLeft9;
var horizontalRight1,horizontalRight2, horizontalRight3, horizontalRight4, horizontalRight5,
horizontalRight6, horizontalRight7, horizontalRight8, horizontalRight9;

var verticalLeft1, verticalLeft2, verticalLeft3, verticalLeft4;
var verticalRight1, verticalRight2, verticalRight3, verticalRight4;

var upperMiddle1, upperMiddle2, upperMiddle3, upperMiddle4, upperMiddle5, upperMiddle6, upperMiddle7;

var squareLeft1, squareLeft2;
var squareRight1, squareRight2;

var wallsGroup;

function preload(){

}

function setup() {
  createCanvas(600, 400);
  
//SPRITE DEL JUGADOR
  player = createSprite(300, 200, 10, 10);
  player.shapeColor="#37A926";

//LÍMITES DEL JUEGO SUPERIOR E INFERIOR
  lowerWall= createSprite(300,395,1200,10);
  lowerWall.shapeColor="#F36C0F";
  upperWall= createSprite(550,5,1200,10);
  upperWall.shapeColor="#F36C0F";

//LÍMITES EXTREMO IZQUIERDO
  leftWallup= createSprite(5,72,10,122);
  leftWallup.shapeColor="#44C96C";
  leftWalldown= createSprite(5,322,10,132);
  leftWalldown.shapeColor="#44C96C";

//LÍMITES EXTREMO DERECHO

rightWallup=createSprite(525,72,10,122)
rightWallup.shapeColor="#44C96C";

rightWalldown=createSprite(595,157,150,45)
rightWalldown.shapeColor="#44C96C";



// PAREDES HORIZONTALES IZQUIERDAS
  horizontalLeft1 = createSprite(75,157,150,45);
  horizontalLeft1.shapeColor="#CAFDFF";
  horizontalLeft2 = createSprite(75,233,150,45);
  horizontalLeft2.shapeColor="#E963C2";
  horizontalLeft3 = createSprite(200,40,120,20);
  horizontalLeft3.shapeColor="#F13652";
  horizontalLeft4 = createSprite(195,115,50,20);
  horizontalLeft4.shapeColor="#F8B700";
  horizontalLeft5 = createSprite(270,150,40,20);
  horizontalLeft5.shapeColor="#1F9781";
  horizontalLeft6 = createSprite(63,290,30,25);
  horizontalLeft6.shapeColor="#823589";
  horizontalLeft7 = createSprite(117,325,30,25);
  horizontalLeft7.shapeColor="#823589";
  horizontalLeft8 = createSprite(210,295,100,20);
  horizontalLeft8.shapeColor="#F13652";
  horizontalLeft9 = createSprite(150,375,230,25);
  horizontalLeft9.shapeColor="#21C3D8";

//PAREDES HORIZONTALES DERECHAS

horizontalRight1=createSprite(525,157,150,45)
horizontalRight1.shapeColor="pink"
horizontalRight2=createSprite(525,233,150,45)
horizontalRight2.shapeColor="red"
horizontalRight3=createSprite(400,40,120,20)
horizontalRight3.shapeColor="orange"
horizontalRight4=createSprite(410,115,50,20)
horizontalRight4.shapeColor="purple"
horizontalRight5=createSprite(330,150,40,20)
horizontalRight5.shapeColor="#1F9781";
horizontalRight6=createSprite(535,290,30,25)
horizontalRight6.shapeColor="#823589";
horizontalRight7=createSprite(481,325,30,25)
horizontalRight7.shapeColor="#823589";
horizontalRight8=createSprite(390,295,100,20)
horizontalRight8.shapeColor="#F13652";
horizontalRight9=createSprite(450,375,230,25)
horizontalRight9.shapeColor="#21C3D8";

//PAREDES VERTICALES IZQUIERDAS
  verticalLeft1 = createSprite(190,200,20,90);
  verticalLeft1.shapeColor="#44C96C";
  verticalLeft2 = createSprite(240,200,20,120);
  verticalLeft2.shapeColor="#1F9781";
  verticalLeft3 = createSprite(90,307,25,60);
  verticalLeft3.shapeColor="#823589";
  verticalLeft4 = createSprite(180,348,25,30);
  verticalLeft4.shapeColor="#F8B700";

//PAREDES VERTICALES DERECHAS
verticalRight1=createSprite(410,200,20,90)
verticalRight1.shapeColor="#44C96C";
verticalRight2=createSprite(360,20,20,90)
verticalRight2.shapeColor="#1F9781";
verticalRight3=createSprite(508,307,25,60)
verticalRight3.shapeColor="#823589";
verticalRight3=createSprite(420,348,25,60)
verticalRight4.shapeColor="#F8B700";


//PAREDES MEDIAS
  upperMiddle1 = createSprite(300,32,20,45);
  upperMiddle1.shapeColor="#E963C2";
  upperMiddle2 = createSprite(300,85,120,20);
  upperMiddle2.shapeColor="#D66A27";
  upperMiddle3 = createSprite(300,105,20,20);
  upperMiddle3.shapeColor="#D66A27";
  upperMiddle4 = createSprite(300,250,100,20);
  upperMiddle4.shapeColor="#1F9781";
  upperMiddle5 = createSprite(300,282,20,45);
  upperMiddle5.shapeColor="#1F9781";
  upperMiddle6 = createSprite(300,335,70,20);
  upperMiddle6.shapeColor="#F36C0F";
  upperMiddle7 = createSprite(300,360,20,30);
  upperMiddle7.shapeColor="#F36C0F";
  
//SPRITES CUADROS IZQUIERDA

  squareLeft1 = createSprite(75,73,80,80);
  squareLeft1.shapeColor="#865797";
  squareLeft2 = createSprite(165,65,50,30);
  squareLeft2.shapeColor="#F13652";

//SPRITES CUADROS DERECHA

  /*squareRight1.shapeColor="#865797";

  squareRight2.shapeColor="#F13652";*/

//CREACIÓN DE GRUPO WALL
  wallsGroup = createGroup();

//AGRUPAR LOS ELEMENTOS
  wallsGroup.add(lowerWall);
  wallsGroup.add(upperWall);
  wallsGroup.add(leftWallup);
  wallsGroup.add(leftWalldown);

  wallsGroup.add(horizontalLeft1);
  wallsGroup.add(horizontalLeft2);
  wallsGroup.add(horizontalLeft3);
  wallsGroup.add(horizontalLeft4);
  wallsGroup.add(horizontalLeft5);
  wallsGroup.add(horizontalLeft6);
  wallsGroup.add(horizontalLeft7);
  wallsGroup.add(horizontalLeft8);
  wallsGroup.add(horizontalLeft9);

  wallsGroup.add(verticalLeft1);
  wallsGroup.add(verticalLeft2);
  wallsGroup.add(verticalLeft3);
  wallsGroup.add(verticalLeft4);

  wallsGroup.add(upperMiddle1);
  wallsGroup.add(upperMiddle2);
  wallsGroup.add(upperMiddle3);
  wallsGroup.add(upperMiddle4);
  wallsGroup.add(upperMiddle5);
  wallsGroup.add(upperMiddle6);
  wallsGroup.add(upperMiddle7);
  wallsGroup.add(squareLeft1);
  wallsGroup.add(squareLeft2);

  
}


function draw() {
  background("#404040");
  //Condición para mover al jugador con flechas
if(keyCode==UP_ARROW){
player.y=player.y-2
}
if(keyCode==DOWN_ARROW){
    player.y=player.y+2}
if(keyCode==LEFT_ARROW){
  player.x=player.x-2
   }
   if(keyCode==RIGHT_ARROW){
    player.x=player.x+2}
  drawSprites();
  
}
