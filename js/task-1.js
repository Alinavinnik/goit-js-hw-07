const numberOfCategories = document.querySelectorAll('.item');
const result = `Number of Categories: ${numberOfCategories.length}`;
console.log(result);

const titleCategory = document.querySelectorAll('.title');
titleCategory.forEach(item => {
  const ulElem = item.nextElementSibling;
  console.log(`Category: ${item.textContent}`);
  console.log(`Elements: ${ulElem.children.length}`);
});
