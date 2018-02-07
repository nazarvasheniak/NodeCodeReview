class User {
    username_github: string;
    username_telegram: string;

    constructor(username_github: string, username_telegram: string) {
        this.username_github = username_github;
        this.username_telegram = username_telegram;
    }
}

module.exports = User;