// DO YOUR MAGIC
const express = require('express')
const Cars = require('./cars-model')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const cars = await Cars.getAll()
    res.json(cars)
  } catch (err) {
res.status(500).json({message: "Server Error!"})
  }
})

router.get('/:id', async (req, res) => {
  try {
const cars = await Cars.getById(req.body)
res.json(cars)
  } catch (err) {
    res.status(500).json({message: "Server Error!"})
  }
})

router.post('/', async (req, res) => {
  try {
const newCar = await Cars.create(req.body)
res.status(201).json(newCar)
  } catch (err) {
    res.status(500).json({message: "Server Error!"})
  }
})
module.exports = router