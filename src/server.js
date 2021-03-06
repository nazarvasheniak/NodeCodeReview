require('dotenv').config();
const logger = require('./libs/logger');
const { port } = require('./configuration');
const db = require('./database');
const repositories = require('./repositories')(db);
const services = require('./services')(repositories);
const app = require('./http/app')(services);
const signals = require('./signals');
const moment = require('moment');
const TelegramBot = require('node-telegram-bot-api');
const token = '536984728:AAEgy-XZQUoDGaTJWJ_WyeIm6ODykTeWkUo';

const bot = new TelegramBot(token, { polling: true });

const server = app.listen(port, function(req, res) {
    logger.info(`Listening on *:${port}`);
});

const shutdown = signals.init(async() => {
    await db.close();
    await server.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);