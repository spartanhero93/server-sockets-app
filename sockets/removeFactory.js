const FactoryModel = require('../models')

module.exports = (client, id) => {
  /** Mongoose receives an id from a factory the client provided, then
   *  it attempts to find it based on the id.
   */

  FactoryModel.findOne({ _id: id }, error => {
    error
      ? client.emit('Error', 'could not continue due to error')
      : /** If validation is passed it deletes from the DB,
       *  then it sends the id of the deleted factory to the client.
       */
        FactoryModel.deleteOne({ _id: id }, deleteError => {
          deleteError
            ? client.emit('Error', 'Problem deleting factory')
            : client.emit('removeFactory', id)
        })
  })
}
