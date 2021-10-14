const quotes = ['"The point is, you are alive when they start to eat you. So you know, try to show a little respect." -Dr. Alan Grant',
'"We spared no expense." -John Hammond',
'"Actually they can\'t breed in the wild. Population control is one of our security precautions. There\'s no unauthorized breeding in Jurassic Park." -Dr. Henry Wu',
'"No. I\'m, I\'m simply saying that life, uh... finds a way." -Ian Malcom',
'"That means they only eat vegetables, but for you, I think they\'d make an exception." -Tim',
'"Remind me to thank John for a lovely weekend." -Ian Malcom',
'"Don\'t move! He can\'t see us if we don\'t move." -Dr. Alan Grant',
'"God creates dinosaur. God destroys dinosaur. God creates man. Man destroys God. Man creates dinosaur." -Dr. Ian Malcom',
'"We\'ve made living biological attractions so astounding that they\'ll capture the imagination of the entire planet." -John Hammond'];
let quotecount = 0;


document.getElementById("newQuote").addEventListener("click", buttonClicked);

function buttonClicked(){

  console.log(quotes[quotecount]);
  document.getElementById("qtext").innerHTML = quotes[quotecount];
  console.log(quotecount);
  if(quotecount>=6){
    quotecount=0;
  }
  else{
    quotecount += 1;
  }
}
