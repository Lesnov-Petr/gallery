// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.                                       

const isBtnCreateElements = document.querySelector('button[data-action ="render"]')
const isBtnDestroyElevtnts = document.querySelector('button[data-action ="destroy"]')
const isInputQuantityElements = document.querySelector('#controls>input')
const arrayElementov = [];




isBtnCreateElements.addEventListener('click', ()=>console.log(isInputQuantityElements.value));

const createElements = ()=> {
    const element=document.createBoxes('div')
}


console.log(isInputQuantityElements.value);


