


let Quantity = document.getElementById("quantity");
var num = 0;



function Increment(){  
    num = num+1
    Quantity.value = num
}



function Decrement(){
    if(num>0){
        num = num-1
    Quantity.value = num
    }
}

function addToCart(){
    
    let CartTotalQuantity = document.getElementById("quan");
    CartTotalQuantity.innerHTML=Quantity.value;
    
    let CartTotalPrice = document.getElementById("total");
    CartTotalPrice.innerHTML=Quantity.value*125.00;
    alert("item was added in cart");
}

function cartView(){
    if(Quantity===0){
        let w =  document.getElementById("cart-empty");
        w.classList.toggle("cart-empty-none") 
        
    }
    if(Quantity.value>0){
        let w =  document.getElementById("cart-empty");
              w.classList.toggle("cart-have-none")

              let e = document.getElementById("card-val");
        e.classList.toggle("dnone")
    }
    let cartDetail = document.getElementById("cart-details");
    cartDetail.classList.toggle("cart-view");
    let cartItems = document.getElementById("cart-items");
    cartItems.classList.toggle("cart-items-view");
   
    }

