const FactoryModel = require('../models')

module.exports = client => {
  /** Ask mongooses to send the array of factories to the client */
  FactoryModel.find({}, (err, list) => {
    err
      ? client.emit('Error', 'Error could not retrieve list of factories')
      : client.emit('allFactories', list)
  })
}
