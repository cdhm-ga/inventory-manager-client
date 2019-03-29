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

module.exports = {
  createItem
}
