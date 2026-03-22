// task 1 Создание e-mail адреса: Пользователь вводит имя и фамилию через prompt.
// Соедините их через точку, добавьте @mujmail.com и выведите на экран
// с помощью оператора +.

let userNik = prompt("Enter your name");
let userSurname = prompt("Enter your surname");
let email = userNik + "." + userSurname + " @mujmail.com";
document.body.innerHTML = `<h1>Hello, ${userNik}</h1>
                            <p>Your new mail adress is here </p>
                            <p>Your email addresss id ${email}</p>`;

console.log(`Your email addresss id ${email}`);
