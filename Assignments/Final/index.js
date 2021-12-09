
document.getElementById("tix").addEventListener("click", clickedTix);
var buyButton = document.getElementsByClassName("buy");
for(i=0; i < buyButton.length; i++){
  buyButton[i].addEventListener("click", clickedBuy);
  console.log(i);
}

function clickedTix(){
  window.location.href = "tour.html";
}

function clickedBuy(){
    window.location.href = "merch.html";
}

document.getElementById("newsDrop").addEventListener("click", closeMenu);
document.getElementById("followDrop").addEventListener("click", closeMenu);

function closeMenu(){
  document.getElementById("invCheck").checked ^= 1;
}
