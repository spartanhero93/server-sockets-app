const FactoryModel = require('../models')

module.exports = client => {
  /** Ask mongooses to send the array of factories to the client */
  FactoryModel.find({}, (err, list) => {
    err
      ? client.emit('Error', 'could not find factories')
      : client.emit('allFactories', list)
  })
}
