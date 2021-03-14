import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPageComponent } from './tasks-page.component';

describe('AllPageComponent', () => {
  let component: TasksPageComponent;
  let fixture: ComponentFixture<TasksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
