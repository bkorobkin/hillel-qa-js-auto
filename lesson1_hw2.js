// TASK >>> 
// Задача 1: Класифікація оцінок (вирішується за допомогою if-else)
// Завдання: У вас є оцінка від 1 до 100. Напишіть блок коду, який класифікує оцінку: "відмінно" для оцінок від 90 до 100, "добре" для оцінок від 70 до 89, "задовільно" для оцінок від 50 до 69, та "незадовільно" для оцінок менше 50.

// Задача 2: Вибір дії (вирішується за допомогою switch-case)
// Завдання: У вас є рядок з дією ("додати", "відняти", "помножити", "поділити") і два числа. Напишіть блок коду, який виконує обрану дію з цими числами та виводить результат.

// Задача 3: Перевірка на парність (вирішується за допомогою тернарного оператора)
// Завдання: У вас є число. Використовуйте тернарний оператор для перевірки числа на парність. Виведіть "парне", якщо число парне, і "непарне" в іншому випадку.

// Задача 1:
//"Please write your score to get a grade"
const score = 101;

if (score >= 90 && score <= 100) {
  console.log('Excellent');
} else if (score >= 70 && score <= 89) {
  console.log('Very Good');
} else if (score >= 50 && score <= 89) {
  console.log('Good');
} else if (score >= 0 && score <= 49){
  console.log('Satisfy');
} else {
  console.log('Invalid number. Please enter a score between 0 and 100.');
}

// Задача 2:
//"Please write an arithmetic operation('+','-','*','/') and specify values 'a' and 'b' for interaction"
const action = '!';
const a = 1
const b = 2;

switch (action) {
  case '+':
    console.log(a + b);
    break;
  case '-':
    console.log(a - b);
    break;
  case '*':
    console.log(a * b);
    break;
  case '/':
    console.log(a / b);
    break;
  default:
    console.log("Wrong action. Insert only following operations: ('+','-','*','/')");
}

// Задача 3: 
//"Please write a number to check if is it 'Even' or 'Odd'"
const number = 10;

const result = (number % 2  == 0) ? "Even" : "Odd";
console.log('The number is ' + result);