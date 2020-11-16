'use strict'

const store = require('../store')

// This runs if creating a new animal resource was successful.
const onNewAnimalSuccess = function (response) {
  $('#allanimalsresults').text('Great job! We successfully added your new pal')
  $('#intro').hide()
  $('#response').hide()
  $('#newAnimal').trigger('reset')
}

// This runs if creating a new animal resource failed.
const onNewAnimalFailure = function () {
  $('#allanimalsresults').text('Meow! Well, that didnt work.  Try again')
  $('#response').hide()
  $('#newAnimal').trigger('reset')
}

// This runs if updating an animal resource was successful.
const onUpdateAnimalSuccess = function (response) {
  $('#response').text('Woof! No problem, ' + store.user.email)
  $('#update-animal').trigger('reset')
  $('#intro').hide()
}

// This runs if updating an animal resource failed.
const onUpdateAnimalFailure = function (error) {
  $('#response').text(error, 'Meow! Well, that didn\'t work.  Try again.')
  $('#update-animal').trigger('reset')
}

// This runs if deleting an animal resource was successful.
const onDeleteAnimalSuccess = function (response) {
  $('#allanimalsresults').text('This animal has been successfully deleted.')
  $('#intro').hide()
  $('#response').hide()
  $('#destroy-animal').trigger('reset')
}

// This runs if deleting an animal resource failed.
const onDeleteAnimalFailure = function () {
  $('#allanimalsresults').text('Squeak! Well, that didn\'t work.  Try again.')
  $('#destroy-animal').trigger('reset')
}

// This runs if indexing an animal resource was successful.
const onIndexAnimalSuccess = function (res) {
  $('#destroy-animal').show()
  $('#intro').hide()
  $('#response').hide()
  $('#index-animal').trigger('reset')
  const animals = res.animal
  $('#allanimalsresults').text('Here are all the animals you entered so far:')
  animals.forEach(function (animals) {
    const animalsHTML = (`
      <p><b>ID:</b> ${animals._id}</p>
      <p><b>Name:</b> ${animals.name}</p>
      <p><b>Type:</b> ${animals.type}</p>
      <p><b>Breed:</b> ${animals.breed}</p>
      <p><b>Age:</b> ${animals.age}</p>
      <p><b>Health:</b> ${animals.health}</p>
      ***************************************
      `)
    $('#allanimalsresults').append(animalsHTML)
  })
}

// This runs if indexing an animal resource failed.
const onIndexAnimalFailure = function (error) {
  $('#allanimalsresults').text(error, 'Meow! Well, that didnt work.  Try again.')
  $('#response').hide()
  $('#index-animal').trigger('reset')
}

module.exports = {
  onNewAnimalSuccess,
  onNewAnimalFailure,
  onUpdateAnimalSuccess,
  onUpdateAnimalFailure,
  onDeleteAnimalSuccess,
  onDeleteAnimalFailure,
  onIndexAnimalSuccess,
  onIndexAnimalFailure
}
