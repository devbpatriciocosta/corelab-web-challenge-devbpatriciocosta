import createHandler from '../../../lib/middlewares/nextConnect'

import validate from '../../../lib/middlewares/validation'

import {
  newCarSchema,
  deleteNewCarSchema,
  editCarSchema
} from '../../../modules/vehicles/vehicles.schema'

import { addNewCarUser, deleteCar, editCar } from '../../../modules/vehicles/vehicles.service'

const addNewCar = createHandler()

addNewCar
  .post(validate({ body: newCarSchema }), async (req, res) => {
    try {
      const newCar = await addNewCarUser(req.body)
      res.status(201).json(newCar)
    } catch (err) {
      return res.status(400).send(err.message)
    }
  })
  .delete(validate(deleteNewCarSchema), async (req, res) => {
    try {
      const deletedCar = await deleteCar(req.body.id)
      if (deletedCar) return res.status(200).send({ ok: true })
      return res.status(400).send('O carro já foi deletado')
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .patch(validate(editCarSchema), async (req, res) => {
    try {
      const refreshEditCar = await editCar(req.body)
      if (refreshEditCar) res.status(201).send({ ok: true })
      return res.status(400).send(res.message)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })

export default addNewCar
