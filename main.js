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


clearBtn.addEventListener('click', clearFields);

function clearFields (e) {
  e.preventDefault();
  minInput = '';
  maxInput = '';
  nameOneInput = '';
  nameTwoInput = '';
  guessOneInput = '';
  guessTwoInput = '';
};

function genNum(min,max){
  min=Math.ceil(min);
  max=Math.floor(max);
  return Math.floor(Math.random()*(max-min+1))+min;
};

function randomNumber(){
  var min1=minInput.value;
  var max1=maxInput.value;
  randomNum=genNum(min1,max1);
  console.log(randomNum)
}

updateBtn.addEventListener('click',randomNumber);


function disableToggle (){
  if(minInput.value === '' && maxInput.value === ''){
    updateBtn.disabled = true;
    updateBtn.classList.add('disabled');
  }else{

  }
}


