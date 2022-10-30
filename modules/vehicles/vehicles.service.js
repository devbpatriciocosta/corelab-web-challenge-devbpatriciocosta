import NewCar from './vehicles.model'

export const addNewCarUser = async (body) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newcar = {
      ...body
    }
    const dbNewCar = await NewCar.create(newcar)
    return dbNewCar
  } catch (err) {
    throw err
  }
}

export const getCars = async (limit = 21) => {
  return await NewCar.find().sort({ carYear: -1 }).limit(limit)
}

export const deleteCar = async (id) => {
  return await NewCar.findOneAndDelete({
    _id: id
  })
}

export const editCar = async (body) => {
  return await NewCar.findOneAndUpdate(
    {
      _id: body._id
    },
    {
      carModel: body.carModel,
      carBrand: body.carBrand,
      carColor: body.carColor,
      carPlate: body.carPlate,
      carPrice: body.carPrice,
      carDescription: body.carDescription,
      carYear: body.carYear,
      isLiked: body.isLiked
    },
    {
      new: true
    }
  )
}
