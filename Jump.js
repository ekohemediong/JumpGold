window.onload=()=>{
let canvas =document.getElementById("canvas");
let board=canvas.getContext("2d");
let x=0,y=150;
let obX=600,obY=200;
let dir=0;
let response=0;
let countDown=0;
let suspend,score=0;
let year=new Date().getFullYear();
document.getElementById("year").innerHTML=year;
var plan=0;

var restart=()=>{
   document.getElementById("rBlock").style.display="none";     
  document.getElementById("alertScreen").style.display="none";
    score=00-21;
    response=0;
    draw();
    }
document.getElementById("restart").onclick=restart;


window.ontouchstart=()=>{dir=1;x+=10}
window.ontouchend=()=>{ x-=10}


board.clearRect(0,0,600,400);
    board.beginPath();
    board.rect(x,y,100,100);
    board.fillStyle="Gold";
    board.fill();
     
    board.beginPath();
    board.rect(0,250,600,50);
    board.fillStyle="white";
    board.fill();
    
    board.beginPath();
    board.rect(obX,210,20,40);
    board.fillStyle="silver";
    board.fill();

var draw=()=>{
    board.clearRect(0,0,600,400);
    board.beginPath();
    board.rect(x,y,100,100);
    board.fillStyle="Gold";
    board.fill();
     
    board.beginPath();
    board.rect(0,250,600,50);
    board.fillStyle="white";
    board.fill();
    
    board.beginPath();
    board.rect(obX,210,20,40);
    board.fillStyle="silver";
    board.fill();
    
    obX-=5;
     if(obX >=x+60 &&obX<=100 && dir==0){
      obX+=5;
        response=1;
  document.getElementById("rBlock").style.display="block";      document.getElementById("alertScreen").style.display="block"; document.getElementById("Alert").innerHTML="FAIL!";

        
    }
    if(obX==0){
        obX=600;
    }
    
    if(dir==1){
     y-=15;
     suspend=setTimeout(()=>{y+=15;dir=0},290);  
        
    }
    
    
score++;
    document.getElementById("score").innerHTML=`Score: ${score}`;
    

    if(response !=1){
    
    window.requestAnimationFrame(draw);
    }
}


let count =setInterval(()=>{
document.getElementById("alertScreen").style.display="block"; document.getElementById("Alert").innerHTML=countDown;
    countDown++;
    if(countDown >=5){
     document.getElementById("alertScreen").style.display="none";
        clearInterval(count);
    }
},600);

 setTimeout(()=>{
   if(response !=1){
    draw();
    }
    },3050);
    
 
}