//task 2 Приветствие: Пользователь вводит свое имя и возраст через prompt.
// Выведите на экран приветствие, используя конкатенацию строк и шаблонные строки.

let userName = prompt("what`s your name?");
let userAge = prompt("How old are U?");
let greeting = "Ahoj!, " + userName + "!U are " + userAge + " years old.";
document.body.innerHTML = ` <h2>Holla! ${userName} </h2> 
                            <p> U are ${userAge} years old. </p>`;
console.log(greeting);
