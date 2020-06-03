import validator from './validator.js';

const formValidator = document.getElementById('form'); // form
const userCreditCard = document.getElementById('numberTdc'); // input
const invalidCreditCard = document.getElementById('invalidCard');
const validCreditCard = document.getElementById('validCard');
const validCardReport = document.getElementById('validCardMessage');

formValidator.addEventListener('submit', getNumber);
validCreditCard.style.display = "none";

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
        setTimeout(function(){ location.reload(); }, 1000);
    }
}