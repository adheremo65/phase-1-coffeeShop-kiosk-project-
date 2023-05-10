function createCardElement(coffee) {
  const card = document.createElement("div");
  card.classList.add("cardinfo");
  const nameCoffee = document.createElement("h2");
  nameCoffee.innerText = coffee.name;
  const coffeeType = document.createElement("h2");
  coffeeType.innerText = coffee.type;
  const imag = document.createElement("img");
  imag.src = coffee.image;
  imag.classList.add("coffeeImage");
  coffeeType.classList.add("coffeeType");
  card.append(nameCoffee, imag, coffeeType);
  const box = document.querySelector(".contianer");
  box.appendChild(card);
}
const form = document.querySelector("#form")
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  const custmerorder = Object.fromEntries(new FormData(event.target))
  const order = document.querySelector(".orderdItem")
  const h1Tag = document.createElement("h1")
  h1Tag.classList.add('selectedCoffee')
  h1Tag.innerText = custmerorder.coffeeType;
  const quantity = document.createElement("h1")
  quantity.innerText = `quantity: ${custmerorder.quantity}`;
  const size = document.createElement("h1")
  size.innerText = `${custmerorder.size}-size`;
  order.append(h1Tag,size,quantity)})

const cartCollector = document.querySelector(".orderdItem")
const ptag = document.createElement("p")


function increment() {
  var quantityField = document.getElementById("quantity");
  var currentQuantity = parseInt(quantityField.value);
  quantityField.value = currentQuantity + 1;
}

function decrement() {
  var quantityField = document.getElementById("quantity");
  var currentQuantity = parseInt(quantityField.value);
  if (currentQuantity > 1) {
    quantityField.value = currentQuantity - 1;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/ingridents")
    .then((res) => res.json())
    .then((coffees) => coffees.forEach((coffee) => createCardElement(coffee)));
  const button = document.querySelector(".order_menu");
  button.style.textAlign = "left";
  
});
