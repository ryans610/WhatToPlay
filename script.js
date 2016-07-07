var list=document.getElementById("list");
var newGame=document.getElementById("new-game");

function addGameToList(game){
    var g=document.createElement("li");
    g.innerHTML=game;
    list.appendChild(g);
}

document.getElementById("add-game").addEventListener("click",function(){
    addGameToList(newGame.value);
    newGame.value="";
});

document.getElementById("go").addEventListener("click",function(){
    var l=list.getElementsByTagName("li");
    console.log(l);
    var r=Math.random()*l.length;
    r=Math.floor(r);
    alert(l[r].innerHTML);
});