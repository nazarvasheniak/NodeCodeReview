class Project {
    name: string;
    repo_url: string;

    constructor(name: string, repo_url: string) {
        this.name = name;
        this.repo_url = repo_url;
    }
}

module.exports = Project;