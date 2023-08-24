import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoViewComponent } from './repo-view.component';

describe('RepoViewComponent', () => {
  let component: RepoViewComponent;
  let fixture: ComponentFixture<RepoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoViewComponent]
    });
    fixture = TestBed.createComponent(RepoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
