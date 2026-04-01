import Joi, {ObjectSchema} from "joi"

export const favouriteSchema: ObjectSchema = Joi.object({
    partId: Joi.string().required().messages({
        "any.required": "Part ID is required",
        "string.empty": "Part ID cannot be empty"
    })
});