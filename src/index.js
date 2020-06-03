import validator from './validator.js';

const formValidator = document.getElementById('form'); // form
const userCreditCard = document.getElementById('numberTdc'); // input
const invalidCreditCard = document.getElementById('invalidCard');
const validCreditCard = document.getElementById('validCard').style.display = "none";

formValidator.addEventListener('submit', getNumber);


 function approvedTransaction(){
    document.getElementById('validCard').style.display = "block";
    document.getElementById('form').style.display = "none";
}

function getNumber(event){
    event.preventDefault();
    const tdcNumber = userCreditCard.value; // value
    if (validator.isValid(tdcNumber) === true){
       approvedTransaction();
    }else {
        invalidCreditCard.innerHTML = 'Tarjeta no valida';
    }
    validator.maskify(tdcNumber)

}