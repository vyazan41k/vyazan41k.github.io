const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsHtml = document.querySelector("#ingredients");

const createList = ingredients.map((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  return li;
});

ingredientsHtml.append(...createList);
