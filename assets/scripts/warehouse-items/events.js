'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onNewStorefrontItem = () => {
  api.getWarehouseItems()
    .then(ui.getWarehouseItemsSuccess)
    .catch(ui.errorMessage)
}

const eventHandlers = () => {
  $('#new-inventory-item-button').on('click', onNewStorefrontItem)

  // Clears forms when a modal is closed but not submitted
  $('.modal').on('hidden.bs.modal', () => $('form').trigger('reset'))
}

module.exports = {
  eventHandlers
}
