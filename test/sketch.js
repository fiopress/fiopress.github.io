let mic;
let balls = [];
var col = [];
let fall = 0;
var ran = [];


function setup() {
  createCanvas(500, 500);
  mic = new p5.AudioIn();
  mic.start();
  for (let o=0; o<5;o++){
    for (let p=0; p<6; p++){
      col[o*5+p]=random(255)
      ran[o*5+p]=ceil(random(10));
    }
  }
  
}

function draw() {
  background(200);

  let vol = mic.getLevel();
  const h = map(vol, 0, 1, 150, 0);
  const g = map(vol, 0, 1, 0, 150);


  
  for(let i = 0; i < 5; i++) {
    for (let k = 0; k<5; k++){
    balls[i*5+k] = new Ball(i*100+50+(((ran[i*5+k]%2)*2-1)*(-1))*(g%30)+ran[i*5+k]*0.5, k*100+50+(((ran[i*5+k+1]%2)*2-1)*(-1))*(g%10)+ran[i*5+k]*0.2, (i*5+k)%2*(h+10) + (i*5+k+1)%2*(g+50), col[i*5+k]);
    balls[i*5+k].draw(g*(k*5+i))
    
    }
    }
}

class Ball{
 constructor(x, y, dia, colors) {
    this.x = x;
    this.y = y;
   this.dia = dia;
   this.colors = colors;
  }
  draw(d, g){
    fill(this.colors, 200, 0, d)
    ellipse(this.x, this.y, this.dia, this.dia);
  }
}
