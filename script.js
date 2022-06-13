var c, ctx, 
rain;

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
    c = document.getElementsByClassName("card-bottom");
    ctx = c.getContex("2d");
    
    rain = new Rain(10,10,20,6)

    setInterval(loop,10)
}


// ich habe wirklich alles probiert, aber es ist mir nicht möglich den regen anzuzeigen obwohl ich die card eigentlich mit der class gepickt habe 
