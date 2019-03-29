'use strict'

// runs when storefront item is successfully created
const createItemSuccess = formData => {
  userFeedback('item added to your inventory')
}

// Function to display user feedback
const userFeedback = message => {
  $('#user-feedback').text(message)
  $('#user-feedback').show()
  setTimeout(() => $('#user-feedback').fadeOut(500), 2500)
}

const clearForms = () => {
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const errorMessage = () => {
  userFeedback('Something went wrong')
  clearForms()
}

module.exports = {
  createItemSuccess,
  errorMessage
}
