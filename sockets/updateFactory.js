const FactoryModel = require('../models')

module.exports = (client, factory) => {
  const incomingFactory = factory
  const { _id } = incomingFactory

  /** Mongoose attempts to find the factory based on the
   *  id givin to it while it was created on the Database
   */

  FactoryModel.findOne({ _id }, (err, foundFactory) => {
    if (err) {
      return client.emit(
        'Error',
        'Error has been found while trying to update the factory'
      )
    }
    if (!foundFactory) {
      return client.emit('Error', 'Factory does not exist')
    }

    /** If the validation is passed the original factory gets its values overwritten
     *  with Object.assign. Then the new factory gets sent to the client
     */
    const newFactory = Object.assign(foundFactory, incomingFactory)
    return newFactory.save((saveError, updatedFactory) => {
      if (saveError) {
        return client.emit('Error', 'Error occurred while updating factory')
      }
      return client.emit('updateFactory', updatedFactory)
    })
  })
}
