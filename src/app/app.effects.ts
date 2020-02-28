import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {increment, multiply, reload} from './counter.actions';
import {tap, map, mergeMap} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {of} from 'rxjs';
import {initialState} from './counter.reducer';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
  }

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(multiply),
        mergeMap(() => of([...initialState])),
        map((value) => reload({newValue: value}))
      );
    }
  );
}
