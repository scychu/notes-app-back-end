/* eslint-disable no-tabs */
/* eslint-disable indent */
// fokus membuat dan menulis objeck schema data notes
const Joi = require('joi');

const NotePayloadSchema = Joi.object({
	title: Joi.string().required(),
	body: Joi.string().required(),
	tags: Joi.array().items(Joi.string()).required(),
});

module.exports = { NotePayloadSchema };
