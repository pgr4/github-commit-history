import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GithubUser } from '../shared/models/github-user';
import { GithubApiService } from '../shared/services/github-api/github-api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() public githubUser$: Subject<GithubUser | undefined> | undefined;

  public githubUser: GithubUser | undefined;
  public swapUserValue: string = '';
  public displayStyle = 'none';

  @ViewChild('modal') modal: ElementRef | undefined;

  constructor(private readonly githubApiService: GithubApiService) {}

  ngOnInit(): void {
    this.githubUser$?.subscribe((t) => (this.githubUser = t));
  }

  openPopup() {
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  save() {
    this.githubApiService
      .getUser(this.swapUserValue)
      .then((t) => this.githubUser$?.next(t))
      .finally(() => {
        this.swapUserValue = '';
        this.displayStyle = 'none';
      });
  }
}
