const categories = document.querySelector('#categories');
const categoriesCount = categories.children.length;
console.log("Number of categories: ", categoriesCount);
console.log(" ");


const category = document.querySelectorAll('.item')
category.forEach((item) => {
    const categoryName = item.firstElementChild.textContent;
    const categoryElementsCount = item.lastElementChild.children.length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElementsCount}`);
    console.log(" ");
})