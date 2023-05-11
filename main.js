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
const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const custmerorder = Object.fromEntries(new FormData(event.target));
  const custumerName = document.createElement("h1")
  custumerName.classList.add("custName")
  custmerorder.innerText= custmerorder.name
  const order = document.querySelector(".orderdItem");
  const orderList = document.createElement("ul")
  orderList.classList.add("orderdItem")
  const l1Tag = document.createElement("li");
  l1Tag.classList.add("selectedCoffee");
  l1Tag.innerText = custmerorder.coffeeType;
  const quantity = document.createElement("li");
  quantity.innerText = `quantity: ${custmerorder.quantity}`;
  const size = document.createElement("li");
  size.innerText = `${custmerorder.size}-size`;
  if (size.innerText == "large-size") {
    size.innerText = `${custmerorder.size}-size: 2.99`;
  } else if  (size.innerText == "medium-size") {
    size.innerText = `${custmerorder.size}-size: 1.99`}
    else   
      size.innerText = `${custmerorder.size}-size: 1.49`;
    console.log(order)
    order.append(orderList)
  orderList.append(l1Tag, size, quantity);
  fetch('http://localhost:3000/ingridents',{
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: 
      [
        {
          "firstName": "lora",
          "order": [{ "coffeid": 1, "quantity": 3 }]
        },
    
        {
          "firstName": "Abdilkerim",
          "order": [
            { "coffeName": "macciato", "quantity": 3 },
            { "coffeName": "cappichno", "quantity": 1 }
          ]
        }
      ]
    
  })
  
  
  
  
});


const cartCollector = document.querySelector(".orderdItem");
const ptag = document.createElement("p");

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
  // const button = document.querySelector("cart");
  // button.style.textAlign = "left";
});
