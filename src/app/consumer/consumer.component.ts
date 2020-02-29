import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState, selectItems} from '../items.selectors';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent {

  items$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.items$ = store.pipe(select(selectItems));
  }

}
