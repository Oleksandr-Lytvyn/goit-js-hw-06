const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulRef = document.querySelector('ul');
const ListLi = ingredients.map((element) => {
  console.log(element);
  const liRef = document.createElement('li');
  console.log(liRef);
  liRef.textContent = element;
  return liRef;
});
ulRef.append(...ListLi);
