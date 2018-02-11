function create() {
    async function sendMessage(data) {
        console.log(data);
    }

    return {
        sendMessage,
    };
}

module.exports.create = create;