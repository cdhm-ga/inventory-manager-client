'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddItem = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.createItem(formData)
    .then(function () {
      ui.createItemSuccess()
      reindex()
    })
    .catch(ui.onCreateItemFailure)
}

const onUpdateItem = function (event) {
  event.preventDefault()

  const formData = getFormFields(event.target)
  const id = $(event.target).data('id')

  api.update(formData, id)
    .then(function () {
      ui.onUpdateSuccess(id)
      reindex()
    })
    .catch(ui.onUpdateFailure)
}

const onDeleteItem = function (event) {
  event.preventDefault()

  const id = $(event.target).data('id')

  api.destroy(id)
    .then(function () {
      ui.onDestroySuccess()
      reindex()
    })
    .catch(ui.errorMessage)
}

const reindex = () => {
  api.index()
    .then(ui.getStorefrontItemsSuccess)
    .catch(ui.errorMessage)
}

const refresh = () => {
  api.index()
    .then(ui.refreshSuccess)
    .catch(ui.errorMessage)
}

const eventHandlers = () => {
  $('#create-inventory-item-form').on('submit', onAddItem)
  $('#refresh-button').on('click', refresh)
  $('#storefront-table').on('submit', '.update-inventory-item-form', onUpdateItem)
  $('#storefront-table').on('click', '.delete-storefront-item-button', onDeleteItem)
  $('.storefront-table').on('hidden.bs.modal', () => $('form').trigger('reset'))
}

module.exports = {
  eventHandlers,
  reindex
}
