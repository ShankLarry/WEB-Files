// Javascript for Still Problems Band Home Page
//Author: Larry Ditton


document.getElementById("tix").addEventListener("click", clickedTix);

var buyButton = document.getElementsByClassName("buy");
for(i=0; i < buyButton.length; i++){
  buyButton[i].addEventListener("click", clickedBuy);
}

function clickedTix(){
  window.location.href = "tour.html";
}

function clickedBuy(){
    window.location.href = "merch.html";
}

// Close the nav menu for back button functionality:
document.getElementById("newsDrop").addEventListener("click", closeMenu);
document.getElementById("followDrop").addEventListener("click", closeMenu);
document.getElementById("tourDrop").addEventListener("click", closeMenu);
document.getElementById("merchDrop").addEventListener("click", closeMenu);


function closeMenu(){
  document.getElementById("invCheck").checked = false;
}
