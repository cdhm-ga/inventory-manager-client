'use strict'
const showItemsTemplate = require('../templates/storefront_item.handlebars')

// runs when storefront item is successfully created
const createItemSuccess = formData => {
  userFeedback('Item added to inventory.')
  clearForms()
  $('#new-inventory-item-modal').modal('hide')
}

// Function to display user feedback
const userFeedback = message => {
  $('#user-feedback').text(message)
  $('#user-feedback').show()
  setTimeout(() => $('#user-feedback').hide(), 2500)
}

const clearForms = () => {
  $('.update-inventory-item-form').trigger('reset')
}

const errorMessage = () => {
  userFeedback('Something went wrong')
  clearForms()
}

const getStorefrontItemsSuccess = responseData => {
  $('#storefront-table').text('')
  const showItemsHtml = showItemsTemplate({ items: responseData.items })
  $('#storefront-table').show()
  $('#storefront-table').append(showItemsHtml)
}

const onIndexFailure = function () {
  $('#user-feedback').text('Error on getting items')
  $('#user-feedback').removeClass()
  $('#user-feedback').addClass('failure')
  $('form').trigger('reset')
}

const onUpdateSuccess = function (id) {
  userFeedback('Item successfully updated')
  $(`#update-inventory-item-modal-${id}`).modal('hide')
  clearForms()
}

const onUpdateFailure = function () {
  $('#modal-feedback').text('Error updating item.')
  setTimeout(() => $('#modal-feedback').text(''), 2500)
}

const onCreateItemFailure = () => {
  $('#modal-feedback').text('Error creating item.')
  setTimeout(() => $('#modal-feedback').text(''), 2500)
}

const onDestroySuccess = function () {
  userFeedback('Item removed from inventory.')
}

module.exports = {
  createItemSuccess,
  errorMessage,
  getStorefrontItemsSuccess,
  onIndexFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onDestroySuccess,
  onCreateItemFailure
}
