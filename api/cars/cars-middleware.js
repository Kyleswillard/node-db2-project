const Cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Cars.getById(req?.params?.id)
if(car) {
  req.car = car
  next()
} else {
  res.status(404).json(`"car with id ${req.params.id} is not found"`)
}
  } catch (err) {
res.status(500).json({message: "Server Error"})
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
   const body = req.body;
  if (body.name && body.vin) {
    next();
  } else {
    res.status(400).json(message: "<field name> is missing")
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
