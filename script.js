var timer=60;
var score=0;
var hitrn;
//event bubble element ke parent pe we can add event listener as it checks for that element first then it checks for its parent if not then it checks for its parents parent and so on
function increaseScore(){
    score=score+10;
    document.querySelector("#scoreval").textContent=score;
}

function getnewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makebubble(){
    var clutter="";
for(var i=1; i<=147;i++){
    var rn=Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}


function runtimer(){
    var timerint=setInterval(function (){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER:(</h1>`;
        }
    },1000);//setInterval chalega to andar ka function ie runtimer chalega
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum=(Number(dets.target.textContent));
    if(clickednum===hitrn)
        {
            increaseScore();
            makebubble();
            getnewHit();
        }
});

runtimer();
makebubble();
getnewHit();
