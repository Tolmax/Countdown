const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector('.countdown')

function getcountdownTime() {
  // Создаем точку отсчёта времени
  const countdownDate = new Date(2024, 9, 13, 0, 0, 0).getTime(); //getTime() переводит в милисекунды
  console.log(countdownDate);

  // Создаем текущее время
  const now = new Date().getTime();
  // Вычисляем разницу в миллисек
  const difference = countdownDate - now;
  // Создаем константы в миллисек
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;
  // Подсчет дней, часов, минут и секунд
  //% (Модуль)
  // Оператор modulus используется следующим образом:
  // var1 % var2
  // Оператор modulus возвращает первый операнд по модулю второго операнда, то есть var1 по модулю var2,
  // в предыдущем операторе, где var1 и var2 являются переменными. Функция по модулю представляет собой целое
  // число, оставшееся от деления var1 на var2 . Например, 12 % 5 возвращает 2. Результат будет иметь тот же знак,
  // что и var1; то есть -1 % 2 возвращает -1 .

  let days = Math.floor(difference / oneDay);
  let hours = Math.floor((difference % oneDay) / oneHour);
  let minute = Math.floor((difference % oneHour) / oneMinute);
  let second = Math.floor((difference % oneMinute) / oneSecond);
  // Создаем массив с переменными
  const values = [days, hours, minute, second];
  console.log(values);
  // Вставляем данные на страницу
  items.forEach((element, index) => {
    element.textContent = values[index] 
  });
  // Остановка счетчика при истечении времени
  if (difference < 0) {
    clearInterval(countdown)
    countdownElement.innerHTML = "<h4 class='expired'>ПОЗДРАВЛЯЕМ</h4>"
  }
}
// Обновление счетчика каждую секунду
let countdown = setInterval(getcountdownTime, 1000)


getcountdownTime();

