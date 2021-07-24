
// const body = document.body
// const div = document.querySelector('div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')
const childOne = document.querySelector('.child')
const childFour = document.getElementsByClassName('child')[3]
const parent2 = childFour.parentElement
const grandparent = childFour.closest('.grandparent')
const parents = Array.from(grandparent.children)

changeColour(parent2)
changeColour(grandparent)

function changeColour(element) {
  element.style.backgroundColor='#333'
}


