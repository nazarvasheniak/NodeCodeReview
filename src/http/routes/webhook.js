const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create() {
    router.get('/', asyncWrapper(async(req, res) => {
        res.json('get');
    }));

    router.post('/', asyncWrapper(async(req, res) => {
        const data = req.body;

        // TODO: Fix the response
        res.json({});
    }));

    return router;
}

module.exports.create = create;