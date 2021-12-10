//merch.html specific JS
//Author: Larry Ditton


var albumCount = 0;
var shirtCount = 0;
var totalNum = 0;
var buyButton = document.getElementsByClassName("buy");
for(i=0; i < buyButton.length; i++){
  buyButton[i].addEventListener("click", clickedBuy);
  buyButton[i].onclick = function(){
    albumCount++;
  }
}

var buyShirt = document.getElementsByClassName("shirtBuy");
for(i=0; i < buyShirt.length; i++){
  buyShirt[i].addEventListener("click", clickedBuy);
  buyShirt[i].onclick = function(){
    shirtCount++;
  }
}


function cartNum(){
  totalNum++;
  document.getElementById("numItems").innerHTML = totalNum;
}


function clickedBuy(){
  cartNum();
}


document.getElementById("cartArea").addEventListener("click", checkout);


function checkout(){
  var albumPrice = 10;
  var shirtPrice = 15;
  var itemsTxt = "";
  var priceTxt = "";
  console.log("test");
  console.log(albumCount);
  var price = albumCount*albumPrice + shirtCount*shirtPrice;
  console.log(price);

  if (albumCount > 0 && shirtCount > 0){
    itemsTxt = "You purchased " + albumCount + "x albums and " + shirtCount + "x shirts";
    priceTxt = "Your total is $" + price +".00";
  }

  if (albumCount == 0 && shirtCount == 0){
    itemsTxt = "You haven't added anything to your Cart!";
  }

  if (albumCount == 0 && shirtCount >0){
    itemsTxt = "You purchased " + shirtCount + "x shirts.";
    priceTxt = "Your total is $" + price + ".00";
  }

  if (albumCount > 0 && shirtCount == 0){
    itemsTxt = "You purchased " + albumCount + "x albums.";
    priceTxt = "Your total is $" + price +".00";
  }

  var buy = confirm(itemsTxt + "\n" + priceTxt);

  if (buy==true){
    totalNum=0;
    albumCount=0;
    shirtCount=0;
    var check = "&#10003;"
    document.getElementById("numItems").innerHTML = check;
  }
  else{
    totalNum=0;
    albumCount=0;
    shirtCount=0;
    document.getElementById("numItems").innerHTML = totalNum;
  }
}

// Close the nav menu for back button functionality:
document.getElementById("newsDrop").addEventListener("click", closeMenu);
document.getElementById("followDrop").addEventListener("click", closeMenu);
document.getElementById("tourDrop").addEventListener("click", closeMenu);
document.getElementById("homeDrop").addEventListener("click", closeMenu);

function closeMenu(){
  document.getElementById("invCheck").checked = false;
}
