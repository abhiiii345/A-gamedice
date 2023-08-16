var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomdiceimage1 = "images/dice" + randomnumber1 + ".png"; // THIS IS IMP WE HAVE USED TO CONCATENATE THE STRING AS THE DDICE IMAGE IS IN INSIDE THE IMAGES FOLER SO THE FIRST STRING "IMAGES/DICE WILL GIVE IMAGES/DICE AND THERANDOM NUMBER WILL CONCATENATE WITH IT AND FORM S LET RANDOMNUMBER BR 2 SO IMAGES/DICE2 AND".PNG" WILL ADD EXTENSION IN WHCIH FORM WHICH HAVE IMAGE IF IN JPG USE JPG SO TOTAL CONCATIONATION BECOMES IMAGES/DICE2.PNG WHICH IS THE IMAGE SOURCE OF DICE IMAGE SO WE CAN CHANGE IT WITH ORIGNIAAL IMAGE OF DICE WITH SRC SET ATTRIBUTE

var leftdice = document.getElementsByClassName("img1")[0];
leftdice.setAttribute("src", randomdiceimage1);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomdiceimage2 = "images/dice" + randomnumber2 + ".png";

var rightdice = document.getElementsByClassName("img2")[0];
rightdice.setAttribute("src", randomdiceimage2);

if (randomdiceimage1 > randomdiceimage2) {
    document.querySelector("h1").textContent = "Player 1 wins";
}
else if (randomdiceimage1 < randomdiceimage2) {
    document.querySelector("h1").textContent = "player 2 wins";
}
else {
    document.querySelector("h1").textContent = "Draw";
}