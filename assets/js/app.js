

let button 		= document.querySelector('#button')
let name 		= document.querySelector('#name')
let height 		= document.querySelector('#height')
let gender 		= document.querySelector('#gender')
let mass 		= document.querySelector('#mass')
let birthYear 	= document.querySelector('#birthYear')
let films 		= document.querySelector('#films')

function getInfo() {
	updateWidthLoading()
	axios.get('https://swapi.co/api/people/18').then(function(response){
	updateInfo(response.data)
}).catch(e => {
	updateInfoError()
})

}

function updateInfo(data) {
	name.innerText = data.name
	height.innerText = `Height: ${data.height}`
	gender.innerText = `Gender: ${data.gender}`
	mass.innerText = `Mass: ${data.mass}`
	birthYear.innerText = `Birth Year: ${data.birth_year}`
	films.innerText = `Films: ${data.films}`
}

function updateInfoError() {
	name.innerText = 'Oh no! That person isnt available.'
	height.innerText = ''
	gender.innerText = ''
	mass.innerText = ''
	birthYear.innerText = ''
	films.innerText = ''
}

function updateWidthLoading() {
	name.innerHTML = '<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>'
	height.innerHTML = ''
	gender.innerText = ''
	mass.innerText = ''
	birthYear.innerText = ''
	films.innerText = ''
}



button.addEventListener('click', getInfo)