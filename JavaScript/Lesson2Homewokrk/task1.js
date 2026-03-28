console.log("Файл task1.js успешно загружен!");
let day = prompt("Введите день:");
let month = prompt("Введите месяц:");
let year = prompt("Введите год:");
document.body.innerHTML = `
    <h1 class="title">Форматированная дата</h1>
    <p class="paragraph">Вы ввели дату: <strong>${day}.${month}.${year}</strong></p>
`;