a = Math.floor(Math.random() * 6) + 1;
b = "images/dice" + a + ".png";
var image = document.querySelectorAll("img")[0];
image.setAttribute("src", b);



b2 = Math.floor(Math.random() * 6) + 1;
c = "images/dice" + b2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", c);

if (a>b2){
    document.querySelector(".container h1").innerHTML="⛳ Player 1 wins ";
}
else if(a<b2){ 
    document.querySelector(".container h1").innerHTML="Player 2 wins ⛳";
}
else{
    document.querySelector(".container h1").innerHTML="It's a DRAW";
}