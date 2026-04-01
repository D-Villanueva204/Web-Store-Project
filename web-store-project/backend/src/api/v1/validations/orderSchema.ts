import Joi from 'joi'

/**
 * Schema for creating a new order
 */
export const createOrderSchema = Joi.object({
  items: Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required(),
        price: Joi.number().positive().required(),
        quantity: Joi.number().integer().min(1).default(1)
      })
    )
    .min(1)
    .required()
    .messages({
      'array.min': 'At least one item is required',
      'array.base': 'Items must be an array'
    }),
  
  total: Joi.number()
    .positive()
    .required()
    .messages({
      'number.positive': 'Total must be a positive number',
      'any.required': 'Total is required'
    })
})


export const getOrderByIdSchema = Joi.object({
  id: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      'number.base': 'Order ID must be a number',
      'number.integer': 'Order ID must be an integer',
      'number.positive': 'Order ID must be positive'
    })
})