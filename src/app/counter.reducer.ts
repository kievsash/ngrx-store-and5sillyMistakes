import {createReducer, on} from '@ngrx/store';
import {increment, reload} from './counter.actions';

export const initialState = Array.from(Array(300).keys()).map((item, index) => ({
  num: index,
  address: 'tst',
  validity: true,
  addres2: {
    city: 'K',
    street: 'ss',
    number: 'ttt',
    s: {}
  }
}));

const counterReducerFunc = createReducer(initialState,
  on(increment, (state, value) => {
    return state.map(item => ({num: item.num + value.value}));
  }),
  on(reload, (state, value) => {
    return value.newValue; // save new value to store
  })
);

export function counterReducer(state, action) {
  return counterReducerFunc(state, action);
}
