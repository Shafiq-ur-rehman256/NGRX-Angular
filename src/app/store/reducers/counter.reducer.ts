import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => {
    let tempState = state;
    if (tempState > 0) {
     return  tempState - 1
    }
    return tempState
  }),
  on(reset, (state) => 0)
);