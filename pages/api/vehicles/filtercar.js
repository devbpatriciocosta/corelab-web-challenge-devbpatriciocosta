import createHandler from '../../../lib/middlewares/nextConnect'

import { getCars } from '../../../modules/vehicles/vehicles.service'

const carFilter = createHandler()

carFilter.get(async (req, res) => {
  try {
    const filter = await getCars()
    res.status(200).send(filter)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

export default carFilter
