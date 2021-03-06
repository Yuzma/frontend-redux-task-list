import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksFooterComponent } from './tasks-footer.component';

describe('AllFooterComponent', () => {
  let component: TasksFooterComponent;
  let fixture: ComponentFixture<TasksFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
