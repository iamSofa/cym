            var obj1;
            obj1 = document.getElementById("img4");
            var theNum = 1;
            let arr = ["../images/mem1", "../images/mem2", "../images/mem3"];
            function myFOO() {
            if(theNum == arr.length){theNum = 0;}
            obj1.src=arr[theNum]+'.jpg';
            theNum++;
            }
            var obj2;
            obj2 = document.getElementById('img2.1');
            obj2.onmouseover = function(){ 
                this.src = '../images/TwinPeaks2.jpg';
            }
            obj2.onmouseout = function(){ 
                this.src = '../images/TwinPeaks.jpg';
            }
            var obj3;
            obj3 = document.getElementById('img2.2');
            obj3.onmouseover = function(){ 
                this.src = '../images/whiplash2.jpg';
            }
            obj3.onmouseout = function(){ 
                this.src = '../images/whiplash.jpg';
            }
            var obj4;
            obj4 = document.getElementById('img2.3');
            obj4.onmouseover = function(){ 
                this.src = '../images/beasts2.jpg';
            }
            obj4.onmouseout = function(){ 
                this.src = '../images/beasts.jpg';
            }
            let snowflakes = []; // array to hold snowflake objects

            function setup() {
                createCanvas(windowWidth, windowHeight);
                noStroke();
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
              
              this.size = random(1, 1.5);
            
              // radius of snowflake spiral
              // chosen so the snowflakes are uniformly spread out in area
              this.radius = sqrt(random(pow(width + 900, 2)));
            
              this.update = function(time) {

                this.posX =this.radius;
            
                // different size snowflakes fall at slightly different y speeds
                this.posY += pow(this.size + 5, 0.5);
            
                // delete snowflake if past end of screen
                if (this.posY > height) {
                  let index = snowflakes.indexOf(this);
                  snowflakes.splice(index, 1);
                }
              };
            
              this.display = function() {
                rect(this.posX, this.posY, this.size, 5);
                fill('rgba(0, 126, 143, 0.6)');
              };
            }
            