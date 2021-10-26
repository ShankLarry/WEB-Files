let mornings = ["Light a Candle", "Get some exercise", "Call a friend",
  "Watch something funny", "Get some exercise", "Check your list of goals",
  "Play a game", "Take a nap", "Go to a party", "Review your week", "Sleep in",
  "Watch something you enjoy", "Go for a walk", "Review week ahead"];

let afternoons = ["Sit quietly for 5 minutes", "Meditate", "Go for a walk",
  "Do some laundry", "Journal", "Make a plan with a friend",
  "List 3 goals for the week"];

let evenings = ["Eat a healthy snack", "Go to bed early", "Stretch",
"Think of three things you're grateful for", "Consider a fun future plan",
"Listen to music", "Make a comfort meal", "Call your family", "Help a stranger",
"Take an evening shower", "Eat a healthy lunch",
"Put away your phone for an hour", "Eat a healthy meal",
"Lay out clothes for tomorrow"];

let tags = ["first", "second", "third", "fourth", "fifth"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday"];
let images = ["cookie_love.jpg", "hike.jpg", "meditate.jpg", "sleep.jpg",
"tea.jpg", "yoga.jpg", "weights.jpg"];
let idea = 0;
let aftIdea = 0;
let numDays = 0;
let thisDay = "Sunday";

for(i=0; i<days.length; i++){
  document.getElementById(days[i]).addEventListener("click", dayClicked);
}

document.getElementById(thisDay).style.backgroundColor  = "#6BA5C7";


function dayClicked(){
  document.getElementById("weekday").innerHTML = this.id;

  // Change background color of currently clicked button and
  // reset previously clicked button color:
  document.getElementById(thisDay).style.backgroundColor  = "#98C1D9";
  document.getElementById(this.id).style.backgroundColor  = "#6BA5C7";
  thisDay = this.id;

  //Change the picture when button clicked:
  document.getElementById("imagery").innerHTML =
    "<img alt='Drawing of self-care activity' src = 'assets/" + images[numDays] +"'>";
  if(numDays>=6){
    numDays=0;
  }
  else{
    numDays++;
  }

  //Change the activities for Morning, Afternoon, and Evening when button clicked
  for(i=0; i<2; i++){
    document.getElementById(tags[i]).innerHTML = mornings[idea];
    document.getElementById("third").innerHTML = afternoons[aftIdea];
    document.getElementById(tags[i+3]).innerHTML = evenings[idea];
    if(idea>=mornings.length-1){
      idea=0;
    }
    else{
      idea++;
    }
    if(aftIdea>=afternoons.length-1){
      aftIdea=0;
    }
    else{
      aftIdea++;
    }
  }
}
