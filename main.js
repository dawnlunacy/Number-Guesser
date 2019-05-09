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


clearBtn.addEventListener('click', clearFields);
window.addEventListener('load', disableToggle1);
window.addEventListener('load', disableToggle2);
minInput.addEventListener('keyup', disableToggle1);
nameOneInput.addEventListener('keyup', disableToggle2);
submitBtn.addEventListener('click', guessMessage1);
submitBtn.addEventListener('click', guessMessage2);
submitBtn.addEventListener('click', nameUpdate);
submitBtn.addEventListener('click', guessUpdate);
updateBtn.addEventListener('click',randomNumber);
updateBtn.addEventListener('click',rangeUpdate);



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
    boomMsgOne.innterText ="BOOM!";
  }
}

function guessMessage2(){
  if (parseInt(guessTwoInput.value) > randomNum){
    boomMsgTwo.innerText = "That's too high";
  }else if (parseInt(guessTwoInput.value) < randomNum){
    boomMsgTwo.innerText = "That's too low";
  }else if(parseInt(guessTwoInput.value) === randomNum){
    boomMsgTwo.innterText ="BOOM!";
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





