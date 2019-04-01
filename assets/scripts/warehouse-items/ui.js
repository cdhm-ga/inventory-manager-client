'use strict'

const showItemsTemplate = require('../templates/warehouse-item.handlebars')

const getWarehouseItemsSuccess = responseData => {
  const showItemsHtml = showItemsTemplate({ items: responseData.items })
  $('#warehouse-items').html(showItemsHtml)
}

// Display an error message to the user
const errorMessage = () => {
  userFeedback('Unable to get warehouse items.')
}

// Function to display user feedback
const userFeedback = message => {
  $('#new-inventory-item-feedback').text(message)
  $('#new-inventory-item-feedback').show()
  setTimeout(() => $('#new-inventory-item-feedback').hide(), 2500)
}

module.exports = {
  errorMessage,
  getWarehouseItemsSuccess
}
