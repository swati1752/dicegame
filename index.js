
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png" ;
var randomImageSrc = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png" ;
var randomImageSrc2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSrc2);

text = document.querySelector("h1");
if(randomNumber1>randomNumber2)
text.innerHTML="Player 1 WON";
else
text.innerHTML="Player 2 WON";  
