'use strict'

const store = require('../store')

const onNewAnimalSuccess = function (response) {
  $('#allanimalsresults').text('Great job! We successfully added your new pal')
  $('#intro').hide()
  $('#response').hide()
  $('#newAnimal').trigger('reset')
}

const onNewAnimalFailure = function () {
  $('#allanimalsresults').text('Meow! Well, that didnt work.  Try again')
  $('#response').hide()
  $('#newAnimal').trigger('reset')
}

const onUpdateAnimalSuccess = function (response) {
  $('#response').text('Woof! No problem, ' + store.user.email)
  $('#update-animal').trigger('reset')
  $('#intro').hide()
}

const onUpdateAnimalFailure = function (error) {
  $('#response').text(error, 'Meow! Well, that didn\'t work.  Try again.')
  $('#update-animal').trigger('reset')
}

const onDeleteAnimalSuccess = function (response) {
  $('#allanimalsresults').text('This animal has been successfully deleted')
  $('#intro').hide()
  $('#response').hide()
}

const onDeleteAnimalFailure = function (error) {
  $('#response').text(error, 'Meow! Well, that didn\'t work.  Try again.')
}

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
