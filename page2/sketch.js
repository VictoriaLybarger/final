function setup() {
    createCanvas(1500, 1000);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(255, 215, 100, 50);
      strokeWeight(.2);
    } else {
      fill(265, 215, 200, 50);
      strokeWeight(.2);

    }
    ellipse(mouseX, mouseY, 300, 300);
  }
  