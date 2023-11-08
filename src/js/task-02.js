const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let itemsList = [];
const ulIngredients = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.classList.add("item");
  itemsList.push(newLi);

});
ulIngredients.append(...itemsList);

