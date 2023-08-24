import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GithubCommit } from '../shared/models/github-commit';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent {
  @Input() public githubCommits: GithubCommit[] | undefined;
  @Output() public githubCommitSelectedEvent = new EventEmitter<GithubCommit>();
}
