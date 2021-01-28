var randomNumber1;
randomNumber1 = 1+Math.floor(Math.random()* 6);
randomNumber2 = 1+Math.floor(Math.random()* 6);
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(randomNumber2 > randomNumber1){
    document.getElementById("winner").innerText = "Player2";
}
else if(randomNumber2 == randomNumber1){
    document.getElementById("winner").innerText = "Draw";
}
else{
    document.getElementById("winner").innerText = "Player1";
}