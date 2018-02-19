let button 		= document.querySelector('#button')
let name 		= document.querySelector('#name')
let height 		= document.querySelector('#height')
let gender 		= document.querySelector('#gender')
let mass 		= document.querySelector('#mass')



function getInfo() {
  updateWithLoading()
  let randomNumber = Math.floor((Math.random() * 88) + 1)
  let apiUrl = 'https://swapi.co/api/people/' + randomNumber

	axios.get(apiUrl).then(response => {
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
	

}

function updateInfoError() {
	name.innerText = 'Oh no! That person isnt available.'
	height.innerText = ''
	gender.innerText = ''
	mass.innerText = ''
	
	
}

function updateWithLoading() {
	name.innerHTML = '<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>'
	height.innerText = ''
	gender.innerText = ''
	mass.innerText = ''

	
}

button.addEventListener('click', getInfo)

