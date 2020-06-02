import validator from './validator.js';

const formValidator = document.getElementById('form'); // form
const userCreditCard = document.getElementById('numberTdc'); // input

formValidator.addEventListener('submit', getNumber);


function getNumber(event){
    event.preventDefault();
    const tdcNumber = userCreditCard.value; // value
    console.log(validator.isValid(tdcNumber));
    validator.maskify(tdcNumber);
}