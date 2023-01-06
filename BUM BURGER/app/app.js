const box = document.querySelector(".burger__content-reverse");
const btns = document.querySelectorAll(".main__content-btn");
const total = document.querySelector(".main__content-price");
const buttons = document.querySelectorAll('.main__content-button');
const chek = document.querySelector('.main__chek-wrapper');
const chekClose = document.querySelector('.main__chek-close');
// 
// 

let totalPrice = 2;
total.textContent = `Jami Narxi: $${totalPrice}`;
  
  
  
  
  
  
  let api = {
  cheese: {
    price: 2,
    img: "images/cheese.svg",
  },
  meat: {
    price: 5,
    img: "images/meat.svg",
  },
  onion: {
    price: 1,
    img: "images/onion.svg",
  },
  salad: {
    price: 1,
    img: "images/salad.svg",
  },
  tomato: {
    price: 2,
    img: "images/tomato.svg",
  },
  pickle: {
    price: 3,
    img: "images/pickle.svg",
  },
};





function createLayer(arg) {
  const layer = document.createElement("div");
  layer.classList.add("burger__content-slice", `${arg}`);

  const img = document.createElement("img");
  img.setAttribute("src", api[arg].img);

  layer.append(img);
  box.append(layer);

  totalPrice += api[arg].price;
  total.textContent = `Jami Narxi: $${totalPrice}`;

  newPrice = totalPrice
}


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("cheese")) {
      createLayer("cheese");
    } else if (btn.classList.contains("meat")) {
      createLayer("meat");
    } else if (btn.classList.contains("onion")) {
      createLayer("onion");
    } else if (btn.classList.contains("salad")) {
      createLayer("salad");
    } else if (btn.classList.contains("tomato")) {
      createLayer("tomato");
    } else if (btn.classList.contains("pickle")) {
      createLayer("pickle");
    }
  });
});



/// buttun 
box.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('cheese')) {
    totalPrice -= api.cheese.price;
    total.textContent = `Narxi: $${totalPrice}`;
  } else if (e.target.parentElement.classList.contains('meat')) {
    totalPrice -= api.meat.price;
    total.textContent = `Narxi: $${totalPrice}`;
  } else if (e.target.parentElement.classList.contains('onion')) {
    totalPrice -= api.onion.price;
    total.textContent = `Narxi: $${totalPrice}`;
  } else if (e.target.parentElement.classList.contains('salad')) {
    totalPrice -= api.salad.price;
    total.textContent = `Narxi: $${totalPrice}`;
  } else if (e.target.parentElement.classList.contains('tomato')) {
    totalPrice -= api.tomato.price;
    total.textContent = `Narxi: $${totalPrice}`;
  } else if (e.target.parentElement.classList.contains('pickle')) {
    totalPrice -= api.pickle.price;
    total.textContent = `Narxi: $${totalPrice}`;
  }
  e.target.parentElement.remove()
})


buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('red')) {
      totalPrice = 2;
      total.textContent = `Jami Narxi: $${totalPrice}`;
      box.innerHTML = ''
    } else if (button.classList.contains('blue')) {
     
      const now = new Date();      
     
    }
  })
})


