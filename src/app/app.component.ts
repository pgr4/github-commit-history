import { Component, OnInit } from '@angular/core';
import { GithubApiService } from './shared/services/github-api/github-api.service';
import { GithubUser } from './shared/models/github-user';
import { GithubRepo } from './shared/models/github-repo';
import { GithubCommit } from './shared/models/github-commit';
import { Subject, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public githubUser: GithubUser | undefined;
  public githubRepos: GithubRepo[] | undefined;
  public githubCommits: GithubCommit[] | undefined;
  public title = 'github-commit-history';

  private githubUser$: Subject<GithubUser | undefined> = new Subject<
    GithubUser | undefined
  >();
  private githubRepo$: Subject<GithubRepo | undefined> = new Subject<
    GithubRepo | undefined
  >();
  private githubCommit$: Subject<GithubCommit | undefined> = new Subject<
    GithubCommit | undefined
  >();

  constructor(private readonly githubApiService: GithubApiService) {
    this.githubUser$.subscribe((t) => {
      this.githubUser = t;
    });

    this.githubUser$.pipe(
      filter((t) => t !== undefined),
      switchMap((t) =>
        this.githubApiService
          .getRepos(t!!)
          .then((repos) => (this.githubRepos = repos))
          .catch()
      )
    ).subscribe();

    this.githubRepo$.pipe(
      filter((t) => t !== undefined),
      switchMap((t) =>
        this.githubApiService
          .getCommits(t!!)
          .then((commits) => (this.githubCommits = commits))
          .catch()
      )
    ).subscribe();

    this.githubApiService
      .getUser('pgr4')
      .then((t) => this.githubUser$.next(t))
      .catch
      // TODO: Do something here
      ();
  }

  ngOnInit(): void {
    
  }
}
