'use strict'

const store = require('../store')

// This runs when sign up was successful.
const onSignUpSuccess = function (response) {
  $('#intro2').text('Welcome aboard the Ark, ' + response.user.email + '.')
  $('#signUp').trigger('reset')
}

// This runs if sign up failed.
const onSignUpFailure = function () {
  $('#intro2').text('Uhoh! Try again.')
  $('#signUp').trigger('reset')
}

// This runs if sign in was successful.
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#allanimalsresults').show()
  $('#allanimalsresults').text('All aboard the Ark, ' + response.user.email + '!')
  $('#signIn').trigger('reset')
  $('#newAnimal').show()
  $('#signIn').hide()
  $('#signUp').hide()
  $('#index-animal').show()
  $('#sign-out').show()
  $('#changePassword').show()
  $('#update-animal').show()
}

// This runs if sign in failed.
const onSignInFailure = function () {
  $('#intro2').text('Uhoh! Try again.')
  $('#signIn').trigger('reset')
}

// This runs if change password was successful.
const onChangePasswordSuccess = function () {
  $('#changePassword').show()
  $('#allanimalsresultspassword').text('Tweet, tweet! Password updated.')
  $('#changePassword').trigger('reset')
}

// This runs if change password failed.
const onChangePasswordFailure = function () {
  $('#allanimalsresultspassword').text('Uhoh! Try again.')
  $('#changePassword').trigger('reset')
}

// This runs if sign out failed.
const onSignOutFailure = function (error) {
  $('#sign-out').text(error, 'Moo, try again (get it?)')
  $('#sign-out').trigger('reset')
}

// This runs if sign out was successful.
const onSignOutSuccess = function () {
  $('#intro2').text('Woof woof, I mean, uh - see you soon!')
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
  $('#intro').show()
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
