var AllProducts = document.querySelectorAll(" .perant .div1  ")
 var div1 = document.querySelector("#content")
 var btn1 = document.querySelector("#btn1")
var x =document.querySelector("#price")
 var totalPrice = 0;

 AllProducts.forEach( function (item) {
    item.onclick = function () {
        totalPrice +=   parseInt (item.getAttribute ("price")) 
        
        div1.innerHTML += item.textContent + " <br>"

        if (div1.innerHTML != ""){
            btn1.style.display = "block";
            btn1.style.backgroundColor = " rgb(26, 108, 231)"
            btn1.style.color = "white"
            
        }
    }
 })

 btn1.onclick = function () {
    x.innerHTML+= totalPrice +" $ <br>";  
 }
 