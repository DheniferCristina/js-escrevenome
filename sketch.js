function setup() {
  
    createCanvas(500, 400);
    background("rgb(253,234,238)");
    
  }
    
    function draw() {
    
    stroke("#A973B3");
    fill("rgb(238,205,238)")
  
      
      
      //console.log(mouseIsPressed)
      
      
    if (mouseIsPressed) {
      rect(mouseX,mouseY, 20, 35);
    }
  }