let a;
let chance=true;
function snakewatergun()
{
  var alphabet="swg";
  a= alphabet[Math.floor(Math.random()*alphabet.length)];
  return a;
}
console.log(snakewatergun());
while(chance){
let input=prompt("Enter S for snake or W for water or G for gun");
if(input==a)
{
  alert("You guessed the right letter")
}
else
{
  alert("Your guess is incorrect !")
  
}
  chance=confirm("Do u want to play again?")
}
