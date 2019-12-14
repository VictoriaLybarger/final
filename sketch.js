  function setup() {
    smooth();
    createCanvas(1500, 770, WEBGL);
    // Make a <p> element and put it behind the canvas
    let p = createP('My first web art show');
    p.center();
    p.style('font-size', '25px');
    p.style('text-align', 'center');
    p.style('z-index', '-9999');
  }
  
  function draw() {
    background(250, 215, 150);
    fill(180, 136, 47);

    // OPTION ONE: ADD A POINTLIGHT
    pointLight(255, 255, 255, 50, -100, 150); 

    // OPTION TWO: CHANGE OVER TIME
    fill(Math.random() * 180, Math.random() * 136, Math.random() * 47); 

    // OPTION THREE: CHANGE THE CANVAS BACKGROUND (SEE main.css FILE)
    
    noStroke();
    sphere(100);
    erase();
    rotateY(frameCount * 0.02);
    translate(0, 0, 125);
    torus(65, 30);
    noErase();
  }
