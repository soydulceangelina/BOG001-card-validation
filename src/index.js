import validator from './validator.js';

console.log(validator);

const formValidator = document.getElementById('form');
const userCreditCard = document.getElementById('numberTdc');

formValidator.addEventListener('submit', getNumber);


function getNumber(event){
    event.preventDefault();
    const tdcNumber = userCreditCard.value;
    console.log(tdcNumber);
}