import {createAction, props} from '@ngrx/store';

export const create = createAction(
  '[homework] Create homework',
  props<{text: string}>());

export const toggle = createAction(
  '[homework] Toggle homework',
  props<{id: number}>());

export const edit = createAction(
  '[homework] Edit homework',
  props<{id: number, text: string }>());

export const deleteTask = createAction(
  '[homework] Delete homework',
  props<{id: number }>());

export const toggleCompleted = createAction(
  '[homework] Delete homework',
  props<{completed: boolean }>());

export const cleanTasksCompleted = createAction('[homework] clean task completed');
