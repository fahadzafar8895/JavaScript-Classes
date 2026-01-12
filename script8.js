const Text = document.getElementById('text')
console.log(Text)
const Pre = document.querySelector('.Pre')
console.log(Pre)
const Pre2 = document.querySelectorAll('.Pre')
console.log(Pre2)
const buttons = document.querySelectorAll('button')
console.log(buttons)
const TextClassName = document.getElementsByClassName('text2')
console.log(TextClassName)
const Heading = document.getElementById('Heading')
function changingText (){
    Text.className = 'container'
    Pre.style.color = 'blue'
    Heading.innerHTML = "JavaScript Advance classes"
    // TextClassName[1].style.color = 'red'
    TextClassName[0].style.color = 'red'
    Pre2.forEach((items) => {return items.style.color = 'green'})
    buttons.forEach(item =>{
       item.style.backgroundColor = 'red'
       item.style.color = 'white'
       return item 
    })
}