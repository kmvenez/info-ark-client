'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')

const onAction = require('./auth/events')
const onAnimalAction = require('./animals/events')

$(() => {
  // On initial load, hide change password
  $('#changePassword').hide()
  // On initial load, hide new animal form
  $('#newAnimal').hide()
  // On initial load, hide CRUD actions for ANIMALS
  $('#destroy-animal').hide()
  $('#index-animal').hide()
  $('#update-animal').hide()
  $('#sign-out').hide()
  // On submitting 'sign up', trigger function
  $('#signUp').on('submit', onAction.onSignUp)
  // On submitting 'sign in', trigger function
  $('#signIn').on('submit', onAction.onSignIn)
  // On submitting 'change password', trigger function
  $('#changePassword').on('submit', onAction.onChangePassword)
  // On submitting 'sign out', trigger function
  $('#sign-out').on('submit', onAction.onSignOut)
  // On submitting 'add-a-pal', trigger function
  $('#newAnimal').on('submit', onAnimalAction.onNewAnimal)
  // On submitting 'index animals', trigger function
  $('#index-animal').on('submit', onAnimalAction.onIndexAnimal)
  // On submitting 'update animals', trigger function
  $('#update-animal').on('submit', onAnimalAction.onUpdateAnimal)
  // On submitting 'remove an animal', trigger function
  $('#destroy-animal').on('submit', onAnimalAction.onDeleteAnimal)
})
