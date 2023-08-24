import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import { CommitsComponent } from './commits/commits.component';
import { SharedModule } from './shared/shared.module';
import { CommitViewComponent } from './commit-view/commit-view.component';
import { RepoViewComponent } from './repo-view/repo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
    ReposComponent,
    CommitsComponent,
    CommitViewComponent,
    RepoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
