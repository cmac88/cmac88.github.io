import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public skillsList = [];
  public Object;
  constructor() { }

  ngOnInit() {
    this.Object = Object;
    this.skillsList = [
      { "Languages" : [
        "Java", "Python", "JavaScript"
      ]},
      { "Frameworks" : [
        "Spring", "Django", "Flask", "Angular", "Express", "Node.js"
      ]},
      { "Databases" : [
        "MySQL", "SQLite", "NoSQL : MongoDB, Mongoose.js"
      ]},
      { "Front-End" : [
        "HTML", "CSS", "SASS", "JQuery"
      ]},
      { "Methodologies" : [
        "Object-oriented programming",
        "MVC",
        "RESTful Architecture"
      ]}
    ]










    var canvas = document.querySelector("canvas");
    var c = canvas.getContext("2d");
    var h = window.innerHeight;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/3;
    var mouse = {
      "x": undefined,
      "y": undefined
    };
    var maxRadius = 30;

    canvas.addEventListener("mousemove", 
      function(event){
        mouse.x = event.x;
        mouse.y = event.y;
      }); 
    window.addEventListener("resize", 
    function(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight/3;
      init();
    })

    class Circle{
      
      public x;
      public y;
      public dy;
      public dx;
      public radius;
      public color;
      public minRadius;

      constructor(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = this.getColor();
      }
   
      getColor(){
        // var arr = ["#8DDDF7", "#B1A7F2", "#B1A7F2", "#E9A1F7", "#AC77E4"];

        var arr = ["#69abd1", "#55C2F5", "#2591DB", "#B1A7F2", "#C1E3F5"];

        var num = Math.floor(Math.random() * (arr.length));
        return arr[num];
      }
      draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.strokeStyle = this.color;
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
      }
      update(){
        mouse.x = canvas.width / 2;
        mouse.y = canvas.height / 2;
        if( this.x + this.radius > innerWidth || this.x - this.radius < 0){
          this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight/3 || this.y - this.radius < 0){
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        // this.x > canvas.width / 2 - 200 && this.x < canvas.width / 2 + 200 
        // mouse.x - this.x < 50 && mouse.x - this.x > -50
        // interactivity 
        if(this.x > canvas.width / 2 - 200 && this.x < canvas.width / 2 + 200 && mouse.y - this.y < 40 && mouse.y - this.y > -40){
          if(this.radius < maxRadius){
            this.radius += 1;
          }
        } else if (this.radius > this.minRadius){
          this.radius -= 1;
        }
        
        this.draw();
      }
    }
    var circleArray = [];
    function init(){
        circleArray = [];
        var num = 0;
        if(innerWidth < 500){
          num = 500;
        }else{
          num = 900;
        }
        console.log(num);
        for (let index = 0; index < num; index++) {
          var radius = Math.random() * 3 + 1;
          let x = Math.random() * (innerWidth - radius * 2) + radius;
          let y = Math.random() * (innerHeight/3 - radius * 2) + radius;
          let dx = (Math.random() - 0.5);
          let dy = (Math.random() - 0.5);
          
          circleArray.push(new Circle(x, y, dx, dy, radius));
          
        }
    }
    function animate(){
      //requestAnimationFrame(animate);
      c.clearRect(0, 0, innerWidth, innerHeight);
      for(var i = 0; i < circleArray.length; i ++){
        circleArray[i].update();
      }
    }
    
    setInterval(() => animate(), 60);
    init();
    
   
  }
  scrollToElement(id){
    document.getElementById(id).scrollIntoView({behavior: 'smooth' , block: 'start', inline: 'nearest'});
  }

}
