// ДЗ.2 Робота з обʼєктом
// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.

// Наприклад так:
// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

// Умови виконання ДЗ.2 
// Не використовувати методи keys, values, entries


const dog = {
    name: 'Churchill',
    breed: 'Pug',
    ageInHumanYears: 3,
    master: 'Bogdan',
    getInfo() {
        const properties = Object.getOwnPropertyNames(this);
        properties.forEach(property => {
            if (typeof this[property] !== 'function') {
                console.log(`${property}: ${this[property]}`);
            }
        })
    }
}
dog.getInfo(); 
dog.additionalnfo = 'Allergic to chicken';
dog.getInfo(); 