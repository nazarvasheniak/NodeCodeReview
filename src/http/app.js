const express = require('express');
const bodyParser = require('body-parser');
const webhookRoute = require('./routes/webhook');
const userRoute = require('./routes/user');
const projectRoute = require('./routes/project');
const errorRoute = require('./routes/error');

const app = express();
app.use(bodyParser.json());

module.exports = (services) => {
    const webhook = webhookRoute.create();
    const user = userRoute.create(services);
    const project = projectRoute.create(services);

    app.use('/webhook', webhook);
    app.use('/users', user);
    app.use('/projects', project);
    app.use(errorRoute);

    return app;
};