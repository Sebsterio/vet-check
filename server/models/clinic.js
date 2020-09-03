const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClinicSchema = new Schema({
	name: String,
	address: String,
	email: String,
	phone: String,
	members: [
		{
			email: String,
			role: String,
		},
	],
	dateRegistered: Date, // for finding stale documents
	dateSynced: Date, // for finding stale documents
	dateModified: Date, // for sync
	modifiedBy: String, // email (?)
});

const Clinic = mongoose.model("Clinic", ClinicSchema);

module.exports = Clinic;
