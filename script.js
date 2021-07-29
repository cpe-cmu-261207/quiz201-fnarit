const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
let cal = ''
let b = document.querySelector("#length").value
let a = 620612152 + b

btn_toggle.onclick = () => {
  // your code here
  author.innerHTML = a
}


// // more codes for Search and Reset buttons here

const search = document.querySelector("#search")
const text = document.querySelector("#text")
const span = document.createElement('span')
search.onclick = () => {
  if(text.length > b){
    span.setAttribute('value','#FF0000')
    text.append('span')
  }
}
// const changColor = (ev) => {
//   const text = document.querySelector("#text")
//   const v = document.querySelector("#number").value
//   text.style.color = v
// }

// const text = document.querySelector("#text")
const v = document.querySelector('#color').value
color.addEventListener('click', () =>{
  text.style.color = v
})