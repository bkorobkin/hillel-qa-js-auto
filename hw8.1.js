// ДЗ.1 BigBoss
// Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків. 
// Окрім того, наша компанія продає рішення для організації продажу цих квитків. Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО). 
// По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків. 
// Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі
// Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим. 

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.1', // было 1.2.3
                            type: 'subSubSubCompany', //добавил тип компании "третьего вложения"
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
// Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.
// Умови ДЗ.1 - обмежень не має. Підказка, можна рекурсією, можна через масиви
function findValueByKey(companyName, currentCompany = company) {
    if (currentCompany.name === companyName) {
        return currentCompany; 
    }

    if (currentCompany.clients) {
        for (const client of currentCompany.clients) {
            const foundClient = findValueByKey(companyName, client);
            if (foundClient) {
                return foundClient; 
            }
            if (client.partners) {
                for (const partner of client.partners) {
                    const foundPartner = findValueByKey(companyName, partner);
                    if (foundPartner) {
                        return foundPartner; 
                    }
                    if (partner.partners) {
                        for (const subPartner of partner.partners) {
                            const foundSubPartner = findValueByKey(companyName, subPartner);
                            if (foundSubPartner) {
                                return foundSubPartner; 
                            }
                        }
                    }
                }
            }
        }
    }
    return false; 
}

const companyName = 'Клієнт 1.2.1'; 
const result = findValueByKey(companyName);
if (result) {
    console.log('Компанія знайдена: ', result);
} else {
    console.log(`Компанія ${companyName} не знайдена`);
}
