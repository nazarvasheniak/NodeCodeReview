function create({ Project }) {
    async function getAll() {
        const projects = await Project.findAll();
        return projects.map(project => project.toProjectModel());
    }

    async function add(project) {
        await Project.build(project).save();
    }

    return {
        add,
        getAll,
    };
}

module.exports.create = create;