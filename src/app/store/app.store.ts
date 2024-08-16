import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { counterReducer } from './reducers/counter.reducer';

export const appStoreConfig = [
  provideStore({ counter: counterReducer }),
  provideStoreDevtools({
    maxAge: 25, // Retains last 25 states
    logOnly: false, // Restrict extension to log-only mode
  }),
];
