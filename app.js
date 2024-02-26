const paragraph = document.querySelector('pre')
const text = paragraph.innerText
const scrollbarWidth = 50
const maxFontSize = 30
const widthOfBrowser = document.documentElement.clientWidth - (scrollbarWidth + maxFontSize)
let isStarted = false

function pickRandomNumber(n){
  return Math.floor(Math.random() * n)
}

function pickRandomLetter(text){
  const randomIndex = pickRandomNumber(text.length)
  return text[randomIndex]
}
function createLetter(text){
  console.log('creating letter...')
  const span = document.createElement('span')
  span.className = 'letter'
  span.style.left = pickRandomNumber(widthOfBrowser) + 'px'
  span.style.fontSize = pickRandomNumber(30) + 'px'
  span.innerText = pickRandomLetter(text)
  return span 
}

function startTextAnimation(){
  if(!isStarted){
    paragraph.innerText = ''
    setInterval(function(){
      const letter = createLetter(text)
      document.body.appendChild(letter)
      setInterval(function(){
        letter.style.top = letter.offsetTop + 1 + 'px'
      }, 10)
    }, 100)

    isStarted = true 
  }
}

window.addEventListener('wheel', startTextAnimation)

