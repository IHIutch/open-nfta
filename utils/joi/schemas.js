import Joi from "joi";

export const tripSchema = Joi.object().keys({
  id: Joi.number().integer().min(1),
  routeId: Joi.number().integer().min(1),
  serviceId: Joi.number().integer().min(1),
  tripId: Joi.number().integer().min(1),
  tripHeadsign: Joi.string(),
  directionId: Joi.number().integer().min(1),
  blockId: Joi.number().integer().min(1),
  shapeId: Joi.number().integer().min(1),
});
