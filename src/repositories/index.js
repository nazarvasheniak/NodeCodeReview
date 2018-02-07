const userRepositoryFactory = require('./userRepository');
const projectRepositoryFactory = require('./projectRepository');

module.exports = (db) => {
    const userRepository = userRepositoryFactory.create(db);
    const projectRepository = projectRepositoryFactory.create(db);
    return ({
        userRepository,
        projectRepository,
    });
};