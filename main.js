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
  console.log(event)
  const formAdded = Object.fromEntries(new FormData(event.target))
  console.log(formAdded);

})


// const submitedCart = document.querySelector("#addToCart");
// submitedCart.addEventListener("submit",(e)=>{
  
// })


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
  //     card.addEventListener("click",()=>{
  //      fetch("http://localhost:3000/ingridents",{
  //    method: 'POST',
  //    headers: {
  //      'Content-Type': 'application/json'
  //    },
  //    body: JSON.stringify({
  //      name: 'John Doe',
  //      email: 'john.doe@example.com'
  //    }),
  //  })
  //  .then(response => response.json())
  //  .then(data => console.log(data))
  //  .catch(error => console.error(error))
});

// )})
