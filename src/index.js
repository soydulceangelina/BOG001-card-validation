import validator from './validator.js';

// const selectionView = document.getElementById('firstView'); //vista inicial (dos opciones) 
const notFoundPage = document.getElementById("notFoundView"); //vista 404
const formValidator = document.getElementById('form'); //vista formulario
const validCreditCard = document.getElementById('validCard'); //vista check, tarjeta valida
const userCreditCard = document.getElementById('numberTdc'); 
const invalidCreditCard = document.getElementById('invalidCard');
const validCardReport = document.getElementById('validCardMessage');
const affiliateButton = document.getElementById('affiliatebutton');
const signUpButton = document.getElementById("signUpButton");
const homeBack = document.getElementById("homeBack");


affiliateButton.addEventListener('click', secondView);
signUpButton.addEventListener("click", notFound);
formValidator.addEventListener('submit', getNumber);
homeBack.addEventListener("click", returnHome);
validCreditCard.style.display = "none";
formValidator.style.display = "none";
notFoundPage.style.display = "none";

function secondView(){
  document.getElementById('form').style.display = "block";
  document.getElementById('firstView').style.display = "none";
  // document.getElementById('validCard').style.display = "none";
  // document.getElementById("notFoundView").style.display = "none";
  let userName = document.getElementById("userName");
  userName.value = "";
  let numberTdc = document.getElementById("numberTdc");
  numberTdc.value = "";
}

function notFound(){
  document.getElementById("notFoundView").style.display = "flex";
  document.getElementById('firstView').style.display = "none";
  // document.getElementById('validCard').style.display = "none";
  // document.getElementById('form').style.display = 'none';
}

function returnHome() {
  location.reload();
  // document.getElementById('firstView').style.display = "flex";
  // document.getElementById("notFoundView").style.display = "none";
  // document.getElementById('form').style.display = 'none';
  // document.getElementById('validCard').style.display = "none";
}

function approvedTransaction(){
    const tdcNumber = userCreditCard.value;
    const maskify = validator.maskify(tdcNumber);
    document.getElementById('validCard').style.display = "block";
    document.getElementById('form').style.display = "none";
    // document.getElementById("notFoundView").style.display = "none";
    // document.getElementById('firstView').style.display = "none";
    validCardReport.innerHTML = `La transaccion con la tarjeta ${maskify} ha sido exitosa`
 }

function getNumber(event){
    event.preventDefault();
    const tdcNumber = userCreditCard.value;
    if (validator.isValid(tdcNumber) === true){
       approvedTransaction();
    }else {
        invalidCreditCard.innerHTML = 'Tarjeta no valida';
    }
}

userCreditCard.addEventListener("input", onlyNumber);

function onlyNumber() {
  let numberTdc = document.getElementById("numberTdc");
  const regEx = new RegExp(/\D/g);
  numberTdc.value = numberTdc.value.replace(regEx,'');
  // if (!regEx.test(numberTdc.value)) { 
  //   numberTdc.value = numberTdc.value.substring(0, numberTdc.value.length - 1);
  // }
}