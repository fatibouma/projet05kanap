fetch("http://localhost:3000/api/products")

  .then((response) => {
    return response.json();
  })
  .then((object) => {
    for (let product of object) {
        console.log(product);
      items.insertAdjacentHTML(
        'beforeend',
        `<a href="./product.html?id=${product._id}">
                      <article>
                          <img src="${product.imageUrl}" alt="${product.altTxt}" />
                          <h3 class="productName">${product.name}</h3>
                          <p class="productDescription">${product.description}</p>
                      </article>
                  </a> `
      );

  }})
  .catch((error) => {
    console.error(error);
  });