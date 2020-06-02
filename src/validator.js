const validator = {
  /*
  cuando ingresa el número ya validado lo retorna como un string cifrado con # exceptuando los últimos 4 digitos
  params: creditCardNumber - string
  return: tarjeta de credito cifrada - string
  */
  maskify(creditCardNumber) {
    let creditCardNumberReversed = "";
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      creditCardNumberReversed = creditCardNumberReversed + creditCardNumber[i];
    }

    let maskReversed = "";
    for (let i = 0; i < creditCardNumberReversed.length; i++) {
      if (i < 4) {
        maskReversed = maskReversed + creditCardNumberReversed[i];
      } else {
        maskReversed = maskReversed + "#";
      }
    }
    let mask = "";
    for (let i = maskReversed.length - 1; i >= 0; i--) {
      mask = mask + maskReversed[i];
    }
    return mask;
  },
};

export default validator;
