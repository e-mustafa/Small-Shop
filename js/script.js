

var productInfo = document.querySelectorAll(".card .card-title");
var addToCart = document.querySelectorAll(".addToCart");
var addedProduct = document.querySelector("#addedProduct");

var cartBadge = document.querySelector(".cart-badge");
var subTotalCart = document.querySelector(".sub-total span");
var checkoutBtn = document.querySelector(".sub-total .checkout");
var clearBtn = document.querySelector(".sub-total .clear");
   checkoutBtn.style.visibility = "hidden";
   clearBtn.style.visibility = "hidden";
var itemsCount = 0;
var subTotal = 0

console.log(checkoutBtn);


console.log(addToCart);

addToCart.forEach( function (product) {
   product.onclick = function () {
      subTotal += +product.getAttribute("price");

      addedProduct.innerHTML +=
        "<div>" +
         "<img src=" +
         product.getAttribute("img-src") +
         " >" +
         product.getAttribute("product-item") +
        "</div>";

      itemsCount += 1;
      cartBadge.innerHTML = itemsCount;
      subTotalCart.innerHTML = subTotal;

      if(subTotal > 0){
         checkoutBtn.style.visibility = "visible";
         clearBtn.style.visibility = "visible";
      }
   };
});


clearBtn.onclick= function(){
   addedProduct.innerHTML = " ";
   itemsCount = 0;
   subTotal = 0;
   cartBadge.innerHTML = itemsCount;
   subTotalCart.innerHTML = subTotal;

   if (subTotal <= 0) {
      checkoutBtn.style.visibility = "hidden";
      clearBtn.style.visibility = "hidden";
   }
}