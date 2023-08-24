export class GithubUser {
    constructor(
        public id: number,
        public login: string,
        public url: string,
        public avatar_url: string,
        public repos_url: string,
        public html_url: string
    ) {
        
    }
}

