'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const auth = require('./auth/events.js')
const warehouseItems = require('./warehouse-items/events.js')
const storefrontItems = require('./storefront-items/events.js')

$(() => {
  auth.eventHandlers()
  warehouseItems.eventHandlers()
  storefrontItems.eventHandlers()
})
