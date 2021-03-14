import { createReducer, on } from '@ngrx/store';
import {create, toggle, edit, deleteTask, toggleCompleted, cleanTasksCompleted} from './homeworks.actions';
import {All} from './models/all.model';

export const initialState:All[] = [
  new All('Save the world'),
  new All('Defeat Thanos'),
  new All('Buy Ironman suit'),
  new All('Steal captain america shiels'),
];

const _homeworkReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new All(text)]),
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
