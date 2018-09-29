const FactoryModel = require('../models')

module.exports = (client, factory) => {
  const { name } = factory

  /** Searches the DB based and checks if it already exits */
  FactoryModel.findOne({ name }, (error, factoryExist) => {
    if (error) return client.emit('Error",  "Error finding factory')
    if (factoryExist) return client.emit('Error', 'Factory exists')

    const newFactory = new FactoryModel({ ...factory })
    /** If all validation is passed mongooses saves onto MongoDB */
    return newFactory.save(
      saveError =>
        (saveError
          ? client.emit('Error', error)
          : client.emit('addFactory', newFactory))
    )
  })
}
