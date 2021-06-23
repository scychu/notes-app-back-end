/* eslint-disable camelcase */
/* eslint-disable no-tabs */
/* eslint-disable indent */
const mapDBToModel = ({
	id,
	title,
	body,
	tags,
	created_at,
	updated_at,
}) => ({
	id,
  title,
  body,
  tags,
  createdAt: created_at,
  updatedAt: updated_at,
});
module.exports = { mapDBToModel };
