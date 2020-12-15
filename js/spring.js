            var obj1;
            obj1 = document.getElementById("img4");
            var theNum = 1;
            let arr = ["../images/photoSpring", "../images/photoSpring2", "../images/photoSpring3", "../images/photoSpring4"];
            function myFOO() {
            if(theNum == arr.length){theNum = 0;}
            obj1.src=arr[theNum]+'.jpg';
            theNum++;
            }
            var obj2;
            obj2 = document.getElementById('img2.1');
            obj2.onmouseover = function(){ 
                this.src = '../images/doctor_who2.jpg';
            }
            obj2.onmouseout = function(){ 
                this.src = '../images/doctor_who.jpg';
            }
            var obj3;
            obj3 = document.getElementById('img2.2');
            obj3.onmouseover = function(){ 
                this.src = '../images/The-Fault-in-Our-Stars2.jpg';
            }
            obj3.onmouseout = function(){ 
                this.src = '../images/The-Fault-in-Our-Stars.jpg';
            }
            var obj4;
            obj4 = document.getElementById('img2.3');
            obj4.onmouseover = function(){ 
                this.src = '../images/lady_bird2.jpg';
            }
            obj4.onmouseout = function(){ 
                this.src = '../images/lady_bird.jpg';
            }
            let snowflakes = []; // array to hold snowflake objects

            function setup() {
                createCanvas(windowWidth, windowHeight);
                stroke(255, 150, 232);
            }
            
            function draw() {
              clear();
              let t = frameCount / 60; // update time
            
              // create a random number of snowflakes each frame
              for (let i = 0; i < random(5); i++) {
                snowflakes.push(new snowflake()); // append snowflake object
              }
            
              // loop through snowflakes with a for..of loop
              for (let flake of snowflakes) {
                flake.update(t); // update snowflake position
                flake.display(); // draw snowflake
              }
            }
            
            // snowflake class
            function snowflake() {
              // initialize coordinates
              this.posX = 0;
              this.posY = random(-50, 0);
              this.initialangle = random(0, 2 * PI);
              this.size = random(2, 5);
            
              // radius of snowflake spiral
              // chosen so the snowflakes are uniformly spread out in area
              this.radius = sqrt(random(pow(width / 2, 2)));
            
              this.update = function(time) {
                // x position follows a circle
                let w = 0.2; // angular speed
                let angle = w * time + this.initialangle;
                this.posX = width / 2 + this.radius * sin(angle);
            
                // different size snowflakes fall at slightly different y speeds
                this.posY += pow(this.size, 0.5);
            
                // delete snowflake if past end of screen
                if (this.posY > height) {
                  let index = snowflakes.indexOf(this);
                  snowflakes.splice(index, 1);
                }
              };
            
              this.display = function() {
                ellipse(this.posX, this.posY, this.size, 3, 35);
                fill(255, 201, 243);
              };
            }
            