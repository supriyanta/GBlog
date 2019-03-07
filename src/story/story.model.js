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
	}
});

module.exports = mongoose.model("Story", StorySchema);
