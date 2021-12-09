// Tour.html specific JS

let dates = ["Mon, 17 Jan 22", "Wed, 26 Jan 22", "Sun, 6 Feb 22", "Fri, 11 Feb 22",
 "Tues, 22 Feb 22", "Fri, 25 Feb 22"];

let locations = ["London, UK", "Dallas, TX", "Boulder, CO", "Chicago, IL", "Lincoln, NE",
"St. Paul, MN"];

for(i = 0; i< dates.length; i++){
  let li1 = document.createElement("li");
  li1.className = "tourList";
  let li2 = document.createElement("li");
  li2.className = "tourList";
  // let li3 = document.createElement("li");
  // li3.className = "buttList";

  let makeButton = document.createElement("button");
  makeButton.innerHTML = "Buy Tickets";
  makeButton.className = "tixButtons";
  document.getElementById('dateList').append(dates[i], li1);
  document.getElementById('locList').append(locations[i], li2);
  document.getElementById('ticketLink').append(makeButton);
}
