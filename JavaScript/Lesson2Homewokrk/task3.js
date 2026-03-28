console.log("Файл task3.js успешно загружен!");
let num = 3.67892;
let floorNum = Math.floor(num);

let ceilNum = Math.ceil(num);

let roundNum = Math.round(num);

let fixedNum = Number(num.toFixed(2));
document.body.innerHTML += `
    <h1 class="title">Результаты округления числа ${num}</h1>
    <p class="paragraph">Округление вниз: <strong>${floorNum}</strong></p>
    <p class="paragraph">Округление вверх: <strong>${ceilNum}</strong></p>
    <p class="paragraph">Обычное математическое: <strong>${roundNum}</strong></p>
    <p class="paragraph">До двух знаков после запятой: <strong>${fixedNum}</strong></p>
`;
