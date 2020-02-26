import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState, FeatureState, selectFeatureCount} from '../counter.selectors';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select(selectFeatureCount));
  }

}
