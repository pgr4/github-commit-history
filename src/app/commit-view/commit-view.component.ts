import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GithubCommit } from '../shared/models/github-commit';

@Component({
  selector: 'app-commit-view',
  templateUrl: './commit-view.component.html',
  styleUrls: ['./commit-view.component.css']
})
export class CommitViewComponent {
  @Input() public githubCommit: GithubCommit|undefined;
}
