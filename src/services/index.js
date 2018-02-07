const userServiceFactory = require('./userService');
const projectServiceFactory = require('./projectService');

module.exports = (repositories) => {
    const userService = userServiceFactory.create(repositories.userRepository);
    const projectService = projectServiceFactory.create(repositories.projectRepository);

    return ({
        userService,
        projectService,
    });
};