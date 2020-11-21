'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// This is the function to run when add-a-pal is clicked.
const onNewAnimal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.newAnimal(data)
    .then(ui.onNewAnimalSuccess)
    .catch(ui.onNewAnimalFailure)
}

// This is the function to run when update-a-pal is clicked.
const onUpdateAnimal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateAnimal(data)
    .then(ui.onUpdateAnimalSuccess)
    .catch(ui.onUpdateAnimalFailure)
}

// This is the function to run when delete-a-pal is clicked.
const onDeleteAnimal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deleteAnimal(data)
    .then(ui.onDeleteAnimalSuccess)
    .catch(ui.onDeleteAnimalFailure)
}

// This is the function to run when show-a-pal is clicked.
const onIndexAnimal = function (event) {
  event.preventDefault()
  api.indexAnimal()
    .then(ui.onIndexAnimalSuccess)
    .catch(ui.onIndexAnimalFailure)
}

module.exports = {
  onNewAnimal: onNewAnimal,
  onUpdateAnimal: onUpdateAnimal,
  onDeleteAnimal: onDeleteAnimal,
  onIndexAnimal: onIndexAnimal
}
