const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');

module.exports = subscriptionServer = (keycloakService, httpServer, apolloServer) => {
    return new SubscriptionServer({
        execute,
        subscribe,
        onConnect: async connectionParams => {
            if (keycloakService) {
                return await keycloakService.validateToken(connectionParams)
            } else {
                return true;
            }
        },
        schema: apolloServer.schema
    }, {
            server: httpServer,
            path: '/graphql'
        });
}