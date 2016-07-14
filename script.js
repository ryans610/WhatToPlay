var list=document.getElementById("list");
var newGame=document.getElementById("new-game");

function addGameToList(game){
    var g=document.createElement("li");
    g.innerHTML=game;
    list.appendChild(g);
}

function loadData(){
    var data=localStorage.gameList;
    if(data!=undefined){
        data.split(",").map(addGameToList);
    }
}

function saveData(){
    var data=Array.prototype.slice.call(list.getElementsByTagName("li")).map(function(game){
        return game.innerText;
    }).join(",");
    console.log(data);
    localStorage.gameList=data;
}

document.getElementById("add-game").addEventListener("click",function(){
    addGameToList(newGame.value);
    newGame.value="";
    saveData();
});

document.getElementById("go").addEventListener("click",function(){
    var l=list.getElementsByTagName("li");
    console.log(l);
    var r=Math.random()*l.length;
    r=Math.floor(r);
    alert(l[r].innerHTML);
});

loadData();
