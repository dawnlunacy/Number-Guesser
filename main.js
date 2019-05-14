var randomNum=0;
var minInput=document.querySelector('.min-input');
var maxInput=document.querySelector('.max-input');
var updateBtn=document.querySelector('.update-btn');
var nameOneInput=document.querySelector('.name-1-input');
var nameTwoInput=document.querySelector('.name-2-input');
var guessOneInput=document.querySelector('.guess-1-input');
var guessTwoInput=document.querySelector('.guess-2-input');
var clearBtn=document.querySelector('.clear-btn');
var minNum=document.querySelector('.min-num');
var maxNum=document.querySelector('.max-num');
var resetBtn=document.querySelector('.reset-btn');
var submitBtn=document.querySelector('.submit-btn');
var errorChalOne=document.querySelector('.error-p-chal-1');
var errorChalTwo=document.querySelector('.error-p-chal-2');
var cardField=document.querySelector('.card-field');
var winner;
var counter = 0;



clearBtn.addEventListener('click', clearFields);
window.addEventListener('load', disableToggle1);
window.addEventListener('load', disableToggle2);
minInput.addEventListener('keyup', disableToggle1);
nameOneInput.addEventListener('keyup', disableToggle2);
submitBtn.addEventListener('click', increment);
submitBtn.addEventListener('click', playerGuesses);
submitBtn.addEventListener('click', nameUpdate);
submitBtn.addEventListener('click', guessUpdate);
submitBtn.addEventListener('click', outsideRanges);
submitBtn.addEventListener('click', emptyNames);
submitBtn.addEventListener('click', emptyGuesses);
updateBtn.addEventListener('click',randomNumber);
updateBtn.addEventListener('click',rangeUpdate);
updateBtn.addEventListener('click', errorRange);
updateBtn.addEventListener('click', resetCounter);

cardField.addEventListener('click', function (e) {
  if (e.target.className === 'x-btn') {
    e.target.parentElement.parentElement.remove();
  }
});

// updateBtn.addEventListener('click', emptyRange);

// minInput.addEventListener('keydown', noE);


function clearFields () {
  minInput.value = '';
  maxInput.value = '';
  nameOneInput.value = '';
  nameTwoInput.value = '';
  guessOneInput.value = '';
  guessTwoInput.value = '';
};

function genNum(min,max){
  min2=Math.ceil(min);
  max2=Math.floor(max);
  return Math.floor(Math.random()*(max2-min2+1))+min2;
};

function randomNumber(e){
  e.preventDefault();
  var min1=minInput.value;
  var max1=maxInput.value;
  randomNum=genNum(min1,max1);
  console.log(randomNum)
}

function disableToggle1 (){
  if(minInput.value === '' && maxInput.value === ''){
    updateBtn.disabled == true;
    updateBtn.classList.add('disabled');
  }else{
    updateBtn.disabled == false;
    updateBtn.classList.remove('disabled');
  }
}

function disableToggle2 (){
  if(nameOneInput.value === '' && nameTwoInput.value === ''){
    resetBtn.disabled == true;
    clearBtn.disabled == true;
    resetBtn.classList.add('disabled');
    clearBtn.classList.add('disabled');
  }else{
    resetBtn.disabled == false;
    clearBtn.disabled == false;
    resetBtn.classList.remove('disabled');
    clearBtn.classList.remove('disabled');
  }
}

function playerGuesses (){
  var boomMsgOne=document.querySelector('.boom-msg-1');
  var boomMsgTwo=document.querySelector('.boom-msg-2');
  guessMessageHelper(parseInt(guessOneInput.value), boomMsgOne);
  guessMessageHelper(parseInt(guessTwoInput.value), boomMsgTwo);
}

function getWinner(message) {
  if(message === boomMsgOne) {
    return nameOneInput.value
  }else{
    return nameTwoInput.value}
 }

