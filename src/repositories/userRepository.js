function create({ User }) {
    async function getAll() {
        const users = await User.findAll();
        return users.map(function(user){
            user.toUserModel()
        });
    }

    async function add(user) {
        await User.build(user).save();
    }

    return {
        add,
        getAll,
    };
}

module.exports.create = create;
