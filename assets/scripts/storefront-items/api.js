'use strict'

const store = require('../store.js')
const config = require('../config.js')

const createItem = formData => {
  return $.ajax({
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/storefront-items',
    data: formData
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/storefront-items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (formData, id) {
  return $.ajax({
    url: config.apiUrl + '/storefront-items/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/storefront-items/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createItem,
  index,
  update,
  destroy
}
