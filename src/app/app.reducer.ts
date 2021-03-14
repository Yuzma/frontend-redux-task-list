import {All} from './taskList/models/all.model';
import {ActionReducerMap} from '@ngrx/store';
import {homeworkReducer} from './taskList/homeworks.reducer';
import {validFilter} from './filter/filter.action';
import {filterReducer} from './filter/filter.reducer';

export  interface AppSate{

  homework: All[],
  filter: validFilter
}

export const appReducers: ActionReducerMap<AppSate> = {
  homework: homeworkReducer,
  filter: filterReducer

}
