import {TaskModel} from './taskList/models/task.model';
import {ActionReducerMap} from '@ngrx/store';
import {homeworkReducer} from './taskList/homeworks.reducer';
import {validFilter} from './filter/filter.action';
import {filterReducer} from './filter/filter.reducer';

export  interface AppSate{

  homework: TaskModel[],
  filter: validFilter
}

export const appReducers: ActionReducerMap<AppSate> = {
  homework: homeworkReducer,
  filter: filterReducer

}
