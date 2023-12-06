const pageForm = document.getElementById('mainForm')

pageForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const thingInputField = document.getElementById('oneForm')

  //   console.log(thingInputField.value)

  const mansioni = document.createElement('div')
  const bottoni = document.createElement('button')
  const parag = document.createElement('p')
  parag.innerText = thingInputField.value
  parag.classList.add('stofuso')
  bottoni.innerText = 'Elimina'
  bottoni.addEventListener('click', function (e) {
    mansioni.innerHTML = ''
  })
  bottoni.classList.add('buttons')
  parag.addEventListener('click', function (e) {
    parag.classList.toggle('line')
  })
  //   mansioni.innerHTML = `<p>${thingInputField.value}</p>`

  listaFinale = document.getElementById('listone')
  mansioni.appendChild(parag)
  mansioni.appendChild(bottoni)
  listaFinale.appendChild(mansioni)

  thingInputField.value = ''
})
