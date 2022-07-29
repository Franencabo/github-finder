class GitHub {
    constructor() {
        this.client_id = '1a359ae222a4e4a640fc',
        this.client_secret = '95e35228e9f88bfa3a228e2f0a4e3c7d112ad2c2';
        this.repos_count = 5;
        this.respos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.respos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();

        return {
            profile: profileData,
            repos: reposData
        }
    }
}