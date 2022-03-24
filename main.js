strokeCap(PROJECT);
colorMode(HSB);
var numArcs = 56;
draw = function() {
  background(1);
  //gives the shadow
  stroke(frameCount * 0.5 % 255, 255, 255, 80);
  strokeWeight(3);
  //draws the shadow
  for(var i = 2;i < numArcs; i+=10) {
    arc(width / 2, height / 3, (numArcs + 1) * 15 + -i * 15, (numArcs + i*34 + i * ( i * ( i * 10 ) ) ) * (i * 5) + -i * 15, frameCount / 5 * i % 360 - 180, frameCount / 2 * i % 360);
  }
  strokeWeight(3);
  // changes the color
  stroke(frameCount * 0.2 % 255, 255, 255);
  noFill();
  //draws the main arcs.
  for(var i = 20;i < numArcs;i+=0.55) {
    arc(width / 2, height / 2, (numArcs + 1) * 15 + -i * 15, (numArcs + 1) * 15 + -i * 15, frameCount / 2 * i % 360, frameCount / 2 * i % 360 + 180);
  }
};
