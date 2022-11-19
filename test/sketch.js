let song;
let ar = [];
let arfft = [];
let w = 135;
let aver = [];
let avert = [];
let averages;
let averagesdata;
var bNormalize = true;
var centerClip = 0;
let bass, lowMid, mid, highMid, treble, bins, amp;

function preload(){
  song = loadSound('./daft_touch.mp3');
}

let starNum = 800
let stella = []
let whiteColor = 255
let a = 0.01;
let g = 4;
let t = 0;
let xoff = 1.0;
let h= 0
let yoff = 1.0;
let noff=0;
let bgOpacity = 250;
let circleOpacity = 200;
let bgColor = 20;


function setup() {
  
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < starNum; i++) {
      stella.push(new Stella())
  }
    song.play();
  fft = new p5.FFT(0, 256);
  fft.setInput(song);
  
  ffts = new p5.FFT(0, 256);
  ffts.setInput(song);


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(bgColor, bgOpacity)
  

  let spectrum = fft.analyze();
  aver = fft.linAverages(16)
  translate(width / 2, height / 2)

  for (var j=0; j<aver.length; j+=1){
    h = map(aver[j], 0, 255, 0, 100);
    avert[j] = h 
  }
  
  
  
ffts.analyze()
  ffts.smooth()
  averagesdata = ffts.waveform(16)
  averages = map (averagesdata[8]+averagesdata[4]+averagesdata[1], -3, 3, 0, 0.001)
  
  bass = map(ffts.getEnergy("bass"), 0, 255, 0, 1)
  lowMid = map(ffts.getEnergy("lowMid"), 0, 255, 0, 1)
  mid = map(ffts.getEnergy("mid"), 0, 255, 0, 1)
  highMid = map(ffts.getEnergy("highMid"), 0, 255, 0, 1)
  treble = map(ffts.getEnergy("treble"), 0, 255, 0, 1)
  //voice  = treble

  
  bins=[bass,lowMid,mid,highMid,treble]
  amp = (bass + lowMid+ mid + highMid + treble)/5
  
  
     bgOpacity = map(averages, 0, 0.001, 200, 120)
    circleColor= map(averages, 0, 0.001, 200, 255)
    
  if(w<10 && song.currentTime() < 110.5){
    noff = noff + map(Math.log(amp*0.002+1), 0, Math.log(1.002), 0.0001, 0.0015)
    rotate((cos((noff)%PI)+1)*PI)  
 
  }

    if (song.currentTime() > 110.5){
    bgColor = lerp(bgColor, 255, 0.6);
      rotate(0)
    document.querySelector(".box").style.backgroundColor = "#ffffff"
      
      document.querySelector(".two").style.backgroundColor = "#ffffff"
      document.querySelector(".three").style.backgroundColor = "#ffffff"
      document.querySelector(".four").style.backgroundColor = "#ffffff"
  }
  
  
  // min radius of ellipse
  var minRad = 10;
  // max radius of ellipse
  var maxRad = width*1.4;

  // array of values from -1 to 1
  var timeDomain = fft.waveform(512, 'float32');
  var corrBuff = autoCorrelate(timeDomain);

  var len = corrBuff.length;

  
  

  

  
  for (const star of stella) {
      star.generator()
  }
  
  
  push()
  beginShape();
  
  let flowerColor = 17;
  let flowerOpacity = 0;
  fill(0, 0)
  
  if(song.currentTime() >47.7&&song.currentTime()<63&&fft.getEnergy("treble")>80){
    flowerOpacity = 240
    flowerColor = 240
  }
   if(song.currentTime() >63&&song.currentTime()<99&&fft.getEnergy("treble")>90){
         flowerOpacity = 240
    flowerColor = 240
  }



  if(song.currentTime() >99&&song.currentTime()<109&&fft.getEnergy("treble")<82){
    flowerOpacity = 240
    flowerColor = 240
  }
  
  if(song.currentTime() >109&&song.currentTime()<110.5&&fft.getEnergy("treble")>80){
    flowerOpacity = 240
    flowerColor = 240
  }


  
 
  
  
  if(song.currentTime() >110.5 && song.currentTime() <151.95){
    flowerOpacity = 20
    flowerColor = 20
    maxRad = height*1.4
    
  }
  
  
  if(song.currentTime() >151.95 && song.currentTime() <700){
    flowerColor = color(255, 200, 0, 100)
    maxRad = height*1.4
    
  }
  
  

  
  
  
  
  stroke(flowerColor, flowerOpacity);


  for (var i = 0; i < len; i++) {
    var angles = map(i, 0, len, 0, HALF_PI);
    var offsets = map(abs(corrBuff[i]), 0, 1, 0, maxRad) + minRad;
    var xu = (offsets) * cos(angles);
    var yu = (offsets) * sin(angles);
    curveVertex(xu, yu);
  }

  for (var i = 0; i < len; i++) {
    var angles = map(i, 0, len, HALF_PI, PI);
    var offsets = map(abs(corrBuff[len - i]), 0, 1, 0, maxRad) + minRad;
    var xu = (offsets) * cos(angles);
    var yu = (offsets) * sin(angles);
    curveVertex(xu, yu);
  }

  // semi circle with mirrored
  for (var i = 0; i < len; i++) {
    var angles = map(i, 0, len, PI, HALF_PI + PI);
    var offsets = map(abs(corrBuff[i]), 0, 1, 0, maxRad) + minRad;
    var xu = (offsets) * cos(angles);
    var yu = (offsets) * sin(angles);
    curveVertex(xu, yu);
  }

  for (var i = 0; i < len; i++) {
    var angles = map(i, 0, len, HALF_PI + PI, TWO_PI);
    var offsets = map(abs(corrBuff[len - i]), 0, 1, 0, maxRad) + minRad;
    var xu = (offsets) * cos(angles);
    var yu = (offsets) * sin(angles);
    curveVertex(xu, yu);
  }


  endShape(CLOSE);
  pop()
  

  
  
  var acc = 0.05

  if(w>110){
      w = w-acc*1.5
      acc += acc
  }
  if(w>40&&w<=110){
    w = w-acc*20
      acc += acc
  }
  if(w>1 && w<=40){
      w = w-acc
    acc += acc
    }else if (w==1){
      w=1;
    }
  
  if (t<6){
  t +=1  
  }else if(t==6){
    t=0;
  }
  
    xoff = xoff + 0.01

    yoff = yoff + 0.01;
  

}



