const db = require('../../data/db-config')


const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').first('*').where({id})
}

const create = async (newCar) => {
  // DO YOUR MAGIC
  const ids = await db('cars').insert(newCar)
  return getById(ids[0])
}

module.exports = {
  getAll, getById, create
}