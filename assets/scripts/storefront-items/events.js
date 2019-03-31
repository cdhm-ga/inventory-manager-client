'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddItem = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.createItem(formData)
    .then(ui.createItemSuccess)
    .catch(ui.errorMessage)
}

const onIndexStorefrontItems = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.getStorefrontItemsSuccess)
    .catch(ui.onIndexFailure)
}

const onUpdateItem = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const storeItemId = $(event.target).data('id')

  api.update(data, storeItemId)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onDeleteItem = function (event) {
  event.preventDefault()

  const id = $(event.target).closest('#item-div').data('id')
  api.destroy(id)
    .then(ui.onDestroySuccess)
    .catch(ui.errorMessage)
}

const eventHandlers = () => {
  $('#create-inventory-item-form').on('submit', onAddItem)
  $('#refresh-button').on('click', onIndexStorefrontItems)
  $('#storefront-table').on('submit', '.update-inventory-item-form', onUpdateItem)
  $('.storefront-table').on('click', onDeleteItem)
}

module.exports = {
  eventHandlers
}
