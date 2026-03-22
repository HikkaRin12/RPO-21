// task 4 Расчёт дневного бюджета: Месячный бюджет студента — 12 000 Kč. 
// В месяце 30 дней. Посчитайте средний дневной бюджет и выведите его на экран.

let monthlyBudget = 12000;
let daysInMonth = 30;
let avarage = monthlyBudget / daysInMonth;
console.log("avarage student budget: " + avarage + "CZK");
document.body.innerHTML = `<div>avarage student buget: ${avarage} CZK</div>`;


