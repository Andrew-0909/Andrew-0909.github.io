let x, y; // Position of the ball
let xSpeed, ySpeed; // Speed of the ball
let r, g, b; // Color components
let diameter = 50; // Diameter of the ball

function setup() {
  createCanvas(800, 600);
  // Initialize the position randomly
  x = random(width);
  y = random(height);
  // Initialize the speed randomly
  xSpeed = random(2, 5);
  ySpeed = random(2, 5);
  // Initialize color randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(220);
  
  // Change the position of the ball based on speed
  x += xSpeed;
  y += ySpeed;
  
  // If the ball hits the edge, reverse its speed
  if (x > width - diameter / 2 || x < diameter / 2) {
    xSpeed *= -1;
  }
  if (y > height - diameter / 2 || y < diameter / 2) {
    ySpeed *= -1;
  }
  
  // Change color over time
  r = (r + 1) % 256;
  g = (g + 1) % 256;
  b = (b + 1) % 256;
  
  // Draw the ball
  fill(r, g, b);
  ellipse(x, y, diameter);
}