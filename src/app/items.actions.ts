import {createAction, props} from '@ngrx/store';

export const unselect = createAction('[Items] Unselect All items');
export const select = createAction('[Items] Select All items');
export const save = createAction('[Items] Save items to Store', props<{items: any[]}>());
export const refetch = createAction('[Items] Refetch items from mock BackEnd');
