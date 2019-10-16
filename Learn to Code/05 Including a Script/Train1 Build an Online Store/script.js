var saleItem = "Shirt";

function updateSale() {
  var sale = document.getElementById("sale").innerHTML;
  var update = saleItem + " " + sale;
  document.getElementById("sale").innerHTML = update;
}
console.log(document.getElementById("sale"));
console.log(document.getElementById("sale").innerHTML);
updateSale();
