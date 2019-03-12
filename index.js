const express = require("express");
const { createServer } = require("http");
const { VoyagerServer } = require("@aerogear/voyager-server");
const cors = require("cors");
const mongoose = require("mongoose");

const subscriptionServer = require("./subscriptions");
const { typeDefs, resolvers } = require("./src");
const { mongodbUrl } = require("./keys");

// Connecting Database
mongoose
	.connect(mongodbUrl, { useNewUrlParser: true })
	.then(() => console.log("DB connected!"))
	.catch(() => console.log("DB connection failed!"));
mongoose.set("useCreateIndex", true);


const PORT = 4000;
let keycloakService = null;

const app = express();
app.use(cors());

const httpServer = createServer(app);

app.use(cors())

const apolloConfig = {
	typeDefs,
	resolvers
};

const voyagerConfig = {
	securityService: keycloakService
};

const apolloServer = VoyagerServer(apolloConfig, voyagerConfig);

apolloServer.applyMiddleware({ app });

httpServer.listen({
	port: PORT
}, () => {
	console.log(`🚀  Server ready at http://localhost:${PORT}/graphql`)
	subscriptionServer(keycloakService, httpServer, apolloServer)
});
