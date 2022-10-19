console.log("test");
let productEDLocalstorage = JSON.parse(localStorage.getItem("product"));
const positionElement= document.getElementById("cart__items");
for (const element of productEDLocalstorage) { 
positionElement.insertAdjacentHTML(
    'beforeend',
    '<article class="cart__item" data-id="'+ element._id +'"" data-color="' + element.colors +'">'+
'<div class="cart__item__img">'+
  '<img src="' + element.imageUrl + '" alt="' + element.altTxt + '">'+
'</div>'+
'<div class="cart__item__content">'+
  '<div class="cart__item__content__description">'+
    '<h2>' +element.name +  '</h2>'+
    '<p>' + element.colors +'</p>'+
    '<p> ' + element.price + '€</p>'+
  '</div>'+
  '<div class="cart__item__content__settings">'+
    '<div class="cart__item__content__settings__quantity">'+
      '<p>Qté : </p>'+
      '<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="' + element.quantity+'">'+
    '</div>'+
    '<div class="cart__item__content__settings__delete">'+
      '<p class="deleteItem">Supprimer</p>'+
    '</div>'+
  '</div>'+
'</div>'+
'</article>' 
)
} 
//----------MODIFIER LA QUANTITER DANS LA PAGE PANIER
document.querySelectorAll(".itemQuantity").forEach(item => item.addEventListener("change", (e) => {
  let quantity = e.target.closest('.itemQuantity').value 
for (let z = 0; z <quantity.length; z++){
  let id_selectionner_quantite = productEDLocalstorage[z].idProduitSelectionne;
  let colors_selectionner_colors = productEDLocalstorage[z].colors;
  productEDLocalstorage.forEach(element => {
    console.log(element);
    console.log(id_selectionner_quantite);
    if(
     element.idProduitSelectionne == id_selectionner_quantite
&& element.colors == colors_selectionner_colors
    ){
     (productEDLocalstorage[z].quantity = quantity);
     console.log("ok");
    }
  })
  localStorage.setItem("product", JSON.stringify( productEDLocalstorage));
};
console.log(localStorage.getItem("product"));
let quantiteTotalCalcul = [];
// chercher les quantités---------
for( let x = 0; x < productEDLocalstorage.length; x++){
  let quantiteTotalDansPannier = productEDLocalstorage[x].quantity;
  // mettre les quantités dans le variable
  quantiteTotalCalcul.push(quantiteTotalDansPannier);
totalQuantity.textContent = `${eval(quantiteTotalCalcul.join("+"))}`
  };
  //----- prix-total----------
let prixCalcul = [];
// chercher les prix---------s
for( let x = 0; x < productEDLocalstorage.length; x++){
 let prixDansPannier = (productEDLocalstorage[x].price * productEDLocalstorage[x].quantity);
 prixCalcul.push(prixDansPannier);
const reducer = (accumulator , currentValue) => accumulator + currentValue;
const prixTotal = prixCalcul.reduce(reducer);
totalPrice.textContent = `${prixTotal}`
};
}));

// //-----gestion du boutton suprimer -----
let btnSupprimer = document.querySelectorAll('.deleteItem');
console.log(btnSupprimer);

