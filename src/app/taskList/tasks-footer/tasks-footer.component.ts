import { Component, OnInit } from '@angular/core';
import {setFilter, validFilter} from '../../filter/filter.action';
import {Store} from '@ngrx/store';
import {AppSate} from '../../app.reducer';
import {cleanTasksCompleted} from '../homeworks.actions';

@Component({
  selector: 'app-tasks-footer',
  templateUrl: './tasks-footer.component.html',
  styleUrls: ['./tasks-footer.component.css']
})
export class TasksFooterComponent implements OnInit {
  currentFilter: validFilter = 'allTasks';
  filter: validFilter[] = ['allTasks', 'completed', 'pending'];
  pending: number = 0;
  constructor(private store: Store<AppSate>) { }

  ngOnInit() {
   /* this.store.select('filter').subscribe(filter => {
      console.log('filter', filter);
    })*/
   this.store.subscribe(state => {
     this.currentFilter = state.filter;
     this.pending = state.homework.filter(task => !task.completed).length;
   })
  }

  changeFilter(filter: validFilter) {
    this.store.dispatch(setFilter({filter}));
  }

  cleanHomeworks(){
    console.log('llame aqui')
    this.store.dispatch(cleanTasksCompleted());
  }

}
