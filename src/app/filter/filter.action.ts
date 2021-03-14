import { createAction, props } from '@ngrx/store';

export type validFilter = 'allTasks' | 'completed' | 'pending';

export const setFilter = createAction(
  '[Filter] Set Filter',
   props<{filter: validFilter}>());
