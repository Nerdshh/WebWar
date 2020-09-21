// cards are chosen by number first (2 = 2, king = 13, etc.) then suit next
// clubs = 1, diamonds = 2, hearts = 3, spades = 4

// numbers 1 and 2 choose the 2 cards for the players
var randomNumber1 = Math.floor(Math.random() * 13 + 2);
var randomNumber2 = Math.floor(Math.random() * 13 + 2);
// numbers 3 and 4 choose the suits of those cards
var randomNumber3 = Math.floor(Math.random() * 4 + 1);
var randomNumber4 = Math.floor(Math.random() * 4 + 1);

// changes images of cards based on random cards chosen
document.querySelector(".img1").setAttribute("src", "images/" + randomNumber1 + "_of_" + randomNumber3 + ".png");
document.querySelector(".img2").setAttribute("src", "images/" + randomNumber2 + "_of_" + randomNumber4 + ".png");

// evaluates the winner and changes the h1
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}
