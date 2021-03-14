import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {Store} from '@ngrx/store';
import {AppSate} from '../../app.reducer';
import * as actions from '../homeworks.actions';

@Component({
  selector: 'app-all-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TasksAddComponent implements OnInit {

  txtInput:FormControl;

  constructor( private store: Store<AppSate>) {
    this.txtInput = new FormControl('Hola', Validators.required);
  }

  ngOnInit() {
  }

  addHomework() {
    if (this.txtInput.invalid) {return; }
    this.store.dispatch(actions.create({ text: this.txtInput.value }));
    this.txtInput.reset();
  }

}
