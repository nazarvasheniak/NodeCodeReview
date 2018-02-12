function create() {
    async function send(data) {
        console.log(data);
    }

    return {
        send,
    };
}

module.exports.create = create;