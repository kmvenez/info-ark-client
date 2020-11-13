'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// This is the function to run when sign up is clicked.
const onNewAnimal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.newAnimal(data)
    .then(ui.onNewAnimalSuccess)
    .catch(ui.onNewAnimalFailure)
}

// This is the function to run when change password is clicked.
const onUpdateAnimal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateAnimal(data)
    .then(ui.onUpdateAnimalSuccess)
    .catch(ui.onUpdateAnimalFailure)
}

// This is the function to run when sign out is clicked.
const onDeleteAnimal = function (event) {
  event.preventDefault()
  api.deleteAnimal()
    .then(ui.onDeleteAnimalSuccess)
    .catch(ui.onDeleteAnimalFailure)
}

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
