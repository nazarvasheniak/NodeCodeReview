const config = {
    connectionString: process.env.DATABASE_CONNECTION_STRING || 'mysql://root:Paravozik123@localhost:3306/codereview',
    port: process.env.PORT || 8081,
};

module.exports = config;