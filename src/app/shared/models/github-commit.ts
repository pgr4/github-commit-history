import { GithubUser } from "./github-user";

export class GithubCommit {
    constructor(
        public sha: string,
        public url: string,
        public html_url: string,
        public author: GithubUser,
        public committer: GithubUser
    ) {}
}
