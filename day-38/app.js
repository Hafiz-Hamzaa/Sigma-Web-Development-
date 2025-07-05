// ----- DOM : iinerHTML vs innerText
document.querySelector("h1").innerHTML = "<h2>Document Object Model</h2>"
// getAttr & setAtr
document.querySelector("h2").getAttribute("class")
document.querySelector("h2").getAttribute("class","myClass") // setAttribute
// --- Explore more... hasAttr,remove etc..

// createElement through JS snd add 
let btn = document.createElement("button")
btn.innerText = 'Click me'
let body = document.querySelector("body")
body.prepend(btn) // prepend , add , before , after