import { createReducer, on } from '@ngrx/store';
import {create, toggle, edit, deleteTask, toggleCompleted, cleanTasksCompleted} from './homeworks.actions';
import {TaskModel} from './models/task.model';

export const initialState:TaskModel[] = [
  new TaskModel('Save the world'),
  new TaskModel('Defeat Thanos'),
  new TaskModel('Buy Ironman suit'),
  new TaskModel('Steal captain america shiels'),
];

const _homeworkReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new TaskModel(text)]),
  on(deleteTask, (state, {id}) => state.filter( task => task.id !== id)),
  on(toggle, (state, {id}) => {
    return state.map(homework => {
      if (homework.id === id) {
        return {
          ...homework,
          completed: !homework.completed
        }
      } else {
        return homework;
      }
    })
  }),

  on(edit, (state, {id, text}) => {
    return state.map(homework => {
      if (homework.id === id) {
        return {
          ...homework,
          text
        }
      } else {
        return homework;
      }
    })
  }),

  on(toggleCompleted, (state, {completed}) => {
    return state.map(homework => {

        return {
          ...homework,
          completed
        }
    })
  }),

  on(cleanTasksCompleted, state => state.filter(task => !task.completed)),
);

export function homeworkReducer(state, action) {
  return _homeworkReducer(state, action);
}
