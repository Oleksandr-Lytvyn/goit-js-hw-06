const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulRef = document.querySelector('ul');
const ListLi = ingredients.map((element) => {
  const liRef = document.createElement('li');
  liRef.classList.add("item")
  liRef.textContent = element;
  return liRef;
});
ulRef.append(...ListLi);
