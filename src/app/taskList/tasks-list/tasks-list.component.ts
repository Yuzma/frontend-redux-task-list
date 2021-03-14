import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../models/task.model';
import {Store} from '@ngrx/store';
import {AppSate} from '../../app.reducer';
import {validFilter} from '../../filter/filter.action';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  homework:TaskModel[] = [];
  currentFilter: validFilter;

  constructor( private store:Store<AppSate>) { }

  ngOnInit() {
    /*this.store.select('homework')
      .subscribe( homeworks => this.homework = homeworks);*/
    this.store.subscribe(({ homework, filter}) => {
      this.homework = homework;
      this.currentFilter = filter;
    })
  }

}
