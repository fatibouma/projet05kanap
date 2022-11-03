//recuperation de l'id de la commande//
let orderId= (new URL(window.location).searchParams.get("orderId"));
console.log(orderId);
// INJECT HTML
document.querySelector("#orderId").insertAdjacentHTML("afterbegin", orderId);
 