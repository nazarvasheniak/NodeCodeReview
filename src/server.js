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
const createHandler = require('node-github-webhook');
const token = '536984728:AAEgy-XZQUoDGaTJWJ_WyeIm6ODykTeWkUo';

const server = app.listen(port, () => {
    logger.info(`Listening on *:${port}`);
});

const shutdown = signals.init(async() => {
    await db.close();
    await server.close();
});

let bot = new TelegramBot(token, { polling: true });
let handler = createHandler([ // multiple handlers 
    { path: '/webhook', secret: '96beb5bd6c8facaf459cf9fd49deac3f' }
]);

let testdata = server.get('user');
logger.info(testdata);

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);