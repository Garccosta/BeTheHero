//celebrate is an express middleware function that wraps the joi validation library 
const { celebrate, Segments, Joi } = require('celebrate');

const validations =
{
  ongs: 
    celebrate({
      [Segments.BODY]: Joi.object().keys({
          name: Joi.string().required(),
          email: Joi.string().required().email(),
          whatsapp: Joi.number().required().min(10),
          city: Joi.string().required(),
          uf: Joi.string().required().length(2),
      })  
    }),
  profile:
    celebrate({
      [Segments.HEADERS]: Joi.object({
          authorization: Joi.string().required()
      }).unknown()
    }), 
  incidents:
    {
      get:
        celebrate({
          [Segments.QUERY]: Joi.object().keys({
              page: Joi.number()
          })
        }), 
      delete:
        celebrate({
          [Segments.PARAMS]: Joi.object().keys({
              id: Joi.number().required()
          })
        })
    }
}

module.exports = validations;