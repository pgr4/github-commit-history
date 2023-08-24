import { Component, Input, OnInit } from '@angular/core';
import { GithubRepo } from '../shared/models/github-repo';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent {
   @Input() public githubRepos: GithubRepo[]|undefined;
}
