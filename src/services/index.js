const webhookServiceFactory = require('./webhookService');
const userServiceFactory = require('./userService');
const projectServiceFactory = require('./projectService');

module.exports = (repositories) => {
    const webhookService = webhookServiceFactory.create();
    const userService = userServiceFactory.create(repositories.userRepository);
    const projectService = projectServiceFactory.create(repositories.projectRepository);

    return ({
        webhookService,
        userService,
        projectService,
    });
};