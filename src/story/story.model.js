const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	topicId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Topic",
		required: true
	},
	date_added: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Story", StorySchema);
