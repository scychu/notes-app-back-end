/* eslint-disable no-console */
// const InvariantError = require('../../exceptions/InvariantError');
// const { UserPayloadSchema } = require('./schema');

// const UsersValidator = {
// 	validateUserPayload: (payload) => {
// 		const validationResult = UserPayloadSchema.validate(payload);
// 		console.log('validasi', validationResult);
// 		if (validationResult.error) {
// 			console.log('payloaderr', validationResult.error.message);
// 			throw new InvariantError(validationResult.error.message);
// 		}
// 	},
// };
// module.exports = UsersValidator;
const InvariantError = require('../../exceptions/InvariantError');
const { UserPayloadSchema } = require('./schema');

const UsersValidator = {
  validateUserPayload: (payload) => {
    const validationResult = UserPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UsersValidator;
