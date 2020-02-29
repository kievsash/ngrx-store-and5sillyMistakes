import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {save, refetch} from './items.actions';
import {map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {initialState} from './items.reducer';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
  }

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(refetch),
        mergeMap(() => of([...initialState])), // mocking backend
        map((value) => save({items: value}))
      );
    }
  );
}
