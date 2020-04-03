function shf() {

  var randomnNumber1 = Math.random();
  randomnNumber1 = Math.floor(randomnNumber1 * 6 + 1);

  var imgsr1 = "images/dice" + randomnNumber1 + ".png";

  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", imgsr1);

  var randomnNumber2 = Math.random();
  randomnNumber2 = Math.floor(randomnNumber2 * 6 + 1);
  var imgsr2 = "images/dice" + randomnNumber2 + ".png";

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", imgsr2);
  
};

//document.querySelector("button").setAttribute("onclick",shf());