function Stella() {
  this.x = 60*cos(random(-PI, PI))
  this.y = 60*sin(random(-PI, PI))
  
  this.vo = avert[t] + 1
  this.v = 0
  this.w = w
  this.bgOpacity = bgOpacity
  this.circleOpacity = circleOpacity
  let ran_size = random(0,1)

  this.generator = function () {
      noStroke()
      this.v += Math.log(avert[t]*0.01+1)
      this.averages = averages;
      if (this.v > this.vo) {
          this.v = this.vo
      }
      let vector = createVector(this.x, this.y)
      
      
      let ellipseAngle = atan2(this.y+cos(yoff)*this.averages*0.3, this.x+cos(xoff)*this.averages*0.2)*2/PI
      push()
    if (this.w>50){
      translate(this.x, this.y)  
    } else {
      translate(this.x+cos(xoff)*treble*0.3, this.y+cos(yoff)*this.averages*0.2)   
    }
       
      rotate(ellipseAngle)
    let circleColor = 255;
    let opacity = 255;
    let ballSize = this.v*0.9

    
    if (song.currentTime() < 108){
       opacity = map(amp, 0, 1, 200, 255)
      
    }
    if (song.currentTime() > 105 && song.currentTime() < 107) {
      if(t%4==0){
              circleColor = 0

      }else {
                      circleColor = 255

      }
    }
     
    
    if (song.currentTime() > 107 && song.currentTime() < 110.5) {
      if(t%2==0){
              circleColor = 0

      }else if(t%2==1){
              circleColor = 255

      }
    }
    
    
    if (song.currentTime() > 151.95 && song.currentTime() < 700) {
      
              circleColor =  color(255, 200, 0, 30)
            ballSize = this.v


    }
    
      
  
    
    if (song.currentTime() > 110.5 && song.currentTime()<151.95){
       circleColor = this.v*0.6;
      opacity = 100;
      ballSize = this.v*0.4
            w = 1

  }
  
      fill(circleColor, opacity)
    
      ellipse(0, 0, ballSize)

      pop()
    
    
      vector.normalize()
      vector.mult(this.v)
    
      this.x += vector.x + (noise(amp*0.001)-0.5)
      this.y += vector.y + (noise(amp*0.001) -0.5)
    

      this.reiniciar()

  }
  
  
    
  this.estaFuera = function () {

      if (this.x < -width*1.4 / w || this.x > width*1.4 / w) {
          return true
      }
      if (this.y < -width*1.4 / 2 || this.y > width*1.4 / 2) {
          return true
      }
      return false
  }
  this.reiniciar = function () {
      if (this.estaFuera()) {
          let i = stella.indexOf(this)
          stella.splice(i, 1)
          stella.push(new Stella())
      }
  }
}






function autoCorrelate(buffer) {
  var newBuffer = [];
  var nSamples = buffer.length;

  var autocorrelation = [];

  if (centerClip) {
    var cutoff = centerClip;
    for (var i = 0; i < buffer.length; i++) {
      var val = buffer[i];
      buffer[i] = Math.abs(val) > cutoff ? val : 0;
    }
  }

  for (var lag = 0; lag < nSamples; lag++){
    var sum = 0; 
    for (var index = 0; index < nSamples; index++){
      var indexLagged = index+lag;
      var sound1 = buffer[index];
      var sound2 = buffer[indexLagged % nSamples];
      var product = sound1 * sound2;
      sum += product;
    }

    newBuffer[lag] = sum/nSamples;
  }

  if (bNormalize){
    var biggestVal = 0;
    for (var index = 0; index < nSamples; index++){
      if (abs(newBuffer[index]) > biggestVal){
        biggestVal = abs(newBuffer[index]);
      }
    }
    if (biggestVal !== 0) {
      for (var index = 0; index < nSamples; index++){
        newBuffer[index] /= biggestVal;
      }
    }
  }

  return newBuffer;
}





