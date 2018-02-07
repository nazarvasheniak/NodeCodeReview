function create(userRepository) {
    async function getAllUsers() {
        const users = await userRepository.getAll();
        return users;
    }

    async function createUser(user) {
        await userRepository.add(user);
    }

    return {
        createUser,
        getAllUsers,
    };
}

module.exports.create = create;