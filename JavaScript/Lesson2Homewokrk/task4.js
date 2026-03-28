
console.log("Файл task4.js успешно загружен!");
let randomNumber = Math.floor(Math.random() * 10) + 1;
document.body.innerHTML +=`
    <h1 class="title">Генератор чисел</h1>
    <p class="paragraph">Ваше случайное число: <strong>${randomNumber}</strong></p>
`;