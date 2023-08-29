import { GithubUser } from "./github-user";

export class GithubCommitDetail {
    constructor(
        public author: GithubAuthor,
        public message: string,
        public url: string
    ){}
}

export class GithubAuthor {
    constructor(
        public name: string,
        public email: string,
        public date: Date,
    ) {}
}

export class GithubCommit {
    constructor(
        public sha: string,
        public commit: GithubCommitDetail,
        public url: string,
        public html_url: string,
        public author: GithubUser,
        public committer: GithubUser
    ) {}
}
