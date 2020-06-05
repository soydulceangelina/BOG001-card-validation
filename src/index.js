import validator from './validator.js';

const formValidator = document.getElementById('form'); 
const userCreditCard = document.getElementById('numberTdc'); 
const invalidCreditCard = document.getElementById('invalidCard');
const validCreditCard = document.getElementById('validCard');
const validCardReport = document.getElementById('validCardMessage');
// const selectionView = document.getElementById('firstView');
const affiliateButton = document.getElementById('affiliatebutton');


formValidator.addEventListener('submit', getNumber);
affiliateButton.addEventListener('click', secondView);
validCreditCard.style.display = "none";
formValidator.style.display = "none";

function secondView(){
  document.getElementById('firstView').style.display = "none";
  document.getElementById('validCard').style.display = "none"
  document.getElementById('form').style.display = "block";
}

function approvedTransaction(){
    const tdcNumber = userCreditCard.value;
    const maskify = validator.maskify(tdcNumber);
    document.getElementById('validCard').style.display = "block";
    document.getElementById('form').style.display = "none";
    validCardReport.innerHTML = `La transaccion con la tarjeta ${maskify} ha sido exitosa`
 }
function getNumber(event){
    event.preventDefault();
    const tdcNumber = userCreditCard.value;
    if (validator.isValid(tdcNumber) === true){
       approvedTransaction();
    }else {
        invalidCreditCard.innerHTML = 'Tarjeta no valida';
        // setTimeout(function(){ location.reload(); }, 1000);
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