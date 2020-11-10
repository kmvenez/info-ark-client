'use strict'

const config = require('../config')
const store = require('../store')

// This is my API call for the sign up button.
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

const deleteAnimal = function (data) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/animals/' + data.animal_id,
    method: 'DELETE'
  })
}

const updateAnimal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/animals/' + data.animal_id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

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
