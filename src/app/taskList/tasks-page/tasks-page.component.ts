import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppSate} from '../../app.reducer';
import {toggleCompleted} from '../homeworks.actions';
import {validFilter} from '../../filter/filter.action';

@Component({
  selector: 'app-task-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  completed: boolean  = false;

  constructor(private store: Store<AppSate>) { }

  ngOnInit() {

  }

  toggletask() {
    this.completed = !this.completed;
    this.store.dispatch(toggleCompleted({completed: this.completed}));
  }

}
