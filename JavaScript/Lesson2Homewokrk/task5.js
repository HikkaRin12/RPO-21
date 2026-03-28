console.log("Файл task5.js успешно загружен!");
const str = "JavaScript is awesome";

let strLength = str.length;
let extractedWord = str.slice(0, 10);
let replacedStr = str.replace("awesome", "cool");
let upperStr = str.toUpperCase();

document.body.innerHTML += `
    <h1 class="title">Работа со строками</h1>
    <p class="paragraph">Исходная строка: <strong>${str}</strong></p>
    <p class="paragraph">Длина строки: <strong>${strLength}</strong></p>
    <p class="paragraph">Извлеченное слово: <strong>${extractedWord}</strong></p>
    <p class="paragraph">Строка после замены: <strong>${replacedStr}</strong></p>
    <p class="paragraph">В верхнем регистре: <strong>${upperStr}</strong></p>
`;
