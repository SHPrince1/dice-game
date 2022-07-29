var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

// dice two

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomDiceImages = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImages;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player  1 won";
}else if ( randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML="Draw"
}else{
    document.querySelector("h1").innerHTML="Player 2 won";
}
