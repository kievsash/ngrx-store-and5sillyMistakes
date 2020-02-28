import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment', props<{value: number}>());
export const multiply = createAction('[Counter Component] Multiply by 5');
export const reload = createAction('[Counter Component] save', props<{newValue: any}>());
