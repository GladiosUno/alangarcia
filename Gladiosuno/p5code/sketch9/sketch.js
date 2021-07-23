
var blob;
var a = 0;
var t = 0;

var textTime = 0;




       /*
        // sample example
    var sampletoon = {
       "name":"Boris",
       "r":200,
       "g":160,
       "b":200,
       "head": 60,
       "torso": 33,
       "posX":50,
       "posY":90,
       "moveX":[5,-3,4,-6,-3,3,4,-2],
       "moveY":[2,4,4,6,-3,3,4,-2]
        }
        */


 var sx = 0;
 var sy = 0;


function preload() {
  blob = loadJSON("blob.json");
}

function setup() {
   createCanvas(700,600);
   background(0);
    rectMode(CENTER);



     // this shows the whole blob json data package
   console.log(blob);
   noStroke();

}



function draw() {
  background(224,255,255);
  rect(400, 500, 1000, 700, 20, 15, 10, 5);
  fill(152,251,152);

      // Trees
  {
 // fill(210,105,30);
 // rect(130,200,50,110);
 // fill(143,188,143);
 // ellipse(120,140,90,50);
 // ellipse(100,120,90,50);
 // ellipse(160,120,90,50);
 // ellipse(140,100,90,50);

 // fill(152,251,152);
  }


  updateToon(blob.toons[0]);  // Tom
  updateToon(blob.toons[1]);  // K.K

  updatePresent(blob.toons[0]);  //present1
  updatePresent(blob.toons[1]);  //present2

}



function updateToon(obj) {

      push();

      if ( int(random(10)) > 8) {
       obj.nextX = int(random(obj.moveX.length));
       obj.nextY = int(random(obj.moveY.length));
      }

      obj.posX += obj.moveX[obj.nextX];
      obj.posY += obj.moveY[obj.nextY];


      // console.log(obj.posX);

       if (obj.posX > width) {
         obj.posX = 0;
       }

       if (obj.posX < 0) {
         obj.posX = width;
       }

       if (obj.posY > height) {
         obj.posY = 0;
       }

       if (obj.posY < 0) {
         obj.posY = height;
       }

       drawToon(obj);
       drawTree(obj);

      pop();


}

function updatePresent(obj) {

      push();

      if ( int(random(10)) > 8) {
       obj.nextX = int(random(obj.presentMoveX.length));
       obj.nextY = int(random(obj.presentMoveY.length));
      }

      obj.posX2 += obj.presentMoveX[obj.nextX];
      obj.posY2 += obj.presentMoveY[obj.nextY];


      // console.log(obj.posX);

       if (obj.posX2 > width) {
         obj.posX2 = 0;
       }

       if (obj.posX2 < 0) {
         obj.posX2 = width;
       }

       if (obj.posY2 > height) {
         obj.posY2 = 0;
       }

       if (obj.posY2 < 0) {
         obj.posY2 = height;
       }


       drawPresent(obj);
      pop();


}

//draws the floating presents

function drawPresent( obj) {
  push();
    translate(obj.posX2, obj.posY2);
    fill(255);
    rect(0,40,obj.present,obj.present);
    fill(255,0,0);
    rect(0,40,10,30);
    fill(0);
    rect(0,30,30,2);
    rect(0,0,2,50);
    fill(221,160,221);
    ellipse(0,-5,40,40);

}

//should draw the tree

function drawTree(obj){
  fill(210,105,30);
  rect(obj.treex,obj.treey,30,15*obj.tree);
  fill(143,188,143);
  ellipse(obj.treex+25,obj.treey-5*obj.tree,10*obj.tree,5*obj.tree);
  ellipse(obj.treex-20,obj.treey-5*obj.tree,5*obj.tree,5*obj.tree);
  ellipse(obj.treex,obj.treey-8*obj.tree,10*obj.tree,5*obj.tree);
  fill('white');
  text(obj.treename,obj.treex-30,obj.treey+5.5*obj.tree);
  //fruit
  fill(255,0,0); //fruit color
  ellipse(obj.treex,110,obj.fruit,obj.fruit);
  ellipse(15+obj.treex,70,obj.fruit,obj.fruit);
  ellipse(-30+obj.treex,80,obj.fruit,obj.fruit);
  ///
 // ellipse(600,120,obj.fruit,obj.fruit);
 // ellipse(575,150,obj.fruit,obj.fruit);
 // ellipse(625,150,obj.fruit,obj.fruit);
}



function drawToon( obj) {

    //  console.log(obj.posX[s]);



  push();


        translate(obj.posX , obj.posY);
        textSize(20);

            stroke(255);
  noStroke();
  fill(255,180);
  ellipse(20,-50,100,50);
  ellipse(40,-30,100,50);
  ellipse(85,-50,100,50);
  ellipse(120,-30,100,50);
  ellipse(160,-50,100,50);
    fill(0, 255, 0, 160);
  ellipse(20,-90,200,25);
  fill(0);


  text(obj.bubble[t],-10,-50);

   if (millis() - textTime > 2000) {
       t++;
       textTime = millis();

      if (t > obj.bubble.length - 1){
              t = 0;

          }
          }
  {


     fill(0);
        textSize(30);
        text(obj.name,-50,-80);

        // TOM Ears
    if (obj.accessory==1)
    {
     fill(obj.r-66,obj.g-51,obj.b-39);
     ellipse(10,1,20, 20);
     ellipse(-10,1,20, 20);
     fill(obj.r-19,obj.g-18,obj.b-19);
     ellipse(10,3,15, 15);
     ellipse(-10,3,15, 15);
  }
         // TOM head
    if (obj.head == obj.head) {

        fill(obj.r,obj.g,obj.b);
        ellipse(0,20,obj.head,obj.head);
      fill(obj.r-66,obj.g-51,obj.b-39);
      rect(0, 10, 25, 20, 40);

    }
        // TOM Torse
    if (obj.torso==obj.torso) {
        fill(obj.r-19,obj.g-18,obj.b-19);
        ellipse(1,obj.torso+30,obj.torso+20);
    }
        // K.K Head
  if (obj.head == 34)
        {

          fill(obj.r,obj.g,obj.b);
          rect(0,10,30,45,0,8);
          fill(0);
          rect(10, 3, 10, 5);
          rect(-10, 3, 10, 5);


        }
          // K.K Torso
  if (obj.torso==10)
        {
          fill(obj.r-10,obj.g-10,obj.b-13);
          rect(0,60,30,60,20,60);
        }
    if(obj.accessory==2)
        {
          fill(obj.r-32,obj.g-34,obj.b-26);
          noStroke();
          triangle(30,10,20,-10,-5,-10);

          triangle(-30,10, -30,-10,-10,-10);

        }
        // eyes
        fill(0);
        ellipse(-10,10,5,5);
        ellipse(10,10,5,5);
        //nose
        rect(0,20,5,4,2);



    pop();

  }
}
