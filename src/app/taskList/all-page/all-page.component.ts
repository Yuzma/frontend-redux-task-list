import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppSate} from '../../app.reducer';
import {toggleCompleted} from '../homeworks.actions';
import {validFilter} from '../../filter/filter.action';

@Component({
  selector: 'app-all-page',
  templateUrl: './all-page.component.html',
  styleUrls: ['./all-page.component.css']
})
export class AllPageComponent implements OnInit {

  completed: boolean  = false;

  constructor(private store: Store<AppSate>) { }

  ngOnInit() {

  }

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(toggleCompleted({completed: this.completed}));
  }

}
