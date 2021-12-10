// Tour.html specific JS
// Author: Larry Ditton

let dates = ["Mon, 17 Jan 22", "Wed, 26 Jan 22", "Sun, 6 Feb 22", "Fri, 11 Feb 22",
 "Tues, 22 Feb 22", "Fri, 25 Feb 22"];

let locations = ["London, UK", "Dallas, TX", "Boulder, CO", "Chicago, IL", "Lincoln, NE",
"St. Paul, MN"];

// Create table of tour dates and locations
for(i = 0; i< dates.length; i++){
  let li1 = document.createElement("li");
  li1.className = "tourList";
  let li2 = document.createElement("li");
  li2.className = "tourList";

// create buttons that let user go to ticketmaster
  let makeButton = document.createElement("button");
  makeButton.innerHTML = "Buy Tickets";
  makeButton.className = "tixButtons";
  document.getElementById('dateList').append(dates[i], li1);
  document.getElementById('locList').append(locations[i], li2);
  document.getElementById('ticketLink').append(makeButton);
}

var tixButton = document.getElementsByClassName("tixButtons");
for(i=0; i < tixButton.length; i++){
  tixButton[i].addEventListener("click", clickedTix);
}

function clickedTix(){
  window.location.href = "https://www.ticketmaster.com";
}

// Close the nav menu for back button functionality:
document.getElementById("newsDrop").addEventListener("click", closeMenu);
document.getElementById("followDrop").addEventListener("click", closeMenu);
document.getElementById("merchDrop").addEventListener("click", closeMenu);
document.getElementById("homeDrop").addEventListener("click", closeMenu);


function closeMenu(){
  document.getElementById("invCheck").checked = false;
}
