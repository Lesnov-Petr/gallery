const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');
const arrayIngredients = [];

ingredients.forEach(element => {
  const itemLiRef = document.createElement('li');
  itemLiRef.textContent = element;
  arrayIngredients.push(itemLiRef);
});
listIngredients.append(...arrayIngredients);
