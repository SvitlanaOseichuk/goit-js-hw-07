
 const itemsNumbers = document.querySelectorAll(".item");
  console.log(`Numbers of categories: ${itemsNumbers.length}`);


  const categoriesProperty = document.querySelectorAll("h2");
  
 categoriesProperty.forEach((liItem) => {
    console.log(`Category: ${liItem.textContent}`);
    console.log(`Elements: ${liItem.nextElementSibling.querySelectorAll("li").length}`);
  })