function guessMessageHelper(player, message){
  if (player > randomNum){
    message.innerText = "That's too high";
  }else if (playerGuess < randomNum){
    message.innerText = "That's too low";
  }else if (playerGuess === randomNum){
    message.innerText ="BOOM!";
    winner = getWinner(message);
    generateNewCard();
  }
}

function generateNewCard(){    
    var newCard=
  `<article class="winner-card">
  <div class="card-header">
  <h4 class="chal-1-name">${nameOneInput.value}</h4>
  <p class ="vs">vs</p>
  <h4 class="chal-2-name">${nameTwoInput.value}</h4>
</div>
  <h2 class="winner-name">${winner}</h2>
  <h5>WINNER</h5>
  <div class= "card-footer">
  <p class="total-guesses" Guesses<a id="count"></a>${counter}</p>
  <p class="time">1.35 MINUTES</p>
  <button type="button" class="x-btn">&#10005;</button>
</div>
</article>`
cardField.insertAdjacentHTML('afterbegin', newCard);
adjustRange();
  }


function rangeUpdate(){
   minNum.innerText = minInput.value; 
   maxNum.innerText = maxInput.value;
}

function nameUpdate(){
  var chalOneName=document.querySelector('.chal-1-name');
  var chalTwoName=document.querySelector('.chal-2-name');
  chalOneName.innerText = nameOneInput.value;
  chalTwoName.innerText = nameTwoInput.value;
}

function guessUpdate(){
  var chalOneGuess=document.querySelector('.pink-guess-1');
  var chalTwoGuess=document.querySelector('.pink-guess-2');
  chalOneGuess.innerText = parseInt(guessOneInput.value);
  chalTwoGuess.innerText = parseInt(guessTwoInput.value);
}

function errorRange(){
  var errorParaRangeOne=document.querySelector('.error-p-range-1');
  var errorParaRangeTwo=document.querySelector('.error-p-range-2');
  if(parseInt(maxInput.value) <= parseInt(minInput.value)){
    errorParaRangeOne.innerText = 'Min range must be lower than max range!';
    errorParaRangeTwo.innerText = 'Max range must be higher than min range!';
    }
}

function outsideRanges (){
  errorOutsideRangeHelper(guessOneInput.value, errorChalOne);
  errorOutsideRangeHelper(guessTwoInput.value, errorChalTwo);
}

function errorOutsideRangeHelper(guess, error){
  if(parseInt(guess) > parseInt(maxInput.value)){
    error.innerText = "Guess is higher than range!";
  }else if(parseInt(guess) < parseInt(minInput.value)){
    error.innerText = "Guess is lower than range!";
  }else{
    error.innerText = '';
  }
}

function emptyNames () {
  emptyNameHelper(nameOneInput.value, errorChalOne);
  emptyNameHelper(nameTwoInput.value, errorChalTwo);
}

function emptyNameHelper(name, errorName){
  if(name === ''){
   errorName.innerText = "Please enter player name!";
  }
}

function emptyGuesses () {
  emptyGuessHelper(guessOneInput.value, errorChalOne);
  emptyGuessHelper(guessTwoInput.value, errorChalTwo);
}

function emptyGuessHelper(guessInput, errorGuess){
  if(guessInput=== ''){
    errorGuess.innerText = "Please enter player guess!";
  }
}

function adjustRange(){
  var changeMin = minNum.innerHTML;
  var changeMax = maxNum.innerHTML;
  minNum.innerHTML = parseInt(changeMin) -10;
  maxNum.innerHTML = parseInt(changeMax) +10;

}

function increment(){
  counter++;
}

function resetCounter(){
  counter = 0;
}

// function emptyRange(){
//   if(parseInt(minInput.value)=== '' || parseInt(maxInput.value)=== ''){
//     errorParaRange.innerText = "Please set a min and max range.";
//   }
// }

// function noE(){
//   if(minInput.value === 'e'){
//     errorPara.innerText = "ENTER A NUMBER!";
//   }
// }


