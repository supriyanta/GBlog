const { PubSub } = require("graphql-subscriptions");

const pubSub = new PubSub();
const STORY_CREATED = "STORY_CREATED";

module.exports = { pubSub, STORY_CREATED };
