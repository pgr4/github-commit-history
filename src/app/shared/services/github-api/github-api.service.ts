import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubUser } from '../../models/github-user';

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
}
