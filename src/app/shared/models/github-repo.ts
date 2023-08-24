export class GithubRepo {
    constructor(
        public id: number,
        public name: string,
        public full_name: string,
        public url: string,
        public commits_url: string
    ) {}
}
