const Sequelize = require('sequelize');
const UserModel = require('../../models/User');

module.exports = (sequelize) => {
    const User = sequelize.define('user', {
        username_github: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        username_telegram: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    User.prototype.toUserModel = function toUserModel() {
        return new UserModel(this.username_github, this.username_telegram);
    };

    return User;
};