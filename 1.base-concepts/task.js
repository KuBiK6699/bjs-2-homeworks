'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d < 0) { 
    return (arr);
  } else if (d === 0) {
    return ([(-b/(2*a))]);
  } else if (d > 0) {
    return ([(-b + Math.sqrt(d))/(2*a), (-b - Math.sqrt(d))/(2*a)]);
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let entryPercent = parseInt(percent) / 100;
  let entryContribution = parseInt(contribution);
  let entryAmount = parseInt(amount);

  if (isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return totalAmount = `Параметр "Сумма кредита" содержит неправильное значение "${amount}"`;
  }

  let returnSumm = entryAmount - entryContribution;
  let startDate = new Date();

  let timeCreditDate = (date.getFullYear() - startDate.getFullYear()) * 12 + startDate.getMonth() - date.getMonth();

  let everyMonthPay = returnSumm * ((entryPercent / 12) + ((entryPercent / 12) / (((1 + (entryPercent / 12)) ** timeCreditDate) - 1)));

  totalAmount = (timeCreditDate * everyMonthPay).toFixed(2);

  return totalAmount;
}
