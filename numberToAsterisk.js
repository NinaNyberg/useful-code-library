// replace a number with an "*" (On a credit card, for example)

const cardHide = (num) => {
  let hideNum = [];
  for (let i = 0; i < num.length; i++) {
    if (i < num.length - 4) {
      hideNum.push('\u25CF');
    } else {
      hideNum.push(num[i]);
    }
  }
  return hideNum.join('');
};
