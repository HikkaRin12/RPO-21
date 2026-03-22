// Веди свой месячный бюджет и количество дней в месяце. Посчитай средний дневной бюджет и выведи его на экран.

let monthlyBudget = prompt("Введите ваш месячный бюджет в CZK:");   
let daysInMonth = prompt("Введите количество дней в месяце:");
let avarage = monthlyBudget / daysInMonth;
console.log("avarage budget: " + avarage + "CZK");
document.body.innerHTML = `<div>avarage buget: ${avarage} CZK</div>`;