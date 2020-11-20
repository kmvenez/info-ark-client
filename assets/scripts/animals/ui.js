'use strict'

const store = require('../store')

// This runs if creating a new animal resource was successful.
const onNewAnimalSuccess = function (response) {
  $('#intro').hide()
  $('#response').hide()
  $('#intro2').text('Great job! We successfully added your new pal.')
  $('#allanimalsresults').text('')
  $('#newAnimal').trigger('reset')
}

// This runs if creating a new animal resource failed.
const onNewAnimalFailure = function () {
  $('#response').hide()
  $('#intro2').text('Meow! Well, that didn\'t work.  Try again.')
  $('#newAnimal').trigger('reset')
}

// This runs if updating an animal resource was successful.
const onUpdateAnimalSuccess = function (response) {
  $('#intro2').text('Woof! No problem, ' + store.user.email + '.')
  $('#intro').hide()
  $('#update-animal').trigger('reset')
}

// This runs if updating an animal resource failed.
const onUpdateAnimalFailure = function (error) {
  $('#intro2').text(error, 'Meow! Well, that didn\'t work.  Try again.')
  $('#update-animal').trigger('reset')
}

// This runs if deleting an animal resource was successful.
const onDeleteAnimalSuccess = function (response) {
  $('#intro').hide()
  $('#response').hide()
  $('#intro2').text('This animal has been successfully deleted.')
  $('#destroy-animal').trigger('reset')
}

// This runs if deleting an animal resource failed.
const onDeleteAnimalFailure = function () {
  $('#intro2').text('Squeak! Well, that didn\'t work.  Try again.')
  $('#destroy-animal').trigger('reset')
}

// This runs if indexing an animal resource was successful.
const onIndexAnimalSuccess = function (res) {
  $('#intro').hide()
  $('#destroy-animal').show()
  $('#response').hide()
  $('#intro2').text('')
  $('#index-animal').trigger('reset')

  const animals = res.animal
  $('#allanimalsresults2').text('Here are all the animals you entered so far:')
  animals.forEach(function (animals) {
    const animalsHTML = (`<br>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg>

      <table class="table table-sm">
  <thead>
    <tr>
      <p><b>Stats:</b> </p>
      <th scope="col"><p><b>Name:</b> ${animals.name}</p></th>
      <th scope="col"><p><b>Type:</b> ${animals.type}</p></th>
      <th scope="col"><p><b>Breed:</b> ${animals.breed}</p></th>
      <th scope="col"><p><b>Age:</b> ${animals.age}</p></th>
      <th scope="col"><p><b>Health:</b> ${animals.health}</p></th>
      <th scope="col"><p><b>Unique ID:</b> ${animals._id}</p></th>
      </tr>
      </thead>
</table>
      `)
    $('#allanimalsresults2').append(animalsHTML)
  })
}

// This runs if indexing an animal resource failed.
const onIndexAnimalFailure = function (error) {
  $('#response').hide()
  $('#intro2').text(error, 'Meow! Well, that didnt work.  Try again.')
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
