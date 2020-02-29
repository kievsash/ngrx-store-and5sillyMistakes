import {createReducer, on} from '@ngrx/store';
import {unselect, select, save} from './items.actions';

export const initialState = Array.from(Array(300).keys()).map((item, index) => ({
  num: index,
  checked: false,
  validity: true,
  address: {
    city: 'K',
    street: 'ss',
    number: 'ttt',
    rooms: [1, 2, 3, 4, 5, 6],
    test: {
      data: 5
    }
  }
}));

const counterReducerFunc = createReducer(initialState,
  on(unselect, (state, value) => {
    return state.map(item => ({...item, checked: false}));
  }),
  on(select, (state, value) => {
    return state.map(item => ({...item, checked: true}));
  }),
  on(save, (state, value) => {
    return value.items;
  }),
);

export function itemsReducer(state, action) {
  return counterReducerFunc(state, action);
}
