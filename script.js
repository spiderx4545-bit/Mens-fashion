
let cart = [];

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function addToCart(product){
  cart.push(product);
  updateCart();
}

function updateCart(){
  const list = document.getElementById('cartList');
  list.innerHTML = '';
  cart.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function checkout(){
  if(cart.length === 0){
    alert('Cart is empty');
  } else {
    alert('Proceeding to checkout (Demo)');
  }
}
