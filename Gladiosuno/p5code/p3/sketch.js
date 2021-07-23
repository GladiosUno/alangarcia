
function setup() {
createCanvas(600,600);
  angleMode(DEGREES);


}

function draw() {
background(0);
  translate(300,300);
  textSize(100)

let h = hour();
let m = minute();
let s = second();
let mh = month();
let d = day();

    if(h >= 6 && h < 7) {
    background(247, 215, 145);
    }
  else if(h > 6 && h < 18){
    background(219, 243, 255);
  }
  else if(h >= 18 && h< 21) {
    background(255, 160, 100);
  }
  else {
    background(46, 51, 77);
  }


  text(+d,-60,30);

rotate(-90);
  strokeCap(SQUARE);
strokeWeight(20);
stroke(0,255,255);
noFill();
  let end1= map(s, 0, 60, 0, 360);
arc(0 , 0, 350, 350, 0, end1);


stroke(240, 240, 240);
  let end2 = map(m,0,60,0,360);
  arc(0, 0, 280, 280, 0, end2);

stroke(238,232,170);
let end3 = map(h % 12, 0, 12, -90, 360);
arc(0, 0,220, 220, 0, end3);

  //Month
  strokeWeight(5);
stroke(0,255,255);
let end4 = map (mh % 12, 0, 12, -90, 360);
  ellipse(-200,130,40,40,0,end4);

  stroke(255,255,255);
  strokeWeight(10);
  //rect(-30, 0, 80, 10);
  stroke(255,255,250);
  ellipse(0, 0, 425, 425)
  //ellipse(0, 0, 480, 480)
  // top and low
  noStroke();
  fill(255,255,255);
  rect(210, 0, 60, 10);

   rect(-270, 0, 60, 10);
// sides right and left
  rect(-10, 210, 10, 60);

  rect(0, -270, 10, 60);

  //side quoter top R

  push();
translate(40, 0);
strokeWeight(10);
fill(238, 232, 170);
ellipse(70, 215, 20, 20);

  push();
  ellipse(160, 130,20,20);
  pop();

  // Top L

    push();
translate(40, 0);
strokeWeight(10);
fill(238, 232, 170);
ellipse(130, -120, 20, 20);

  push();
  ellipse(40, -210,20,20);
  pop();

  // Bottom R

  push();
  ellipse(-200,210,20,20);

  ellipse(-280,130,20,20);

  // Bottom L

  ellipse(-290,-115,20,20);

  ellipse(-200,-210,20,20);

}
