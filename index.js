function randomImg(randomNumber) {
    var randomDiceImage = "dice" + randomNumber + ".png";
    var randomImageSource = "./images/" + randomDiceImage;
  
    return randomImageSource;
  }
  
  var image1 = document.querySelector(".img1");
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  image1.setAttribute("src", randomImg(randomNumber1));
  
  var image2 = document.querySelector(".img2");
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  image2.setAttribute("src", randomImg(randomNumber2));
  
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !!!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins !!!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!!!";
  }  