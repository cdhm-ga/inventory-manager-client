'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const events = require('../storefront-items/events.js')

// SIGN IN
const onSignIn = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(function (responseData) {
      ui.signInSuccess(responseData)
      events.reindex()
    })
    // .then(ui.signInSuccess)
    .catch(ui.errorMessage)
}

// SIGN UP
const onSignUp = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .then(() => api.signIn(formData))
    .then(ui.signInSuccess)
    .catch(ui.errorMessage)
}

// SIGN OUT
const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.errorMessage)
}

// CHANGE PASSWORD
const onChangePassword = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
}

// Toggle showing of sign up and sign in
const onSignInToggle = () => ui.signInToggle()
const onSignUpToggle = () => ui.signUpToggle()

const eventHandlers = () => {
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-out-button').on('click', onSignOut)
  $('#change-password-form').on('submit', onChangePassword)

  // Event listeners to toggle showing of sign up and sign in
  $('.sign-in-toggle').on('click', onSignInToggle)
  $('.sign-up-toggle').on('click', onSignUpToggle)

  // Clears forms when a modal is closed but not submitted
  $('.modal').on('hidden.bs.modal', () => $('form').trigger('reset'))
}

module.exports = {
  eventHandlers
}
