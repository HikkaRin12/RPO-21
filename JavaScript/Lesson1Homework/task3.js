//task 3 Простой калькулятор: Создайте две переменные с числами. Выведите на экран их сумму, разность, произведение и частное.

let numero1 = 15;
let numero2 = 4;
let sum = numero1 + numero2;
let difference = numero1 - numero2;
let product = numero1 * numero2;
let remainder = numero1 % numero2;
document.body.innerHTML = ` <h2>Calculator</h2>
                            <p> The sum of ${numero1} and ${numero2} is: ${sum} </p> 
                            <p> The difference of ${numero1} and ${numero2} is: ${difference} </p>
                            <p> The product of ${numero1} and ${numero2} is: ${product} </p>
                            <p> The remainder of ${numero1} and ${numero2} is: ${remainder} </p>`;
console.log(`The sum of ${numero1} and ${numero2} is: ${sum}`);
console.log(`The difference of ${numero1} and ${numero2} is: ${difference}`);
console.log(`The product of ${numero1} and ${numero2} is: ${product}`);
console.log(`The remainder of ${numero1} and ${numero2} is: ${remainder}`);
