const numberOfCategories = document.querySelectorAll('.item');
const result = `Number of Categories: ${numberOfCategories.length}`;
console.log(result);

numberOfCategories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
