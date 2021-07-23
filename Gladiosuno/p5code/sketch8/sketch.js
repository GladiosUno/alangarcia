var marioarr = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 3, 0, 0, 0, 4, 3, 4, 1, 0, 0, 0, 0],
  [0, 0, 0, 3, 4, 3, 4, 0, 0, 3, 4, 0, 0, 1, 0, 0],
  [0, 1, 0, 3, 4, 3, 0, 4, 0, 0, 3, 4, 0, 0, 1, 0],
  [0, 0, 1, 3, 0, 4, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 2, 3, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 3, 0, 0, 2, 3, 0, 2, 3, 0, 0, 1, 0, 0],
  [0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 1, 0],
  [0, 0, 4, 0, 3, 2, 4, 2, 0, 4, 2, 3, 4, 0, 1, 0],
  [0, 1, 4, 0, 0, 2, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0],
  [0, 0, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0],
  [0, 0, 0, 0, 2, 0, 0, 1, 0, 2, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 3, 0, 0, 1, 0, 0]
  ];

  var a = 0;

  //function setup() {

var wordarr = [
["orange","peach", "peach","peach","peach","peach", "peach","peach","black","orange","peach", "peach","peach","orange" ],
["peach","orange", "orange","orange","orange","orange", "orange","orange","black","peach","orange", "orange","orange","black" ],
["peach","orange", "orange","orange","orange","orange", "orange","orange","black","peach","orange", "orange","orange","black" ],
["peach","orange", "orange","orange","orange","orange", "orange","orange","black","peach","black", "orange","orange","black" ],
["peach","orange", "orange","orange","orange","orange", "orange","orange","black","orange","black", "black","black","orange" ],
["peach","orange", "orange","orange","orange","orange", "orange","orange","black","peach","peach", "peach","peach","black" ],
["peach","orange", "orange","orange","orange","orange", "orange","orange","black","peach","orange", "orange","orange","black" ],
["peach","orange", "orange","orange","orange","orange", "orange","orange","black","peach","orange", "orange","orange","black" ],
["black","black", "orange","orange","orange","orange", "orange","black","peach","orange","orange", "orange","orange","black" ],
["peach","peach", "black","black","orange","orange", "orange","black","peach","orange","orange", "orange","orange","black" ],
["peach","orange", "peach","peach","black","black", "black","peach","orange","orange","orange", "orange","orange","black" ],
["peach","orange", "orange","orange","peach","peach", "black","peach","orange","orange","orange", "orange","orange","black" ],
["peach","orange", "orange","orange","orange","orange", "black","peach","orange","orange","orange", "orange","orange","black" ],
["orange","black", "black","black","black","black", "orange","peach","black","black","black", "black","black","orange" ],
];

var b = 0;

  function  setup()  {
  createCanvas(800, 500);
  scale(0.4);
  noStroke(0);
  background(204,204,255);

push();
translate (200,1050);
scale(0.8);
drawWordArr();
pop();

push ();
translate (420,1050);
scale (0.8);
drawWordArr();
pop();

push ();
translate (640,1050);
scale (0.8);
drawWordArr();
pop();

push();
translate (1000,1050);
scale (1.0);
rotate(radians(-45));
drawWordArr();
pop();

push();
translate (200,200);
scale(0.8);
drawMarioArr();


  }
  function drawMarioArr() {

  for (var i = 0; i < 16; i++) {
          for (var j = 0; j < 16; j++) {
            a = marioarr[i][j];
                if (a === 1) {
                  fill(204, 204, 255);

                } else if (a==2) {
                  fill(255, 51, 51);
                } else if (a==3) {
                  fill(218,165,32);
                } else if (a==4) {
                  fill(255,225,204);
                }


            rect((j * 20) + 0, (i * 20) + 725, 30, 30);
          }
      }
  }


  function drawWordArr() {




  for (i = 0; i < 14; i++) {
          for (j = 0; j < 14; j++) {
            b = wordarr[i][j];
                if (b === "blue") {
                  fill(204, 204, 255);
                  text(b,(j * 20), (i * 20), 2);
                } else if (b =="orange") {
                  fill(255,127,80);
                  text(b,(j * 20), (i * 20), 2);
                } else if (b == "black") {
                  fill(0,0,0);
                  text(b,(j * 20), (i * 20), 2);
                } else if (b=="peach") {
                  fill(255,225,204);
                  text(b,(j * 20), (i * 20), 2);
                }


            // rect((j * 20) + -250, (i * 20) + 1050, 20, 20);
          }
      }
  }
