let menus = document.querySelector("ul")
const open = document.getElementById("open-menu").addEventListener("click",(e)=>{
    menus.style.left=  0 +"%"
    e.target.style.display = 'none'
    const clo = document.getElementById('close-menu')
    clo.style.display = "block"
})
let close = document.getElementById("close-menu").addEventListener('click',(e)=>{
    let o = document.getElementById('open-menu')
    o.style.display = 'block'
    e.target.style.display="none"
    menus.style.left = -100+ "%";
})

let navlinks = document.querySelectorAll('.menus ul li')

for (let i = 0; i < navlinks.length; i++) {
    const element = navlinks[i];
    element.addEventListener('click',(e)=>{
        menus.style.left = -100 +"%"
        document.getElementById("close-menu").style.display="none"
        document.getElementById("open-menu").style.display = 'block'
    })
    
}

var  body = document.querySelector('body')
let white = document.getElementById("white")
let black = document.getElementById("black")
white.addEventListener("click", (e) => {
    console.log("white");
})
console.log(black);