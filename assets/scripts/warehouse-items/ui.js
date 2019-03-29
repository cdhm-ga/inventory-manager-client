'use strict'

const showItemsTemplate = require('../templates/warehouse-items.handlebars')

const getWareHouseItemsSuccess = responseData => {
  const showItemsHtml = showItemsTemplate({ items: responseData.items })
  $('#warehouse-items').append(showItemsHtml)
}

// Display an error message to the user
const errorMessage = () => {
  userFeedback('Unable to get warehouse items.')
}

// Function to display user feedback
const userFeedback = message => {
  $('#new-inventory-item-feedback').text(message)
  $('#new-inventory-item-feedback').show()
  setTimeout(() => $('#new-inventory-item-feedback').fadeOut(500), 2500)
}

module.exports = {
  errorMessage,
  getWareHouseItemsSuccess
}
