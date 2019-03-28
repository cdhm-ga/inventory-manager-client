'use strict'

const store = require('../store.js')
const events = require('../events/events.js')

// Display an error message to the user
const errorMessage = () => {
  userFeedback('Something went wrong')
  clearForms()
}

// Clears all authentication forms
const clearForms = () => {
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

// SIGN IN
const signInSuccess = responseData => {
  // Store user data in `store.js`
  store.user = responseData.user
  clearForms()
  // Show nav buttons that should only be visible to signed in users
  $('.nav-buttons').fadeIn(500)
  // Hide auth forms that should only be visible when not signed in
  $('#auth-forms').fadeOut(500)
  // TODO
  // Index store's inventory and dispaly on screen
  // If inventory is empty, display a message (so it's clear there is no error)
}

// SIGN UP
const signUpSuccess = () => {
  clearForms()
  $('#sign-up-form').hide()
  $('#sign-in-form').fadeIn(500)
}

// SIGN OUT
const signOutSuccess = () => {
  $('#content').empty()
  userFeedback('Sign out successful')
  store.user = null
  $('.nav-buttons').fadeOut(500)
  $('#auth-forms').fadeIn(500)
}

// CHANGE PASSWORD
const changePasswordSuccess = () => {
  userFeedback('Password successfully changed')
  clearForms()
  $('#change-password-modal').modal('hide')
}

// Toggles sign up form to sign in form
const signInToggle = () => {
  $('#sign-up-form').hide()
  $('#sign-in-form').fadeIn(500)
  clearForms()
}

// Toggles sign in form to sign up form
const signUpToggle = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').fadeIn(500)
  clearForms()
}

// Displays user feedback on change password modal
const changePasswordError = () => {
  $('#change-pw-feedback').text('Something went wrong')
  $('#change-pw-feedback').show()
  setTimeout(() => $('#change-pw-feedback').fadeOut(500), 5000)
  clearForms()
}

// Function to display user feedback
const userFeedback = message => {
  $('#user-feedback').text(message)
  $('#user-feedback').show()
  setTimeout(() => $('#user-feedback').fadeOut(500), 2500)
}

module.exports = {
  errorMessage,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordError,
  signInToggle,
  signUpToggle
}
