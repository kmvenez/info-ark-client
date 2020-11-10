'use strict'

const store = require('../store')

const onNewAnimalSuccess = function (response) {
  $('#response').text('Great job! We successfully added your new pal')
}

const onNewAnimalFailure = function () {
  $('#response').text('Meow! Well, that didnt work.  Try again')
}

const onUpdateAnimalSuccess = function (response) {
  $('#response').text('Woof! No problem, ' + store.user.email)
}

const onUpdateAnimalFailure = function (error) {
  $('#response').text(error, 'Meow! Well, that didn\'t work.  Try again.')
}

const onDeleteAnimalSuccess = function (response) {
  $('#response').text('This animal has been successfully deleted')
}

const onDeleteAnimalFailure = function (error) {
  $('#response').text(error, 'Meow! Well, that didn\'t work.  Try again.')
}

const onIndexAnimalSuccess = function (res) {
  const animals = res.animal
  console.log(animals)
  $('#allanimalsresults').text('Here are all the animals you entered so far')
  animals.forEach(function (animals) {
    const animalsHTML = (`
      <p>ID: ${animals._id}</p>
      <p>name: ${animals.name}</p>
      <p>breed: ${animals.breed}</p>
      <p>age: ${animals.age}</p>
      <p>health: ${animals.health}</p>
      `)
    $('#allanimalsresults').append(animalsHTML)
  })
}

const onIndexAnimalFailure = function (error) {
  $('#allanimalsresults').text(error, 'Meow! Well, that didnt work.  Try again.')
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
