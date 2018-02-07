const Sequelize = require('sequelize');
const { connectionString } = require('../configuration');

const sequelize = new Sequelize(connectionString);

const User = require('./entities/User')(sequelize);
const Project = require('./entities/Project')(sequelize);

sequelize.sync();

module.exports = {
    User,
    Project,
    sync: sequelize.sync.bind(this),
    close: () => sequelize.connectionManager.close(),
};