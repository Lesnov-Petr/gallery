const listCategories = document.querySelector("#categories").children;

const getCategories = ([...array]) => {
  let message = `В списке ${array.length} категории` + "\n";
  array.forEach(
    (item, idx) =>
      (message +=
        `Категория: ${array[idx].querySelector("h2").textContent}` +
        "\n" +
        `Количество элементов: ${array[idx].querySelectorAll("li").length}` +
        "\n")
  );
  return message;
};

console.log(getCategories(listCategories));

// const categoriesQuantity = document.querySelectorAll("#categories .item");
// console.log(`В списке ${categoriesQuantity.length} категории.`);

// categoriesQuantity.forEach((category) => {
//   const categoriesName = category.querySelector("ul h2").innerHTML;
//   const elementsQuantity = category.querySelectorAll("ul li");
//   console.log(
//     `Категория: ${categoriesName}\nКоличество элементов: ${elementsQuantity.length}`
//   );
// });
