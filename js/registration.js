var registrationElem = document.querySelector('.registrationNum');
var addBtnElem = document.querySelector('.addBtn');
var clearButton = document.querySelector('.clearBtn');
var displayElem = document.querySelector('.numberDisplay');


var stored = localStorage.getItem("numberOfReg") ? JSON.parse(localStorage.getItem("numberOfReg")) : {};
var callFactory = RegFactory(stored);
var collectReg = stored;

function createReg(registration){
  let createList = document.createElement('li');
  createList.textContent = registration;
  displayElem.appendChild(createList);
}

function displayRegistration(){
  var inputValue = registrationElem.value.trim().toUpperCase();
  registrationElem.value = '';



   var cars = /[a-zA-Z0-9]+$/;
  if(!inputValue.match(cars) && inputValue !== ""){
    if(collectReg[inputValue] === undefined){
      collectReg[inputValue] = 0;
     }
}
if (callFactory.addedNumbers(inputValue)) {
    document.querySelector('.alert').innerHTML = '';
    localStorage.setItem('numberOfReg', JSON.stringify(callFactory.mapRegistry()));
    createReg(inputValue);
}
      else {
        document.querySelector('.alert').innerHTML = "Please enter a valid registration <br> <code> Only from: 'CA, CY,CW, & CJ'.'CAW'"
      }

}

addBtnElem.addEventListener('click', function(){
  displayRegistration();
  // registrationElem.value = '';
});

clearButton.addEventListener('click', function(){
localStorage.removeItem('numberOfReg');
document.querySelector('.alert').innerHTML = '';
window.location.reload();
})


registrationElem.addEventListener('click', function(){
  document.querySelector('.alert').innerHTML = '';
});
