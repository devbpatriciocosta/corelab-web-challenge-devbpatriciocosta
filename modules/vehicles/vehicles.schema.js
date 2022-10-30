import Joi from 'joi'

import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi)

export const newCarSchema = Joi.object({
  carModel: Joi.string().required().max(22),
  carBrand: Joi.string().required().max(16),
  carColor: Joi.string().required().max(16),
  carDescription: Joi.string().required().max(50),
  carYear: Joi.string().required().max(4).min(4),
  carPlate: Joi.string().required().max(10),
  carPrice: Joi.string().required().max(16)
})

export const filterCarSchema = Joi.object({
  carBrand: Joi.string().required().max(16),
  carColor: Joi.string().required().max(16),
  carYear: Joi.string().required().max(4).min(4),
  minPrice: Joi.string(),
  maxPrice: Joi.string()
})

export const deleteNewCarSchema = Joi.object({
  id: Joi.objectId().required()
})

export const editCarSchema = Joi.object({
  id: Joi.objectId(),
  carModel: Joi.string(),
  carBrand: Joi.string(),
  carColor: Joi.string(),
  carDescription: Joi.string(),
  carYear: Joi.string(),
  carPlate: Joi.string(),
  carPrice: Joi.string(),
  isLiked: Joi.boolean()
})
