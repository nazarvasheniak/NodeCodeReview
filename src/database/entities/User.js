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

    // Map to application model so we don't have tight coupling 
    // throughout the app with the db implemenation
    User.prototype.toUserModel = function toUserModel() {
        return new UserModel(this.username_github, this.username_telegram);
    };

    return User;
};