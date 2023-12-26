
 const itemsNumbers = document.querySelectorAll(".item");
  console.log(`Numbers of categories: ${itemsNumbers.length}`);


  itemsNumbers.forEach((liItem) => {

    const category = liItem.querySelector("h2").textContent;
    const elements = liItem.querySelectorAll("li").length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${elements}`);
  })

