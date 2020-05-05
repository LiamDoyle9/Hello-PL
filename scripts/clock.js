function setup() {
  // put setup code here
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  background(100);
  translate(300,300);
  rotate(-90);
  let hourDisplay = hour();
  let minuteDisplay = minute();
  let secondDisplay = second();

  fill(219,220,255);
  noStroke();
  ellipse (0,0,10,10);

  noFill();

  let fiveMinuteMarker = (secondDisplay, 0, 12, 0, 360);
  stroke (219,220,255);


  let endSecond = map (secondDisplay, 0, 60, 0, 360);
  stroke(219,220,255);
  //arc(x, y, width, number of radial sectors to draw)
  arc(0,0, 480, 480, 0, endSecond);

  push();
  rotate(endSecond);
  stroke(219,220,255);
  line(0,0,200,0);
  pop();


  let endMinute = map (minuteDisplay, 0, 60, 0, 360);

  arc(0,0, 460, 460, 0, endMinute);
  push();
  rotate(endMinute);
  strokeWeight(3);
  line(0,0,200,0);
  pop();


  let endHour = map (hourDisplay % 12, 0, 12, 0, 360);

  arc(0, 0, 440, 440, 0, endHour);

  push();
  rotate(endHour);
  strokeWeight(3);
  line(0,0,150,0);
  pop();
}
