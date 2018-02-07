const Sequelize = require('sequelize');
const ProjectModel = require('../../models/Project');

module.exports = (sequelize) => {
    const Project = sequelize.define('project', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        repo_url: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    Project.prototype.toProjectModel = function toProjectModel() {
        return new ProjectModel(this.name, this.repo_url);
    };

    return Project;
};