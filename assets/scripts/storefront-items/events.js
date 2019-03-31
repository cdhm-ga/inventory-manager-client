'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onAddItem = event => {
  event.preventDefault()
  console.log('event.target is: ', (event.target))

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  console.log(store.user.token)
  api.createItem(formData)
    .then(ui.createItemSuccess)
    .catch(ui.errorMessage)
}

const onIndexStorefrontItems = function (event) {
  event.preventDefault()
  console.log(event)
  api.index()
    .then(ui.getStorefrontItemsSuccess)
    .catch(ui.onIndexFailure)
}

const onUpdateItem = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  const storeItemId = $(event.target).data('id')
  api.update(data, storeItemId)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const eventHandlers = () => {
  $('#create-inventory-item-form').on('submit', onAddItem)
  $('#refresh-button').on('click', onIndexStorefrontItems)
  $('#storefront-table').on('submit', '.update-inventory-item-form', onUpdateItem)
}

module.exports = {
  eventHandlers
}
