const categoriesRef = document.querySelector("ul#categories");
console.log(`В списке ${categoriesRef.children.length} категории.`);

const itemsRef = document.querySelectorAll(".item");
itemsRef.forEach((item) => {
  const nameCategories = item.querySelector("h2");
  const lengthItem = item.querySelector("ul");
  console.log(
    `Категория: ${nameCategories.textContent} \nКоличество элементов: ${lengthItem.children.length}`
  );
});
