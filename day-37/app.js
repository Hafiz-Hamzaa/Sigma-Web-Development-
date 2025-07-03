// ---- Dom : (Document Object Model)
// ---- Parent , Children & Sibling Nodes
// --- 3 Main Nodes in DOM : textNodes , commentNodes , elementNodes

// document.body.children : ye body kai childrens deta hai sb 
// document.body.firstChild : ye apko text node dega --- same as last
// document.body.firstElementChild : ye apko fist html ka element dega --- same as last
// document.body.childNodes : ye sb childnodes dega
// document.body.firstElementChild.firstElementChild.parentElement : ye apko parent element bh dega
// document.body.firstElementChild.firstElementChild.nextElementSibling : ye apko sibling bh deta hai  --- previous bh dega

// get element with id , class , tag and so on....
// most convenient selection to your html element by queryselector

document.getElementById("b-3").style.backgroundColor = 'green'

// agr all use kr rhai ye Nodelist return krega isko apko iterate krna pary ga
let box = document.querySelectorAll(".box")
box.forEach((e) => {
    e.style.backgroundColor = 'pink'
})

// Explore more selection ...... by yourself