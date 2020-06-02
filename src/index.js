import validator from './validator.js';

console.log(validator);

const formValidator = document.getElementById('form'); // form
const userCreditCard = document.getElementById('numberTdc'); // input

formValidator.addEventListener('submit', getNumber);


function getNumber(event){
    event.preventDefault();
    const tdcNumber = userCreditCard.value; // value
    validator.isValid(tdcNumber);
}