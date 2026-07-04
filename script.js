var cartCount = 0;
var cartTotal = 0;


function addToCart(productName, price) {
    cartCount++;
    cartTotal += price;

 
    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("cart-total").innerText = cartTotal.toFixed(2);

   if (countEl) countEl.textContent = cartCount;
  if (totalEl) totalEl.textContent = cartTotal.toFixed(2);
  if (messageEl){
    messageEl.textContent = name + " added to your bag.";
  }


    document.getElementById("cart-message").innerText = productName + " added to cart!";
}

function validateForm(event){
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("form-feedback");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === ""){
    feedback.textContent = "Please fill in every field before sending.";
    feedback.className = "show error";
    return;
  }

  if (!emailPattern.test(email)){
    feedback.textContent = "That email address doesn't look right — please check it.";
    feedback.className = "show error";
    return;
  }

  feedback.textContent = "Thanks, " + name + " — we'll reply to " + email + " within one business day.";
  feedback.className = "show ok";
  document.getElementById("contact-form").reset();
}