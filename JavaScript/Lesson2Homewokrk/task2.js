
console.log("Файл task2.js успешно загружен!");
let celsiusInput = Number(prompt("Введите градусы Цельсия для конвертации в Фаренгейт:"));
let fahrenheitResult = celsiusInput * 1.8 + 32;

let fahrenheitInput = Number(prompt("Введите градусы Фаренгейта для конвертации в Цельсий:"));
let celsiusResult = (5 * (fahrenheitInput - 32)) / 9;
document.body.innerHTML += `
    <h1 class="title">2. Конвертер температур</h1>
    <p class="paragraph">${celsiusInput}°C — это <strong>${fahrenheitResult.toFixed(1)}°F</strong></p>
    <p class="paragraph">${fahrenheitInput}°F — это <strong>${celsiusResult.toFixed(1)}°C</strong></p>
`;