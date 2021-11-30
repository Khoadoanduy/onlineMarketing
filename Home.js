let circle = document.querySelector(".color-option");
 
    circle.addEventListener("click", (e)=>{
      let target = e.target;
      if(target.classList.contains("circle")){
        circle.querySelector(".active").classList.remove("active");
        target.classList.add("active");
        document.querySelector(".main-images .active").classList.remove("active");
        document.querySelector(`.main-images .${target.id}`).classList.add("active");
      }
    });
    let circle1 = document.querySelector(".color-option1");
 
    circle1.addEventListener("click", (e)=>{
      let target = e.target;
      if(target.classList.contains("circle1")){
        circle1.querySelector(".active1").classList.remove("active1");
        target.classList.add("active1");
        document.querySelector(".main-images1 .active1").classList.remove("active1");
        document.querySelector(`.main-images1 .${target.id}`).classList.add("active1");
      }
    });
    let circle2 = document.querySelector(".color-option2");
 
    circle2.addEventListener("click", (e)=>{
      let target = e.target;
      if(target.classList.contains("circle2")){
        circle2.querySelector(".active2").classList.remove("active2");
        target.classList.add("active2");
        document.querySelector(".main-images2 .active2").classList.remove("active2");
        document.querySelector(`.main-images2 .${target.id}`).classList.add("active2");
      }
    });
    let circle3 = document.querySelector(".color-option3");
 
    circle3.addEventListener("click", (e)=>{
      let target = e.target;
      if(target.classList.contains("circle3")){
        circle3.querySelector(".active3").classList.remove("active3");
        target.classList.add("active3");
        document.querySelector(".main-images3 .active3").classList.remove("active3");
        document.querySelector(`.main-images3 .${target.id}`).classList.add("active3");
      }
    });
/**** END OF COLOR SELECTION ****/

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('iphone-case-name')[0].innerText
  var price = shopItem.getElementsByClassName('price_num')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('main-images')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 1000) / 1
  document.getElementsByClassName('cart-total-price')[0].innerText = 'VNĐ ' + total
}