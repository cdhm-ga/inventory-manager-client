'use strict'

const store = require('../store.js')

// Display an error message to the user
const errorMessage = () => {
  userFeedback('Something went wrong.')
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
  // Show menu button that should only be visible to signed in users
  $('.menu-button').show()
  // Hide auth forms that should only be visible when not signed in
  $('#auth-forms').hide()
  // Show new items and index refresh buttons
  $('#refresh-button, #new-inventory-item-button, #storefront-table').show()
}

// SIGN UP
const signUpSuccess = () => {
  clearForms()
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
}

// SIGN OUT
const signOutSuccess = () => {
  $('#content').empty()
  userFeedback('Sign out successful')
  store.user = null
  $('.menu-button').show()
  $('#sign-up-form, #refresh-button, #new-inventory-item-button, #storefront-table').hide()
  $('#storefront-table').text('')
  $('#sign-in-form').show()
  $('#auth-forms').show()
}

// CHANGE PASSWORD
const changePasswordSuccess = () => {
  clearForms()
  $('#change-pw-body').hide()
  $('#change-pw-success').show()
}

const onShowChangePassword = () => {
  $('#change-pw-body').show()
  $('#change-pw-success').hide()
}

// Toggles sign up form to sign in form
const signInToggle = () => {
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  clearForms()
}

// Toggles sign in form to sign up form
const signUpToggle = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').show()
  clearForms()
}

// Displays user feedback on change password modal
const changePasswordError = () => {
  $('#change-pw-feedback').text('Something went wrong.')
  $('#change-pw-feedback').show()
  setTimeout(() => $('#change-pw-feedback').hide(), 5000)
  clearForms()
}

// Function to display user feedback
const userFeedback = message => {
  $('#user-feedback').text(message)
  $('#user-feedback').show()
  setTimeout(() => $('#user-feedback').hide(), 2500)
}

module.exports = {
  errorMessage,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordError,
  signInToggle,
  signUpToggle,
  onShowChangePassword
}
