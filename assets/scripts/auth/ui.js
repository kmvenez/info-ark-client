'use strict'

const store = require('../store')

// This runs when sign up was successful.
const onSignUpSuccess = function (response) {
  $('#response').text('Welcome, ' + response.user.email)
  $('#signUp').trigger('reset')
}

// This runs if sign up failed.
const onSignUpFailure = function (error) {
  $('#response').text(error, 'Uhoh! Try again.')
  $('#signUp').trigger('reset')
}

// This runs if sign up was successful.
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#response').text('Welcome, ' + response.user.email)
  $('#signIn').trigger('reset')
  $('#newAnimal').show()
  $('#signIn').hide()
  $('#signUp').hide()
  $('#index-animal').show()
  $('#sign-out').show()
  $('#changePassword').show()
  $('#update-animal').show()
  $('#intro').show()
}

// This runs if sign up failed.
const onSignInFailure = function () {
  $('#signIn').text('Uhoh! Try again.')
  $('#signIn').trigger('reset')
}

// This runs if change password was successful.
const onChangePasswordSuccess = function () {
  $('#changePassword').show()
  $('#changePassword').text('Success - password updated.')
  $('#changePassword').trigger('reset')
}

// This runs if change password failed.
const onChangePasswordFailure = function (error) {
  $('#changePassword').text(error, 'Oh no, try again.')
  $('#changePassword').trigger('reset')
  $('#changePassword').show()
}

// This runs if sign out failed.
const onSignOutFailure = function (error) {
  $('#sign-out').text(error, 'Try again.')
  $('#sign-out').trigger('reset')
}

// This runs if sign out was successful.
const onSignOutSuccess = function (response) {
  $('#response').text('See you later ' + store.user.email)
  $('#sign-out').trigger('reset')
  $('#newAnimal').hide()
  $('#destroy-animal').hide()
  $('#index-animal').hide()
  $('#update-animal').hide()
  $('#changePassword').hide()
  $('#sign-out').hide()
  $('#allanimalsresults').hide()
  $('#signIn').show()
  $('#signUp').show()
  $('#intro').hide()
  store.user = null
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutFailure,
  onSignOutSuccess
}
