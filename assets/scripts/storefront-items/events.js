'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddItem = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.createItem(formData)
    .then(ui.createItemSuccess)
    .catch(ui.errorMessage)
}

const eventHandlers = () => {
  $('#create-inventory-item-form').on('submit', onAddItem)
}

module.exports = {
  eventHandlers
}
