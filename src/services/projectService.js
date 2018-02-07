function create(projectRepository) {
    async function getAllProjects() {
        const projects = await projectRepository.getAll();
        return projects;
    }

    async function createProject(project) {
        await projectRepository.add(project);
    }

    return {
        createProject,
        getAllProjects,
    };
}

module.exports.create = create;