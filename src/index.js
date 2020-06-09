import validator from "./validator.js";

// console.log(validator);

const formValidator = document.getElementById("form"); 
const userCreditCard = document.getElementById("numberTdc"); 
const invalidCreditCard = document.getElementById("invalidCard");
const validCreditCard = document.getElementById("validCard");
const validCardReport = document.getElementById("validCardMessage");
const affiliateButton = document.getElementById("affiliateButton");
const signUpButton = document.getElementById("signUpButton");
const returnButton = document.getElementById("returnButton");
const notFoundView = document.getElementById("notFoundView");
const firstView = document.getElementById("firstView");
const homeBack = document.getElementById("homeBack");

formValidator.addEventListener("submit", getNumber);
affiliateButton.addEventListener("click", secondView);
signUpButton.addEventListener("click", notFound);
returnButton.addEventListener("click", returnHome);
homeBack.addEventListener("click", returnHome);
validCreditCard.style.display = "none";
notFoundView.style.display = "none";
formValidator.style.display = "none";


function secondView() {
  formValidator.style.display = "block";
  firstView.style.display = "none";
  let userMail = document.getElementById("userMail");
  userMail.value = "";
  let numberTdc = document.getElementById("numberTdc");
  numberTdc.value = "";
}

function notFound() {
  notFoundView.style.display = "flex";
  firstView.style.display = "none";
}

function returnHome() {
  firstView.style.display = "flex";
  notFoundView.style.display = "none";
  formValidator.style.display = "none";
  validCreditCard.style.display = "none";
  invalidCreditCard.innerHTML = "";
}

function approvedTransaction() {
  const tdcNumber = userCreditCard.value;
  const maskify = validator.maskify(tdcNumber);
  document.getElementById("validCard").style.display = "block";
  document.getElementById("form").style.display = "none";
  validCardReport.innerHTML = `La transacción con la tarjeta ${maskify} ha sido exitosa`;
  invalidCreditCard.innerHTML = "";
}

function getNumber(event) {
  event.preventDefault();
  const tdcNumber = userCreditCard.value;
  if (validator.isValid(tdcNumber) === true) {
    approvedTransaction();
  } else {
    invalidCreditCard.innerHTML = "Tarjeta no valida";
  }
  validator.maskify(tdcNumber);
}

userCreditCard.addEventListener("input", onlyNumber);

function onlyNumber() {
  let numberTdc = document.getElementById("numberTdc");
  const regEx = new RegExp(/\D/g);
  numberTdc.value = numberTdc.value.replace(regEx,'');
}