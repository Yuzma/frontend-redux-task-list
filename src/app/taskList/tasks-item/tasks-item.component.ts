import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {TaskModel} from '../models/task.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppSate} from '../../app.reducer';
import * as action from '../homeworks.actions';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: TaskModel;
  @ViewChild('inputFisic') txtInputFisic: ElementRef;

  chkCompleted: FormControl;
  txtInput: FormControl;
  editing = false;

  constructor( private store: Store<AppSate>) { }

  ngOnInit() {

  this.chkCompleted = new FormControl(this.task.completed);
  this.txtInput = new FormControl(this.task.text, Validators.required);

  this.chkCompleted.valueChanges.subscribe(valor => {
    this.store.dispatch(action.toggle({id: this.task.id}));
  });
  }

  edit() {
  this.editing = true;
  this.txtInput.setValue( this.task.text);
  setTimeout(() => {
    this.txtInputFisic.nativeElement.select();
  }, 1);

  }

  finishEdition() {
    this.editing = false;
    if ( this.txtInput.invalid) { return; }
    if ( this.txtInput.value === this.task.text) { return; }
    this.store.dispatch(action.edit({id: this.task.id, text: this.txtInput.value}))
  }

  deleteTask() {
    this.store.dispatch(action.deleteTask({id: this.task.id}))
  }

}
