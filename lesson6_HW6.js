// ДЗ 1
// Написати свою реалізацію функції isNaN. 
// Умови виконання ДЗ
// Не використовувати функції або інші матеріали які ми не вивчали
// Не використовувати isNaN/ Number.isNaN
// customIsNaN має бути ідентичною за логікою до isNaN


// ДЗ 2
// Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
// Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
// Приклад функції checkProbabilityTheory(count). Параметр count буде вказувати скільки разів буде генеруватися випадкове число.
// Уmови виконання ДЗ

// Функція виводить інформацію 
// Кількість згенерованих чисел: кількість чисел
// Парних чисел: кількість парних чисел
// Не парних чисел: кількість не парних чисел
// Відсоток парних до не парних: 
// ДЗ 3

// Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.

// Умови виконання ДЗ

// Не використовувати функції або інші матеріали які ми не вивчали
// Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
// Додаткова задача:

// Напишіть функцію на JavaScript, яка приймає рядок, виокремлює з нього всі цілі числа (ігноруючи дробові числа), 
//перетворює їх з текстового формату в числовий  та обчислює їхню загальну суму.

// Вимоги:

// Функція повинна ітерувати кожен символ у вхідному рядку.
// Використовуйте цикл для перегляду кожного символу та збору повних цілочисельних значень.
// Ігноруйте нечислові символи та дробові числа під час обрахунку суми цілих чисел (якщо у нас зустрічається таки запис 123.23 - 
// то сума має бути 146, 123+23=146). 
// Після визначення кожного цілого числа додайте його до загальної суми.
// Не використовувати масиви та регулярні вирази для рішення
// console.log(sumIntegersInString("123.45px-67 8.9")); // Виведе 118, сумуючи 123, 45, -67, 8 та 9




//ДЗ 1:

function customIsNaN(value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value !== value; //это очень странное правило NaN =)))
}

console.log(customIsNaN(5));


//ДЗ 2:

function checkProbabilityTheory(minCount, maxCount) {
    const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;

    let evenCount = 0;
    for (let x = 0; x < count; x++) {
        const randomNumber = Math.floor(Math.random() * 901) + 100;
        if (randomNumber % 2 === 0) {
            evenCount++;
        }
    }

    const evenPercentage = (evenCount / count) * 100;
    const oddPercentage = 100 - evenPercentage;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${count - evenCount}`);
    console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}

checkProbabilityTheory(100, 1000); 

//ДЗ 3:

let sum = 0;
for (let x = 1; x <= 100; x++) {
    if (x % 3 !== 0) {
        sum += x;
    }
}

console.log("Сума чисел від 1 до 100, які не кратні 3:", sum);