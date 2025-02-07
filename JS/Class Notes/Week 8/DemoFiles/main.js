//By ID
//target elements by id, class, tag
// change style/attributes with js
const mainHeading = document.querySelector('#main-heading')
// console.log(mainHeading)
const paragraphs = document.getElementsByTagName('p')

mainHeading.style.color = 'green'
mainHeading.hidden = false
const elements = document.getElementsByTagName("h2")
const elements2 = elements[0]
// elements2.style.color = "red"
console.log(elements2.classList.add('highlight'))
elements2.classList.remove('highlight')

// querySelector for one, querySelectorAll for several
// Adding to the page
// const 
const sampleText = document.querySelector('.sample-text')
sampleText.innerText = '<ol> <li>hello</li> <li>hello</li> <li>hello</li> </ol>'
// sampleText.innerHTML = '<ol> <li>hello</li> <li>hello</li> <li>hello</li> </ol>'
