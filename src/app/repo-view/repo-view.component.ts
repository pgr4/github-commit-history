import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GithubRepo } from '../shared/models/github-repo';

@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  styleUrls: ['./repo-view.component.css']
})
export class RepoViewComponent {
  @Input() public githubRepo: GithubRepo|undefined;
  @Input() public selectedGithubRepo: GithubRepo | undefined;
  @Output() public githubRepoSelectedEvent = new EventEmitter<GithubRepo>();

  public onClick() {
    this.githubRepoSelectedEvent.emit(this.githubRepo);
  }

  public get isSelected(): boolean {
    return this.selectedGithubRepo?.id === this.githubRepo?.id
  }
}