// // selection de l'id du produit 
for(let j = 0; j < btnSupprimer.length; j++){
  btnSupprimer[j].addEventListener("click" , (event) =>{
    event.preventDefault();
    console.log(event);
    let id_selectionner_suppression = productEDLocalstorage[j].idProduitSelectionne;
    let colors_selectionner_suppression = productEDLocalstorage[j].colors;
    productEDLocalstorage = productEDLocalstorage.filter( el => { if(el.idProduitSelectionne != id_selectionner_suppression || el.colors != colors_selectionner_suppression
      ){
        return true
      }
    });
localStorage.setItem("product", JSON.stringify( productEDLocalstorage));
 alert("ce produit a été supprimer du panier");
window.location.href = "cart.html";
});
//-------totalquantite---------
let quantiteTotalCalcul = [];
// chercher les quantités---------
for( let x = 0; x < productEDLocalstorage.length; x++){
  let quantiteTotalDansPannier = productEDLocalstorage[x].quantity;
  // mettre les quantités dans le variable
  quantiteTotalCalcul.push(quantiteTotalDansPannier);
totalQuantity.textContent = `${eval(quantiteTotalCalcul.join("+"))}`
  };
//----- prix-total----------
let prixCalcul = [];
// chercher les prix---------s
for( let x = 0; x < productEDLocalstorage.length; x++){
 let prixDansPannier = (productEDLocalstorage[x].price * productEDLocalstorage[x].quantity);
 prixCalcul.push(prixDansPannier);
const reducer = (accumulator , currentValue) => accumulator + currentValue;
const prixTotal = prixCalcul.reduce(reducer);
totalPrice.textContent = `${prixTotal}`
}};


//---------------------formulaire----
const btnEnvoyerFormulaire = document.querySelector("#order");
 btnEnvoyerFormulaire.addEventListener("click", (e)=>{
  e.preventDefault();
  const formulaireValues = {
    prenom : document.querySelector("#firstName").value,
   nom :document.querySelector("#lastName").value,
    adresse :document.querySelector("#address").value,
    ville :document.querySelector("#city").value,
   email : document.querySelector("#email").value,
  }
  console.log(formulaireValues);
  
//----GESTION VALIDATION DU FORMULAIRE------
const regExPrenomNomVille = (value)=>{
return /^([a-z A-Z]{2,25})?([-]{0,1})?([a-z A-Z]{2,25})$/.test(value);
}
const regExAdresse = (value) =>{
  return /^[0-9]{1,3}[a-z A-Z]{3,25}$/.test(value)
}
const regExEmail = (value) =>{
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
}

function prenomControle(){
  const lePrenom =formulaireValues.prenom;
  if (regExPrenomNomVille(lePrenom)){
    return true;
  }else{
    firstNameErrorMsg.innerHTML = "prenom doit contenir entre 3 et 25 caractéres, chiffre et symbole ne sont pas autorisé";
    return false;
  }
}
function nomControle(){
  const lenom =formulaireValues.nom;
  if (regExPrenomNomVille(lenom)){
    return true;
  }else{
    lastNameErrorMsg.innerHTML = "nom doit contenir entre 3 et 25 caractéres, chiffre et symbole ne sont pas autorisé";
    return false;
  }
}
function villeControle(){
  const laVille =formulaireValues.ville;
  if (regExPrenomNomVille(laVille)){
    return true;
  }else{
  cityErrorMsg.innerHTML = "ville doit contenir entre 3 et 25 caractéres, chiffre et symbole ne sont pas autorisé";
    return false;
  }
}
function adresseControle(){
  const laAdresse =formulaireValues.adresse;
  if (regExAdresse(laAdresse)){
    return true;
  }else{
  addressErrorMsg.innerHTML = "adresse commence par des chiffres et des lettres pas de caractéres spécial ni accent";
    return false;
  }
}
function emailControle(){
  const leEmail =formulaireValues.email;
  if (regExEmail(leEmail)){
    return true;
  }else{
  emailErrorMsg.innerHTML = "L'email n'est pas valide";
    return false;
  }
}
//controle validité formulaire avant envoie dans le local storage
if (prenomControle() && nomControle() && villeControle() && adresseControle() && emailControle() ){
//mettre l'objet "ormulaireValues" dans le local storage
  localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues));
  alert("votre commande à été bien envoyer");
}else{
  alert("Veuillez bien remlir le formulaire");
}
 // metre les valeur du formulaire et mettre les produits selectionnes dans un  objet à envoyer vers le serveur
const aEnvoyer = {
  productEDLocalstorage,
  formulaireValues
}
console.log( aEnvoyer );
   })


 