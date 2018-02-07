const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ projectService }) {
    router.get('/', asyncWrapper(async(req, res) => {
        const projects = await projectService.getAllProjects();
        res.json(projects);
    }));

    // TODO: Install middleware to validate the input
    router.post('/', asyncWrapper(async(req, res) => {
        const project = req.body;
        await projectService.createProject(project);
        // TODO: Fix the response
        res.json({});
    }));

    return router;
}

module.exports.create = create;