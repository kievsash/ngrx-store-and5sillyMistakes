import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment', props<{value: number}>());
