import { Component, Input, OnInit } from '@angular/core';
import { GithubUser } from '../shared/models/github-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() public githubUser: GithubUser | undefined;

  ngOnInit(): void {
  }
}
