'use strict'

const config = require('../config')
const store = require('../store')

// This is my API call for the add an animal button.
const newAnimal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/animals',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

// This is my API call for the remove an animal button.
const deleteAnimal = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/animals/' + data.animal.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE',
    data: data
  })
}

// This is my API call for the update an animal button.
const updateAnimal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/animals/' + data.animal.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

// This is my API call for the show all animals button.
const indexAnimal = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/animals',
    method: 'GET'
  })
}

module.exports = {
  newAnimal: newAnimal,
  deleteAnimal: deleteAnimal,
  updateAnimal: updateAnimal,
  indexAnimal: indexAnimal
}
