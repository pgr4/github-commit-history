import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitViewComponent } from './commit-view.component';

describe('CommitViewComponent', () => {
  let component: CommitViewComponent;
  let fixture: ComponentFixture<CommitViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommitViewComponent]
    });
    fixture = TestBed.createComponent(CommitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
