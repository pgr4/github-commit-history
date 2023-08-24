import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../shared/services/github-api/github-api.service';
import { GithubUser } from '../shared/models/github-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public githubUser: GithubUser|undefined;


  constructor(private readonly githubApiService: GithubApiService) {

  }

  ngOnInit(): void {
      this.githubApiService.getUser('pgr4')
      .then(t => this.githubUser = t)
      .catch(
        // TODO: Do something here
      )
  }
}
