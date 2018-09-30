const _ = require('lodash')
const allFactoryController = require('./allFactories')
const addFactoryController = require('./addFactory')
const removeFactoryController = require('./removeFactory')
const updateFactoryController = require('./updateFactory')

/** listen to emits from client, and execute them with
 *  the respective controllers
 */
module.exports = (io, client) => {
  client.on('addFactory', _.partial(addFactoryController, io))
  client.on('allFactories', _.partial(allFactoryController, io))
  client.on('removeFactory', _.partial(removeFactoryController, io))
  client.on('updateFactory', _.partial(updateFactoryController, io))
}
