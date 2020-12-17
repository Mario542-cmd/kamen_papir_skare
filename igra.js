var userChoice;
var computerChoice;
var result;
var ranNum;

const displayResult = document.getElementById('rezultat');
const computerPick = document.getElementById('računaloIzbor');
const userPick = document.getElementById('korisnikIzbor');
const resetBtn = document.getElementById('ponovi');
const possibleChoices = document.querySelectorAll('.choices');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e =>
{
  userChoice = e.target.id;
  ranNum = Math.floor(Math.random() * 3) + 1;
  generateCompChoice();
  compareChoices();
  computerPick.innerHTML = computerChoice;
  userPick.innerHTML = userChoice;
  displayResult.innerHTML = result;
}));

function generateCompChoice()
{
  if(ranNum == 1)
  {
    computerChoice = 'kamen';
  }
  else if(ranNum == 2)
  {
    computerChoice = 'papir';
  }
  else if(ranNum == 3)
  {
    computerChoice = 'škare';
  }
}
function reset(){
  computerChoice = '?';
  computerPick.innerHTML = computerChoice;
  ranNum = 0;
  userChoice = '?';
  userPick.innerHTML = userChoice;
  displayResult.innerHTML = '?';
}

function compareChoices(){
  if(userChoice == computerChoice)
  {
    result = "Neriješeno";
  }
  else if (userChoice == 'škare' && computerChoice == 'papir')
  {
    result = "Tvoja pobjeda";
  }
   else if (userChoice == 'papir' && computerChoice == 'kamen')
  {
    result = "Tvoja pobjeda";
  }
   else if (userChoice == 'kamen' && computerChoice == 'škare')
  {
    result = "Tvoja pobjeda";
  }
   else if (userChoice == 'kamen' && computerChoice == 'papir')
  {
    result = "Pobjeda računala";
  }
   else if (userChoice == 'papir' && computerChoice == 'škare')
  {
    result = "Pobjeda računala";
  }
   else if (userChoice == 'škare' && computerChoice == 'kamen')
  {
    result = "Pobjeda računala";
  }
}