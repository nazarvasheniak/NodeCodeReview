const express = require('express');
const asyncWrapper = require('../utils/asyncWrapper');

const router = express.Router();

function create({ webhookService }) {
    router.get('/', asyncWrapper(async(req, res) => {
        res.json('get');
    }));

    router.post('/', asyncWrapper(async(req, res) => {
        const data = req.body;
        await webhookService.sendMessage(data);

        res.json({});
    }));

    return router;
}

module.exports.create = create;