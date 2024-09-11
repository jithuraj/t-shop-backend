import Joi from "joi";

const schema = Joi.object(
  {
    name: Joi.string().required().required(),
    price: Joi.number().required()
  }
)

export default function validateProductAdd(data) {

  const { error, value } = schema.validate(data)
  if (error) {
    throw new Error(error.details.map(detail => detail.message))
  }
  return value
}
