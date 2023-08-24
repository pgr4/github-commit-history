import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubUser } from '../../models/github-user';
import { GithubRepo } from '../../models/github-repo';
import { GithubCommit } from '../../models/github-commit';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly API_BASE = 'https://api.github.com';

  constructor(private readonly http: HttpClient) { }

  private formURL(str: string) : string {
    return `${this.API_BASE}/${str}`
  }

  public getUser(user: string) : Promise<GithubUser|undefined> {
    return this.http.get<GithubUser>(this.formURL(`users/${user}`)).toPromise();
  }

  public getRepos(githubUser: GithubUser) : Promise<GithubRepo[]|undefined> {
    return this.http.get<GithubRepo[]>(githubUser.repos_url).toPromise();
  }

  public getCommits(githubRepo: GithubRepo) : Promise<GithubCommit[]|undefined> {
    return this.http.get<GithubCommit[]>(githubRepo.commits_url.replace('{/sha}', '')).toPromise();
  }
}
