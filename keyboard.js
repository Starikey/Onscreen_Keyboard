let textarea = document.querySelector('#textarea')
let keys = document.getElementsByTagName('span')
let shiftKey = document.querySelector('.shift')
let enter = document.querySelector('.enter')
let deleteKey = document.querySelector('.delete')
let spaceBar = document.querySelector('.spacebar')
let closeBtn = document.querySelector('.close')

let keyBoard = document.querySelector('.keyboard')

textarea.addEventListener('focus', function () {
	keyBoard.classList.add('active')
})

closeBtn.addEventListener('click', function () {
	keyBoard.classList.remove('active')
})

for (let key of keys) {
	key.addEventListener('click', function () {
		let keyValue = key.innerHTML
		let textNode = document.createTextNode(keyValue)
		textarea.appendChild(textNode)
	})
}

shiftKey.addEventListener('click', function () {
	for (key of keys) {
		if (key.innerHTML !== key.innerHTML.toUpperCase()) {
			key.innerHTML = key.innerHTML.toUpperCase()
		} else {
			key.innerHTML = key.innerHTML.toLowerCase()
		}
	}
})

enter.addEventListener('click', function () {
	let newLine = document.createElement('br')
	textarea.appendChild(newLine)
})

deleteKey.addEventListener('click', function () {
	let textAreaText = textarea.textContent
	let deletedText = textAreaText.slice(0, textAreaText.length - 1)
	textarea.textContent = deletedText
})

spaceBar.addEventListener('click', function () {
	let space = document.createTextNode(' ')
	textarea.appendChild(space)
})
