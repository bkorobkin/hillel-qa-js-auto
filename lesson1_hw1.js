//TASK >>> Describe what result of the operation will be and specify it step by step  by comments:

//'number' + 3 + 3
console.log('number' + 3 + 3) //output: number33 - тому що number це (string), а оператор + якщо використовується з рядками, виконує конкатенацію (об'єднання), потiм number3 +3 робить теж саме.

// 5 && "qwerty"
console.log(5 && "qwerty") //output: qwerty - це прям квест був для мене, в нашому випадку выведе qwerty тому що 5 це true, якщо перше значення тру то выводить зразу друге(якщо коротко)

// +'40' + +'2' + "hillel";
console.log(+'40' + +'2' + "hillel") //output: 42hillel  - як i перший вираз тут конкатенацiя, але тому шо перед 40 ми ставимо + то цим ми варажаемо як число, тому послiдовно воно додає спочатку 2 а потiм об'єднує з string

// '10' - 5 === 6;
console.log('10' - 5 === 6) //output: false  - 10-5=5,  5!=6, тому false

// true + false
console.log(true + false) //output: 1 - з початку не зрозумiв, гуглив, це прям цiкаво)) все генiальне - просто, true це 1, false це 0, тож 1+0=1

// '4px' - 3
console.log('4px' - 3) //output: NaN - JS з оператором "-" пробує считати як число, але не може й видає NaN (not a number), nan - 3, тому що будь яке вираження з NaN буде Nan

// '4' - 3
console.log('4' - 3) //output: 1 - тут все просто, теж саме що зверху але без "px" JS вдало '4' iнтрепретує у число 4-3=1

// '6' + 3 ** 0;
console.log('6' + 3 ** 0) //output: 61 - тут я здивувався та пiшов до гуглу, тож ** оператор потужностi (Exponentiation) 3 в степени 0 = 1, '6'+1=61

// 12 / '6'
console.log(12 / '6') //output: 2 - якщо оператор '/' то JS '6' перетворює на число 

// '10' + (5 === 6);
console.log('10' + (5 === 6)) //output: 10false - з початку у скобках 5!=6 це false, 10+false=10false

//>>>>>>>>>>>>?????????>>>>>>>> null == ''
console.log(null == '') //output: false - но я не зрозумiв чому. null це 0 або ж false, пустий string це теж 0 або false, тож false==false має будти true. Нэ понятно=(
// 3 ** (9 / 3);
console.log(3 ** (9 / 3)) //output: 27 - 9-3=3, 3**3 або 3*3*3 = 27

// !!'false' == !!'true'
console.log(!!'false' == !!'true') //output: true - було складно, але здається зрозумiв. !! це дабл !, мы маємо двi cрiнги якi є тру, дабл !! робить спочатку з них False false а потом опять тру тру, тру==тру=тру

// 0 || '0' && 1
console.log(0 || '0' && 1) //output: 1 - && має прiорiтет та дає результат, потiм выконується || -якщо одниз з значень тру/1 то й результат тру/1

// (+null == false) < 1; 
console.log((+null == false) < 1) //output: false - тому що першi скобки дають тру, а тру(1) не менше 1

// false && true || true
console.log(false && true || true) //output: true - спершу "&&" дає тру, || дає результат тру

// false && (false || true);
console.log(false && (false || true)) //output: false - поперше йдуть дужки = тру, маємо false&&true > дає false

// (+null == false) < 1 ** 5;
console.log((+null == false) < 1 ** 5) //output - false - дужки дають тру, права частина вiд "<" дає 1 тож тру(1)!<1