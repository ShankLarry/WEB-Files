// RE order functions and add change to alt//


console.log("javascript working");
document.getElementById("throwBall").addEventListener("click", clickedThrow);
document.getElementById("petDog").addEventListener("click",clickedPet);

function clickedThrow(){
  document.getElementById("picChange").src = "../../assets/Lilly_Ball.jpg";
  document.getElementById("throwBall").style.color = '#FCD3DE';
}

function clickedPet(){
  document.getElementById("picChange").src = "../../assets/Lilly_Pet.jpg";
  document.getElementById("petDog").style.color = '#FCD3DE';
}
