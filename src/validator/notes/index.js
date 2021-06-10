/* eslint-disable no-tabs */
/* eslint-disable indent */
// membuat fungsi sebagai validator menggunakan schema dari schema.js
const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
		if (validationResult.error) {
			throw new InvariantError(validationResult.error.message);
		}
	},
};
module.exports = NotesValidator;
