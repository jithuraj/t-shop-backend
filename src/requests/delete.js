import Joi from "joi";

const schema = Joi.object({
  id: Joi.string().required(),
});

export default function validateProductDelete(data) {
  const { error, value } = schema.validate(data);
  if (error) {
    throw new Error(error.details.map((detail) => detail.message));
  }
  return value;
}
