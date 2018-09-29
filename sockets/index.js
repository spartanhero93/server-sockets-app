const _ = require('lodash')
const allFactoryController = require('./allFactories')
const addFactoryController = require('./addFactory')
const removeFactoryController = require('./removeFactory')
const updateFactoryController = require('./updateFactory')

const Factories = client => ({
  addFactory: _.partial(addFactoryController, client),
  allFactories: _.partial(allFactoryController, client),
  removeFactory: _.partial(removeFactoryController, client),
  updateFactory: _.partial(updateFactoryController, client)
})

module.exports = (io, client) => {
  const { addFactory, allFactories, removeFactory, updateFactory } = Factories(
    io
  )

  client.on('addFactory', addFactory)
  client.on('allFactories', allFactories)
  client.on('removeFactory', removeFactory)
  client.on('updateFactory', updateFactory)
}
