            var obj1;
            obj1 = document.getElementById("img4");
            var theNum = 1;
            let arr = ["../images/photoSummer", "../images/photoSummer2", "../images/photoSummer3", "../images/photoSummer4"];
            function myFOO() {
            if(theNum == arr.length){theNum = 0;}
            obj1.src=arr[theNum]+'.jpg';
            theNum++;
            }
            var obj2;
            obj2 = document.getElementById('img2.1');
            obj2.onmouseover = function(){ 
                this.src = '../images/green_book2.jpg';
            }
            obj2.onmouseout = function(){ 
                this.src = '../images/green_book.jpg';
            }
            var obj3;
            obj3 = document.getElementById('img2.2');
            obj3.onmouseover = function(){ 
                this.src = '../images/call_me_by_your_name2.jpg';
            }
            obj3.onmouseout = function(){ 
                this.src = '../images/call_me_by_your_name.jpg';
            }
            var obj4;
            obj4 = document.getElementById('img2.3');
            obj4.onmouseover = function(){ 
                this.src = '../images/summer_hot2.jpg';
            }
            obj4.onmouseout = function(){ 
                this.src = '../images/summer_hot.jpg';
            }
            class Particle {
                // setting the co-ordinates, radius and the
                // speed of a particle in both the co-ordinates axes.
                  constructor(){
                    this.x = random(0,width);
                    this.y = random(0,height);
                    this.r = random(220);
                    this.xSpeed = random(-0.4,0.4);
                    this.ySpeed = random(-0.4,0.4);
                  }
                
                // creation of a particle.
                  createParticle() {
                    noStroke();
                    fill('rgba(0, 255, 240, 0.15)');
                    circle(this.x,this.y,this.r);
                  }
                 moveParticle() {
                    if(this.x < 0 || this.x > width)
                      this.xSpeed*=-1;
                    if(this.y < 0 || this.y > height)
                      this.ySpeed*=-1;
                    this.x+=this.xSpeed;
                    this.y+=this.ySpeed;
                  }
                }
                
                // an array to add multiple particles
                let particles = [];
                
                function setup() {
                    createCanvas(windowWidth, windowHeight);
                  for(let i = 0;i<width/65;i++){
                    particles.push(new Particle());
                  }
                }
                
                function draw() {
                  clear();
                  for(let i = 0;i<particles.length;i++) {
                    particles[i].createParticle();
                    particles[i].moveParticle();
                  }
                }
                