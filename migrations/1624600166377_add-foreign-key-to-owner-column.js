/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	// buat user baru
	pgm.sql("INSERT INTO users(id, username, password, fullname) VALUES ('old_notes', 'old_notes', 'old_notes', 'old_notes')");
	// ubah nilai owner yg kosong
	pgm.sql("UPDATE Notes SET owner = 'old_notes' WHERE owner = NULL ");
	// const foreign key pada owner
	pgm.addConstraint('notes', 'fk_notes.owner_users.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
	// hapus const fk_note
	pgm.dropConstraint('notes', 'fk_notes.owner_users.id');
	// ubah nilai owner jadi NULL
	pgm.sql("UPDATE notes SET owner = NULL WHERE owner = 'old_notes'");
	// hapus user baru
	pgm.sql("DELETE FROM users WHERE id = 'old_notes'");
};
