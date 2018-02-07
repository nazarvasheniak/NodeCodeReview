class User {
    username_github: any;
    username_telegram: any;

    constructor(username_github: any, username_telegram: any) {
        this.username_github = username_github;
        this.username_telegram = username_telegram;
    }
}

module.exports = User;