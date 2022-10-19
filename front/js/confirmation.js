
let productEnvoyerLocalstorage = JSON.parse(localStorage.getItem(" product"));
// let productEnvoyerLocalstorage = localStorage.getItem(" product");
// let id = (new URL(window.location).searchParams.get("product"));
// console.log(product);
console.log(productEnvoyerLocalstorage);
// localStorage.setItem("product", JSON.stringify( productEnvoyerLocalstorage));
console.log("product.id");
// console.log(product.id);
let  formulaire= JSON.parse(localStorage.getItem(" formulaireValues"));

// console.log(envoiProducts)
const aEnvoyer = {
  productEnvoyerLocalstorage,
  formulaire
}
console.log( aEnvoyer );
   

        fetch("http://localhost:3000/api/producs/order", {
            method: "POST",
            body: JSON.stringify(aEnvoyer),
            headers: {
                "content-type": "application/json",
            }
            
        })

            .then(res => {
                return res.json();
            }).then((data) => {
              console.log(data);
                // window.location.assign("confirmation.html?orderId=" + data.orderId)
            }).catch((error) => {
                console.log(error);
            })
