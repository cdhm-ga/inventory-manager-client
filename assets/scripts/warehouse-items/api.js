'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getWarehouseItems = () => {
  return $.ajax({
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/warehouse'
  })
}

module.exports = {
  getWarehouseItems
}
