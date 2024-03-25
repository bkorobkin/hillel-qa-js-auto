// 1. Задача: Конвертер валют
// Завдання: Напишіть функцію convertCurrency, яка приймає суму в доларах США (USD) і код валюти, в яку потрібно конвертувати ('EUR', 'UAH', 'GBP').
 // Функція повинна повертати суму у вказаній валюті, використовуючи фіксовані курси валют (наприклад, 1 USD = 0.9 EUR, 1 USD = 35 UAH, 1 USD = 0.8 GBP). 
 // Якщо код валюти не підтримується, функція повинна повертати рядок з помилкою.

// 2. Задача: Визначення дня тижня
// Завдання: Створіть функцію getDayOfWeek, яка приймає число від 1 до 7 і повертає назву дня тижня, де 1 - це понеділок, а 7 - неділя.
// Якщо введене число не відповідає жодному дню тижня, функція має повертати рядок з помилкою.

// 3.Задача: Знайти число Фібоначчі
// Завдання: Напишіть функцію fibonacci, що приймає число n як аргумент і повертає n-те число з послідовності Фібоначчі. 
// Послідовність починається з 0 (нульовий елемент) і 1 (перший елемент), а кожне наступне число є сумою двох попередніх чисел.

// Приклади використання:
// Для n = 0:
// Вхід: fibonacci(0)
// Вихід: 0
// Опис: Нульовий елемент послідовності Фібоначчі — це 0.

// Для n = 4:
// Вхід: fibonacci(4)
// Вихід: 3
// Опис: Четвертий елемент послідовності Фібоначчі (0, 1, 1, 2, 3) — це 3 (1 + 2).

// Додаткова задача. Вгадай число

// Напишіть функцію guessNumber, яка приймає рядок від користувача через prompt() і порівнює його з випадково згенерованим числом від 1 до 10 (включно). 
// Функція має виводити 'Вгадали!', якщо користувач вгадав число, або 'Спробуйте ще раз!', якщо ні. Враховуйте перетворення типів та умовні конструкції. 
// Також треба додати наступні функціональні можливості:
// Обмежена кількість спроб: Користувач має обмежену кількість спроб, наприклад, 3 спроби, щоб вгадати число. Використовувати рекурсію, а не цикли. 
// Підказки: Якщо користувач вводить число, яке не співпадає з загаданим, але залишилися спроби, функція надає підказку: "занадто велике" або "занадто мале".
// Валідація вводу: Переконайтеся, що користувач ввів дійсне число в потрібному діапазоні (від 1 до 10). 
// Якщо введене значення недійсне, прохання ввести число знову не зараховуючи це як спробу.



// 1. Задача: Конвертер валют
function convertCurrency(amount, currencyCode) {
    
    const exchangeRates = {
        'EUR': 0.9,
        'UAH': 35,
        'GBP': 0.8
    };

    if (currencyCode === 'RUB') {
        return `Error. The specified currency isn't existing, please try again ┌∩┐(◕◡◉)┌∩┐`;
    }

    if (!(currencyCode in exchangeRates)) {
         // За допомогою Template Strings виводимо помилку з введеним кодом
        return `Error. Wrong currency code "${currencyCode}"`;
    }
   const convertedAmount = amount * exchangeRates[currencyCode]
   // з Template Strings також робимо гарний output
    return `${amount} ${currencyCode} equals ${convertedAmount} USD`;
}
console.log(convertCurrency(10, 'EUR'));


// 2. Задача: Визначення дня тижня
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            return 'Error: Wrong number of the day';
    }
}
console.log(getDayOfWeek(1)); // output: Monday


// 3.Задача: Знайти число Фібоначчі.  
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(6));




// Додаткова задача. Вгадай число

function guessNumber(triesLeft) {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Генерацiя числа. Тупо знайдено та вкрадено з w3schools
  // parseInt ищет и преображает введенные данные в число ( method parses a value as a string and returns the first integer.)
    let userGuess = parseInt(prompt("Guess a number from 1 to 10:"));
    //задаємо число та далi умови прийняття введенного: 
// isNaN - "Not-a-Number", method returns true if a value is NaN. And converts the value to a number before testing it.
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {   // валiдацiя числа вiд 1 до 10 
        console.log("Please enter a valid number from 1 to 10.");
        guessNumber(triesLeft); // рекурсивно викликаємо функцію для нової спроби
        return; 
    }
    // Мабуть не гарно вкладувати кучу умов в умову, але ось так вийшло
    if (userGuess === randomNumber) {
        console.log("Congratulations! You guessed the number."); // Вгадав!
    }  else {
        if (triesLeft > 1) { //якщо нi та маєш спроби - пiдсказка
            if (userGuess > randomNumber) {
                console.log("Too high. Try again!"); // 
            } else {
                console.log("Too low. Try again!");
            }

            guessNumber(triesLeft - 1); //так пicля кожноi спроби мiнусуємо лiчiльних спроб
        } else {
            // Повідомляємо про кінець спроб
            console.log("You have used all your tries. The secret number was " + randomNumber + ".");
        }
    }
}
// Викликаємо функцію з обмеженою кількістю спроб
guessNumber(3);

