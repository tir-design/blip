  let crescentX = -150;
  let crescentY = -150;
  let xspeed = 0.0625
  let yspeed = 0.0625
  
function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //night sky
  background(30);
  translate (200,200)

  //moon
  push()
  fill('white')
  noStroke()
  circle(-150, -150, 70)
  pop()
  
  //draw moon shadow
  fill(30)
  noStroke()
  circle(crescentX, crescentY, 75)

  //makes moon shadow move(asked chatgpt)
  crescentX += xspeed;
  crescentY += yspeed;
  
  // limits for how far the moon's shadow travels 
  let xmin = -150;
  let xmax = -90;
  let ymin = -150;
  let ymax = -90;
  
  //asked chatgpt for the moon's shadow's limits
 if (crescentX > xmax || crescentX < xmin) {
    xspeed = -xspeed;
  }
  if (crescentY > ymax || crescentY < ymin) {
    yspeed = -yspeed;
  }
  
  
  //girls before transformation (used chatgpt)
  textSize (100)
  let x = map(mouseX, 0, 100, -200, 100, true)
  let girlsText = "👯‍♀️"; 
    
//mermaid transformation when its a full moon
    //spashes go around randomly
  let waterX = random (-200,200)
  let waterY = random(-200,200)
  
  //when the shadow is gone: girls turn into mermaids
  if (crescentY > -100) {  
    girlsText = "🧜‍🧜‍♀️"; 
    push()
    textSize(30)
    text ('💦', waterX, waterY)  // splashes
    pop()
  }
  //girls only swim horizontally
    text(girlsText, x, 100);

  //ocean
  fill('lightblue')
  noStroke()
  rect(-200, 80, 400, 220)
  
 // time shown (from p5js "hour" reference page https://p5js.org/reference/p5/hour/)
  push()
  fill('white')
  textSize(15)
  textAlign (CENTER)
    let h = hour();
    let m = minute();
    let s = second();
   text(`⏰ ${h}:${m}:${s}`, 0, -100, 30);
  pop()
  
  //stars
  fill('white');
  noStroke();
    let starX = random(-200, 200);
    let starY = random(-200, 50);
  
   //stars appear every 30 seconds (from ChatGPT)
  if ( s >= "30" && s <= "59"){circle(starX, starY,random(1,3))}

}
  
