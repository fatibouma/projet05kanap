let id = (new URL(window.location).searchParams.get("id"));
console.log(id);

fetch("http://localhost:3000/api/products/" + id)
  .then(data => data.json())
  .then(product => {
    console.log(product)
 
  document.querySelector(".item__img").insertAdjacentHTML("afterbegin", `<img src="${product.imageUrl}" alt="${product.altTxt}">`);
    document.querySelector("#title").insertAdjacentHTML("afterbegin", `${product.name}`);
    document.querySelector("#price").insertAdjacentHTML("afterbegin", `${product.price}`);
    document.querySelector("#description").insertAdjacentHTML("afterbegin", `${product.description}`);
    for (let productSelectColor of product.colors) {
      document.querySelector("#colors").innerHTML += `<option value="${productSelectColor}">${productSelectColor}</option>`
    };
    const quantity = document.querySelector("#quantity")
    const idcolors = document.querySelector("#colors")
   
    
const envoyerPanier = document.querySelector("#addToCart")

envoyerPanier.addEventListener("click", (event) =>{
  event.preventDefault();
const numberQuantity = quantity.value;
const choixColors = idcolors.value;
console.log(choixColors); 

let optionProduct = {
  altTxt : product.altTxt,
  imageUrl : product.imageUrl,
  name : product.name,
  idProduitSelectionne: product._id,
  colors : choixColors,
  quantity: numberQuantity,
  price :product.price, 
  
};
console.log(optionProduct);
if (choixColors !== '' && numberQuantity > 0){
  window.location.href = " cart.html";
  //test//
  //  ______________________ LOCALSTORAGE___________________________________

      let productEDLocalstorage = JSON.parse(localStorage.getItem("product"));
      console.log(productEDLocalstorage );

// fonction fenêtre pop up
     
      if(productEDLocalstorage == null ){
        productEDLocalstorage = [];
          productEDLocalstorage.push(optionProduct);
          localStorage.setItem("product", JSON.stringify( productEDLocalstorage));
           console.log(productEDLocalstorage);
           (productEDLocalstorage = JSON.parse(localStorage.getItem("product")))
      }else if (productEDLocalstorage != null){
        for ( i=0 ;i<productEDLocalstorage.length; i++ ){
          if ( productEDLocalstorage[i].idProduitSelectionne == product._id && choixColors == productEDLocalstorage[i].colors){
            return(
              productEDLocalstorage[i].quantity++ ,
              localStorage.setItem("product",JSON.stringify(productEDLocalstorage))
              (productEDLocalstorage = JSON.parse(localStorage.getItem("product")))
              );
          }}
        for ( i=0 ;i<productEDLocalstorage.length; i++ ){
          if ( (productEDLocalstorage[i].idProduitSelectionne == product._id 
            && choixColors != productEDLocalstorage[i].colors)
            || productEDLocalstorage[i].idProduitSelectionne != product._id ){
            return(
              productEDLocalstorage.push(optionProduct),
              localStorage.setItem("product",JSON.stringify(productEDLocalstorage))
              (productEDLocalstorage = JSON.parse(localStorage.getItem("product")))
              )
          }}
 } 
 // popupConfirmation();
    }  else if (choixColors === '') {
       window.confirm(
        'Merci de sélectionner une couleur')
    } else if (numberQuantity <= 0) {
      window.confirm(
        'Merci de sélectionner une quantité')
    } 
})
})









