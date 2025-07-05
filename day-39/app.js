let btn = document.querySelector(".btn")
// btn.addEventListener("click", () => {
//     document.querySelector("h1").innerText = "Learning Events"
// })

// explore more events like this mdn documentation (dblclick , mouseover and so on....)

btn.addEventListener("dblclick", () => {
    document.querySelector("h1").innerText = "Learning Events"
})


// benefit of addeventlistner : ap same events per multiple kaam krwaskte hai
// Remove Listener:
let myBtn = document.querySelector(".my-btn")
myBtn.addEventListener("click", () => {
    console.log("Handler 1")
})
myBtn.addEventListener("click", () => {
    console.log("Handler 2")
})
const handlerThree = () => {
    console.log("Handler 3")
}
myBtn.addEventListener("click", handlerThree)
myBtn.addEventListener("click", () => {
    console.log("Handler 4")
})
myBtn.removeEventListener("click",handlerThree)