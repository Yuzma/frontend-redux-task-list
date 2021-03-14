import { Component, OnInit } from '@angular/core';
import {All} from '../models/all.model';
import {Store} from '@ngrx/store';
import {AppSate} from '../../app.reducer';
import {validFilter} from '../../filter/filter.action';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {

  homework:All[] = [];
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
