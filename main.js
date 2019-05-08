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

updateBtn.addEventListener('click',randomNumber);


function disableToggle (){
  if(minInput.value === '' && maxInput.value === ''){
    updateBtn.disabled = true;
    updateBtn.classList.add('disabled');
  }else{

  }
}


