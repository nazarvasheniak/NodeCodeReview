const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');
const createHandler = require('node-github-webhook');

const router = express.Router();

const handler = createHandler([
    { path: '/webhook', secret: '60f15027f1bb1e163691410845e34957814ef3ca' }
]);

function create() {
    router.get('/', asyncWrapper(async(req, res) => {
        /* const projects = await projectService.getAllProjects();
        res.json(projects); */
        console.log(res);
    }));

    // TODO: Install middleware to validate the input
    router.post('/', asyncWrapper(async(req, res) => {
        /* const project = req.body;
        await projectService.createProject(project); */
        // TODO: Fix the response
        res.json({});
        console.log(res);
    }));

    return router;
}

module.exports.create = create;