const validator = {
  isValid: function (num) {
    let numsGroup = num.split("").reverse();
    let sum = 0;

    for (let i = 1; i < numsGroup.length; i += 2) {
      let multi = numsGroup[i] * 2;
      if (multi >= 10) {
        multi = multi.toString();
        multi = multi.split("");
        multi = parseInt(multi[0]) + parseInt(multi[1]);
      }
      numsGroup[i] = multi;
    }

    for (let j = 0; j < numsGroup.length; j++) {
      let odd = numsGroup[j];
      odd = parseInt(odd);
      numsGroup[j] = odd;
    }
    numsGroup.forEach(function (digit) {
      sum += digit;
    });
  },
  /*
  cuando ingresa el número ya validado lo retorna como un string cifrado con # exceptuando los últimos 4 digitos
  params: creditCardNumber - string
  return: tarjeta de credito cifrada - string
  */
  maskify: function (creditCardNumber) {
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
