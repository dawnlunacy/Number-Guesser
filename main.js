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
var boomMsgOne=document.querySelector('.boom-msg-1');
var boomMsgTwo=document.querySelector('.boom-msg-2');
var submitBtn=document.querySelector('.submit-btn');
var chalOneName=document.querySelector('.chal-1-name');
var chalTwoName=document.querySelector('.chal-2-name');
var chalOneGuess=document.querySelector('.pink-guess-1');
var chalTwoGuess=document.querySelector('.pink-guess-2');
var errorParaRange=document.querySelector('.error-p-range');
var errorChalOne=document.querySelector('.error-p-chal-1');
var errorChalTwo=document.querySelector('.error-p-chal-2');
var cardField=document.querySelector('.card-field');

clearBtn.addEventListener('click', clearFields);
window.addEventListener('load', disableToggle1);
window.addEventListener('load', disableToggle2);
minInput.addEventListener('keyup', disableToggle1);
nameOneInput.addEventListener('keyup', disableToggle2);
submitBtn.addEventListener('click', guessMessage1);
submitBtn.addEventListener('click', guessMessage2);
submitBtn.addEventListener('click', nameUpdate);
submitBtn.addEventListener('click', guessUpdate);
submitBtn.addEventListener('click', errorOutsideGuessOneMax);
submitBtn.addEventListener('click', errorOutsideGuessOneMin);
submitBtn.addEventListener('click', errorOutsideGuessTwoMax);
submitBtn.addEventListener('click', errorOutsideGuessTwoMin);
submitBtn.addEventListener('click', emptyNameInputOne);
submitBtn.addEventListener('click', emptyGuessInputOne);
submitBtn.addEventListener('click', emptyNameInputTwo);
submitBtn.addEventListener('click', emptyGuessInputTwo);
updateBtn.addEventListener('click',randomNumber);
updateBtn.addEventListener('click',rangeUpdate);
updateBtn.addEventListener('click', errorRange);
submitBtn.addEventListener('click', createCard);
cardField.addEventListener('click', function (e) {
  if (e.target.className === 'x-btn') {
    e.target.parentElement.parentElement.remove();
  }
});
// updateBtn.addEventListener('click', emptyRange);

// minInput.addEventListener('keydown', noE);


function clearFields (e) {
  e.preventDefault();
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

function guessMessage1(){
  if (parseInt(guessOneInput.value) > randomNum){
    boomMsgOne.innerText = "That's too high";
  }else if (parseInt(guessOneInput.value) < randomNum){
    boomMsgOne.innerText = "That's too low";
  }else{
    boomMsgOne.innerText ="BOOM!";
    createCard();
  }
}

function guessMessage2(){
  if (parseInt(guessTwoInput.value) > randomNum){
    boomMsgTwo.innerText = "That's too high";
  }else if (parseInt(guessTwoInput.value) < randomNum){
    boomMsgTwo.innerText = "That's too low";
  }else if(parseInt(guessTwoInput.value) === randomNum){
    boomMsgTwo.innerText ="BOOM!";
    createCard();
    }
  }

function rangeUpdate(){
   minNum.innerText = minInput.value; 
   maxNum.innerText = maxInput.value;
}

function nameUpdate(){
  chalOneName.innerText = nameOneInput.value;
  chalTwoName.innerText = nameTwoInput.value;
}

function guessUpdate(){
  chalOneGuess.innerText = parseInt(guessOneInput.value);
  chalTwoGuess.innerText = parseInt(guessTwoInput.value);
}

function errorRange(){
  if(parseInt(maxInput.value) <= parseInt(minInput.value)){
    errorParaRange.innerText = "Min range must be lower than max range!";
  }
}

function errorOutsideGuessOneMax(){
  if(parseInt(guessOneInput.value) > parseInt(maxInput.value)){
  errorChalOne.innerText = "Guess is higher than range!";
  }
}

function errorOutsideGuessOneMin(){
  if(parseInt(guessOneInput.value) < parseInt(minInput.value)){
  errorChalOne.innerText = "Guess is lower than range!";
  }
}

function errorOutsideGuessTwoMax(){
  if(parseInt(guessTwoInput.value) > parseInt(maxInput.value)){
  errorChalTwo.innerText = "Guess is higher than range!";
  }
}

function errorOutsideGuessTwoMin(){
  if(parseInt(guessTwoInput.value) < parseInt(minInput.value)){
  errorChalTwo.innerText = "Guess is lower than range!";
  }
}

function emptyNameInputOne(){
  if(nameOneInput.value === ''){
    errorChalOne.innerText = "Please enter player 1 name!";
  }
}

function emptyGuessInputOne(){
  if(guessOneInput.value === ''){
    errorChalOne.innerText = "Please enter player 1 guess!";
  }
}

function emptyNameInputTwo(){
  if(nameTwoInput.value === ''){
    errorChalTwo.innerText = "Please enter player 2 name!";
  }
}

function emptyGuessInputTwo(){
  if(guessTwoInput.value === ''){
    errorChalTwo.innerText = "Please enter player 2 guess!";
  }
}

function createCard (e) {
  e.preventDefault(e);
  cardField.innerHTML +=
  `<article class="winner-card">
  <div class="card-header">
  <h4 class="chal-1-name">${nameOneInput.value}</h4>
  <p class ="vs">vs</p>
  <h4 class="chal-2-name">${nameTwoInput.value}</h4>
</div>
  <h2>CHAL WINNER NAME</h2>
  <h5>WINNER</h5>
  <div class= "card-footer">
  <p class="total-guesses">47 GUESSES</p>
  <p class="time">1.35 MINUTES</p>
  <button type="button" class="x-btn">&#10005;</button>
</div>
</article>`
// cardField.insertAdjacentHTML('afterbegin', newCard);
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



