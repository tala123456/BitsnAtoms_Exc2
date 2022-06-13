var c, ctx, rain;

class Rain{
    constructor(x,y, L, v){
        this.x=x;
        this.y=y;
        this.vy=v;
        this.l=l;
    }
    show(){
        ctx.beginPath();
        ctx.strokeStyle="white";
        ctx.moveTo(this.x, this.y);
        ctx.line(this.x, this.y + this.l);
        ctx.stroke;
    }
    fall(){
        this.y+=this.vy;

        if(this.y>c.height){
            this.x=Math.floor(Math.random()*c.width)+5;
            this.x=Math.floor(Math.random()*100)-100;
            this.l=Math.floor(Math.random()*30)+1; 
            this.v=Math.floor(Math.random()*12)+4;
            }

    }

}
function loop(){
    ctx.clearRect(0,0,c.width, c.height);
    rain.show();
    rain.fall();
}

function setup(){
    c = document.getElementbyId("card-bottom");
    ctx = c.getContex("2d");
    
    rain = new Rain(10,10,20,6)

    setInterval(loop,10)
}

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});