const validator = {
  isValid: function(num){
    let numsGroup = num.split("").reverse();
    let sum = 0;

    for(let i = 1; i < numsGroup.length; i += 2){
      let multi = numsGroup[i] * 2;
      if(multi >= 10){
        multi = multi.toString();
        multi = multi.split("");
        multi = parseInt(multi[0]) + parseInt(multi[1]);
      }
      numsGroup[i] = multi;
    }

    for(let j = 0; j < numsGroup.length; j++){
      let odd = numsGroup[j];
      odd = parseInt(odd);
      numsGroup[j] = odd;
    }
    numsGroup.forEach(function(digit) {
      sum += digit
    })

    console.log(sum);

    if(sum % 10 === 0){
      return true;
    }else {
      return false;
    }

  }


};

export default validator;
